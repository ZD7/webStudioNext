import  { PortfolioItem } from "../../../types/types"
import styles from "../../../styles/portfolio.module.css"
import Layout from "../../../components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

interface ItemProps {
    portfolioItem: PortfolioItem;
}
const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos/"


export default function Item({ portfolioItem }: ItemProps) {
 return (
   <Layout>
     <div className={styles.item}>
       <h1>Проект: {portfolioItem.title}</h1>
       <Image 
         src={portfolioItem.url} 
         width={400} 
         height={400} 
         alt={portfolioItem.title} />
       <Link className={styles.link} href="/portfolio">Назад к списку работ</Link>
     </div>
   </Layout>
 )
}

export async function getServerSideProps({ params }) {
    const url = `${PHOTOS_API_URL}${params.id}`
    const { data } = await axios.get<PortfolioItem[]>(url);
   
   
    return {
      props: { portfolioItem: data }
    }
   }
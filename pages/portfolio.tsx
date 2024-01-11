import { prepareData } from "../helpers/prepare_data";
import { useState, useEffect } from "react";
import { ItemsByGroup, PortfolioItem } from "../types/types";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/portfolio.module.css";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";

const nameGroup = ["Корпоративные сайты", "CRM-системы", "Прочие проекты"];

export default function Portfolio() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

  const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos/";

  const load = async () => {
    try {
      const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
      const prepared = prepareData(data.slice(0, 7), 3, nameGroup);

      setItems(prepared);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Layout>... loading ...</Layout>;
  } else
    return (
      <Layout>
        <h1>Наши работы</h1>

        {itemsByGroup?.length ? (
          <div>
            {itemsByGroup.map((group, i) => (
              <div key={i} className={styles.groupWrapper}>
                <h2>{group[0]}</h2>

                <div className={styles.listGroup}>
                  {group[1].map(({ id, title, thumbnailUrl }) => (
                    <div
                      key={id}
                      className={styles.groupItem}
                      onClick={() => push(`/portfolio/${id}`)}
                    >
                      <Image
                        src={thumbnailUrl}
                        width={150}
                        height={150}
                        alt={title}
                      />
                      <h3>{title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Ничего не найдено</div>
        )}
      </Layout>
    );
}

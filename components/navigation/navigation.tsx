import Link from "next/link";
import styles from "./navigation.module.css";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function Navigation() {
  const pathname = useRouter().pathname;

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          {/* <Link href="/">Главная</Link> */}

          <Link
            href="/"
            className={clsx(styles.logo, {
              [styles.disabled]: pathname === "/",
            })}
          >
            Главная
          </Link>
        </li>

        <li className={styles.item}>
          <Link href="/about">О компании</Link>
        </li>
        <li className={styles.item}>
          <Link href="/portfolio">Портфолио</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

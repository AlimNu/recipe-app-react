import Head from "next/head";
import Image from "next/image";
import Search from "../components/search.bar/search.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meals Recipe Application</title>
        <meta
          name="description"
          content="Meals Recipe Application using next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search></Search>

      <h1 className={styles.title}>Favorite Meals</h1>

      <p className={styles.description}></p>

      <div className={styles.grid}></div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

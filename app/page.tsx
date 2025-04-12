import styles from "./page.module.css";
import TopMenu from "./components/TopMenu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TopMenu />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

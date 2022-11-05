import Link from "next/link";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/">
            <h2 className={styles.link}>Home Page</h2>
          </Link>

          <Link href="/about">
            <h2 className={styles.link}>About Page</h2>
          </Link>

          <Link href="/contact">
            <h2 className={styles.link}>Contact Page</h2>
          </Link>

          <Link href="/blog">
            <h2 className={styles.link}>Blog Page</h2>
          </Link>
        </div>
      </main>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
        facere aut amet. Vero perferendis neque quisquam itaque, harum accusamus
        veniam earum saepe?
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
        facere aut amet. Vero perferendis neque quisquam itaque, harum accusamus
        veniam earum saepe?
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
        facere aut amet. Vero perferendis neque quisquam itaque, harum accusamus
        veniam earum saepe?
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
        facere aut amet. Vero perferendis neque quisquam itaque, harum accusamus
        veniam earum saepe?
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
        facere aut amet. Vero perferendis neque quisquam itaque, harum accusamus
        veniam earum saepe?
      </p>
    </div>
  );
};

export default Home;

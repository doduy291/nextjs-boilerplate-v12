import type { NextPage } from "next";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";

const About: NextPage = () => {
  return (
    <Layout>
      <Meta
        title="About"
        description="About Page"
        canonical="http://localhost:3000/about"
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>About Page</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            recusandae nihil aspernatur quas quasi dolorum voluptatibus.
            Sapiente facere aut amet. Vero perferendis neque quisquam itaque,
            harum accusamus veniam earum saepe?
          </p>
        </main>
      </div>
    </Layout>
  );
};

export default About;

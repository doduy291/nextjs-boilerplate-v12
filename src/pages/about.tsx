import type { NextPage } from "next";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta
        title="About"
        description="About Page"
        canonical="http://localhost:3000/about"
      />

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>About Page</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
      </main>
    </div>
  );
};

export default About;

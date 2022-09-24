import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.scss";

const Blog = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>Blog: {slug} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
    </div>
  );
};

export default Blog;

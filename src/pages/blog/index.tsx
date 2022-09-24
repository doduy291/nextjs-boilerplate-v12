import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.scss";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Blog: </h1>
      <ul>
        <li>
          <Link href={`/blog/first-blog`}>
            <a>First blog</a>
          </Link>
        </li>
        <li>
          <Link href={`/blog/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;

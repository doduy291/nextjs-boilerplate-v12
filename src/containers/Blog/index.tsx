import Link from "next/link";
import styles from "./styles.module.scss";
import type { Blogs } from "../../types";

interface Props {
  blogs: Blogs;
}

const Blog: React.FC<Props> = ({ blogs }) => {
  return (
    <div className={styles.container}>
      <h1>Blog: </h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

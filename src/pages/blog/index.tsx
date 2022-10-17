import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.scss";

interface Blog {
  id: number | string;
  title: string;
  description: string;
  slug: string;
}

interface Blogs extends Array<Blog> {}

interface Props {
  blogs: Blogs;
}

const BlogList: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default BlogList;

/***  getServerSideProps way ***/
// export async function getServerSideProps() {
//   const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
//   const blogs: Blogs = await res.json();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }

/***  getStaticProps way ***/
export async function getStaticProps() {
  const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
  const blogs: Blogs = await res.json();
  return {
    props: {
      blogs,
    },
    revalidate: 5, // ===> IMPORTANT
  };
}

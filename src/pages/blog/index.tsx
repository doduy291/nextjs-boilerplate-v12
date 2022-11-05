import { NextPage } from "next";
import Layout from "../../components/Layout";
import Blog from "../../containers/Blog";
import type { Blogs } from "../../types/Blog";

interface Props {
  blogs: Blogs;
}

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <Blog blogs={blogs} />
    </Layout>
  );
};

export default BlogPage;

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

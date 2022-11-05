import { NextPage, GetStaticPropsContext } from "next";
import Layout from "~/components/Layout";
import BlogDetail from "~/containers/Blog/BlogDetail";
import type { Blog, Blogs } from "~/types/Blog";

interface Props {
  blog: Blog;
}

const BlogDetailPage: NextPage<Props> = ({ blog }) => {
  return (
    <Layout>
      <BlogDetail blog={blog} />
    </Layout>
  );
};

export default BlogDetailPage;

export async function getStaticPaths() {
  const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
  const blogs: Blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: true, // ===> IMPORTANT
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const res = await fetch(
    `https://63444e7d242c1f347f839ee0.mockapi.io/blogs/${id}`,
  );
  const blog = await res.json();

  return {
    props: { blog },
    revalidate: 5, // ===> IMPORTANT
  };
}

import type { NextPage } from "next";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import About from "../containers/About";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Meta
        title="About"
        description="About Page"
        canonical="http://localhost:3000/about"
      />
      <About />
    </Layout>
  );
};

export default AboutPage;

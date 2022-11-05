import type { NextPage } from "next";
import Layout from "~/components/Layout";
import Meta from "~/components/Meta";
import Contact from "~/containers/Contact";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Meta
        title="Contact"
        description="Contact Page"
        canonical="http://localhost:3000/contact"
      />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

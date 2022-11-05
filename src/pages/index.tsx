import type { NextPage } from "next";
import Meta from "~/components/Meta";
import Home from "~/containers/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Meta
        title="Test title"
        description="Generated by create next app"
        canonical="http://localhost:3000"
      />

      <Home />
    </>
  );
};

export default HomePage;

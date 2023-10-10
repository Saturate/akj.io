import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>akj.io</title>
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Index;

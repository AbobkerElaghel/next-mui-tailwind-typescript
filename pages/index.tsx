import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NEXT APP</title>
        <meta name="title" content="NEXT APP" />
        <meta name="description" content="NEXT APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Button>Hello</Button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

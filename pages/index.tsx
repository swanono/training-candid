import Head from "next/head";
import { FC } from "react";


import Navbar from "components/navbar/Navbar";
import HomeTiles from "pages/index/homesTiles2/HomeTiles";
import Reviews from "pages/index/reviews/Reviews";



const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HomeTiles />
        <Reviews/>
      </main>
    </div>
  );
};



export default Home;

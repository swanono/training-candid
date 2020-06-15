import Head from "next/head";
import { FC } from "react";


import Navbar from "components/navbar/Navbar";
import HomeTiles from "pages/index/homesTiles2/HomeTiles";
import Reviews from "pages/index/reviews/Reviews";
import OrderYourKit from "pages/index/orderYourKit/OrderYourKit"
import HowItWorks from "pages/index/howItWorks/HowItWorks"
import VideoTile from "pages/index/videoTile/VideoTile"


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
        <OrderYourKit/>
        <HowItWorks />
        <VideoTile />
      </main>
    </div>
  );
};



export default Home;

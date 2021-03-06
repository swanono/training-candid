import Head from "next/head";
import { FC } from "react";


import Navbar from "components/navbar/Navbar";
import HomeTiles from "pages/index/homesTiles2/HomeTiles";
import Reviews from "pages/index/reviews/Reviews";
import OrderYourKit from "pages/index/orderYourKit/OrderYourKit"
import HowItWorks from "pages/index/howItWorks/HowItWorks"
import VideoTile from "pages/index/videoTile/VideoTile"
import WhyOrthodontist from "pages/index/whyOrthodontist/WhyOrthodontist"
import GetStartedAtHome from "pages/index/getStartedAtHome/GetStartedAtHome"

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <main>
        <HomeTiles />
        <Reviews/>
        <OrderYourKit/>
        <HowItWorks />
        <VideoTile />
        <WhyOrthodontist />
        <GetStartedAtHome />
      </main>
    </div>
  );
};



export default Home;

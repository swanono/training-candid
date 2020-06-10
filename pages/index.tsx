import { CitiesQuery, City } from "interfaces/City.interface";
import { GET_CITIES } from "queries/cities.query";
import { client } from "lib/apollo";
import { FC } from "react";
import Layout from "components/layout/Layout";

import Navbar from "components/navbar/Navbar"
import HomeTiles from "pages/index/homesTiles/HomeTiles"

interface Props {
  cities: City[];
}

const Home: FC<Props> = ({ cities }) => {
  return (
    <Layout>
      <Navbar />
      <main>
        <HomeTiles />
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query<CitiesQuery>({
    query: GET_CITIES,
  });

  return {
    props: { cities: data.cities.nodes },
  };
};

export default Home;

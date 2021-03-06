import { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import CoinList from "../components/coinList";
import styles from "./coin/coin.module.css";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("");

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo}></div>
      <SearchBar type="text" placeholder="search" onChange={handleChange} />
      <CoinList filteredCoins={allCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

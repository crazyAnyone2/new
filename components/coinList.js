import Coins from "./coins";

export default function CoinList({ filteredCoins }) {
  return (
    <>
      {filteredCoins.map((each) => {
        return (
          <Coins
            key={each.id}
            name={each.name}
            id={each.id}
            price={each.current_price}
            symbol={each.symbol}
            marketCap={each.market_cap}
            volume={each.total_volume}
            image={each.image}
            priceChange={each.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}

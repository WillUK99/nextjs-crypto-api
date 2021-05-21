import styles from "./CoinsList.module.scss"
import Coin from "../Coin"

const CoinsList = ({filteredCoins}) => {
    return (
        <div className={styles.coin_list}>
            {filteredCoins.map(coin => (
                <Coin
                id={coin.id}
                key={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                image={coin.image}
                currPrice={coin.current_price}
                mrktCap={coin.market_cap}
                high24h={coin.high_24h}
                low24h={coin.low_24h}
                priceChangePercentage24h={coin.price_change_percentage_24h}
                />
            ))}
        </div>
    )
}

export default CoinsList;
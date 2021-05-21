import Layout from "../../components/Layout"
import styles from "./CoinPage.module.scss"

// destructures coin data and passes as props to use
const CoinPage = ({ coin }) => {
    console.log()
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_container}>
                    <img src={coin.image.large} alt={`${coin.name} symbol`} />
                    <h1>{coin.name}</h1>
                    <p className={styles.symbol}>{coin.symbol}</p>
                    <p>Current Price: £{coin.market_data.current_price.gbp.toLocaleString()}</p>
                    {coin.market_data.price_change_percentage_1h_in_currency > 0 ?
                        <p>Daily price change: <span className={styles.green}>£{coin.market_data.price_change_percentage_1h_in_currency.gbp}</span></p>
                        :
                        <p>Daily price change: <span className={styles.red}>£{coin.market_data.price_change_percentage_1h_in_currency.gbp}</span></p>
                    }
                    <p>Total Volume: {coin.market_data.total_volume.gbp.toLocaleString()}</p>

                    <div className={styles.coin_highlow}>
                        <div className={styles.high}>
                            <h2>24h High</h2>
                            <p>£ {coin.market_data.high_24h.gbp.toLocaleString()}</p>
                        </div>
                        <div className={styles.low}>
                            <h2>24h Low</h2>
                            <p>£ {coin.market_data.low_24h.gbp.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CoinPage;

//getting serverside data to pass to pages
export async function getServerSideProps(context) {


    //id destructured from url string, made in /coins.index 
    //id changes as it uses dynamic routing
    const { id } = context.query


    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return {
        props: {
            coin: data
        }
    }
}
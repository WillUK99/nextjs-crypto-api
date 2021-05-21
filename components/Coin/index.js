import styles from "./Coin.module.scss"

import Image from 'next/image'
import Link from "next/link"

import {
    RiArrowDropUpFill,
    RiArrowDropDownFill,
} from 'react-icons/ri'

const Coin = ({name, symbol, image, currPrice, mrktCap, priceChangePercentage24h, id}) => {
    return (
        // Link for routing coins to their pages.

        // href for the URL to navigate to
        // as  allows for the dynamic routes in the site, changing depending on the id passed through below

        <Link  href="/coin/[id]" as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_main}>
                        <div>
                            <img src={image} alt={symbol} width={50}/>
                        </div>
                        <h1>{name}</h1>
                    </div>
                    <div className={styles.coin_info}>
                        <p className={styles.symbol}><sup>({symbol})</sup></p>
                        <p>{`£${currPrice.toLocaleString()}`}</p>
                        <p>{`£${mrktCap.toLocaleString()}`}</p>
                        {priceChangePercentage24h < 0 ?
                            <p className={`${styles.percent} ${styles.red}`}>{priceChangePercentage24h.toFixed(2)}%<RiArrowDropDownFill /></p>
                            :
                            <p className={`${styles.percent} ${styles.green}`}>{priceChangePercentage24h.toFixed(2)}%<RiArrowDropUpFill /></p>
                        }
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Coin;
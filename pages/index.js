import {useState} from "react"

import Layout from "../components/Layout"
import SearchBar from "../components/SearchBar"
import CoinList from "../components/CoinsList"


export default function Home({coinData}) {
  const [search, setSearch] = useState("")

  const filteredCoins = coinData.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar placeholder="Spaceship has landed..." type="text" onChange={handleChange}/>
        <CoinList filteredCoins={filteredCoins}/>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  const coinData = await res.json()

    return {
      props: { coinData }
    }
}

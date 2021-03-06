import styles from "./SearchBar.module.scss"

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar;
import React from 'react';
import Styles from "./SearchBar.module.css"
import SearchIcon  from "../../assets/Search_Icon.png";

const SearchBar = (placeholder, data) => {
  return (
    <form className={Styles.wrapper}>
      <input className={Styles.search} type="text" value="Search" placeholder={placeholder} />
      <button className={Styles.searchButton} type='submit'><img src={SearchIcon } alt="Search Icon" /></button>
    </form>
  )
};

export default SearchBar;
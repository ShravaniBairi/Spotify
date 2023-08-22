import React from 'react';
import Styles from "./SearchBar.module.css"
import SearchIcon from "../../assets/Search_Icon.png";

const SearchBar = () => {
  return (
    <div className={Styles.Box}>
      <input className={Styles.inputBox} type="text" value="Search" placeholder="type your favorite album name" />
      <button className={Styles.button}><img src={SearchIcon} alt="search Logo" /></button>
    </div>
  )
};

export default SearchBar;
import React from 'react';
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackButton from "../FeedBackButton/FeedBackButton";
import Styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <div className={Styles.wrapper}>
        <Logo />
        <SearchBar />
        <FeedBackButton />
    </div>
  )
}

export default Navbar;
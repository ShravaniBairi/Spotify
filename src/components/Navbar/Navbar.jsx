import React from 'react';
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <div className={Styles.wrapper}>
        <Logo />
        <SearchBar />
        <Button children="Give Feedback"/>
    </div>
  )
}

export default Navbar;
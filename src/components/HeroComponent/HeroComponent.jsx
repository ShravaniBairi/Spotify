import React from 'react'
import HeroImage from "../../assets/vibrating-headphone.png"
import Styles from "./HeroComponent.module.css"

const HeroComponent = () => {
  return (
    <div className={Styles.wrapper}>
        <div className={Styles.HeroContent}>
            <h1>
                100 Thousand Songs, ad-free
            </h1>
            <h1>
                Over thousands podcast episodes
            </h1>
        </div>
        <img className={Styles.HeroImg} src= {HeroImage } alt="HeroImage" />
        



    </div>
  )
}

export default HeroComponent
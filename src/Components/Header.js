"use client";
import React from 'react'
import styles from "../Styles/Header.module.css";

const  Header = () => {

   
    


    return (
        
    <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <a href="https://www.youtube.com">Homex</a>
        </div>
        <div className={styles.nav_container}>
            <div>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg> 
            </div>
            
        </div>
    </div>
    )
 }

export default Header;

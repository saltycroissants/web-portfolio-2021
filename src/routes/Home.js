import React from 'react'
import styles from './css/Home.module.css'

const Home = () => {
    return (
        <>
        <div className = {styles.container}>
            <div>logo</div>
            <div className = {styles.text}>Welcome!</div>
            <div className = {styles.text}>This is my work</div>
            <footer>copyright &copy; {new Date().getFullYear()} Eunji Lee. All rights reserved </footer>
        </div>
        
        </>
    )
}
export default Home;
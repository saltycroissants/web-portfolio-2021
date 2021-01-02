import React from 'react'
import styles from './css/Home.module.css'
import BorderSubtractive from '../components/GridBorder'

const Home = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.gridContainer}>
                    <BorderSubtractive />
            </div>
            <div className = {styles.innerContainer}>
                <div className= {styles.logoBox}>
                    <div className = {styles.logoText}>Portfolio of</div>
                    <div className = {styles.logoText}>Eunji Lee</div>
                </div>

                <div className = {styles.githubButton}>
                    <div className = {styles.githubText}>github</div>
                </div>

                <div className = {styles.contactButton}>
                    <div className = {styles.underlineBox}></div>  
                    <div className = {styles.contactText}>contact me</div>
                 

                </div>

                <div className={styles.textBox}>
                    <div className = {styles.text}>DEVELOPER</div>
                    <div className = {styles.text}>BASED IN</div>
                    <div className = {styles.text}>SEOUL, KOREA</div>
                </div>
                
                {/*}
                <footer>copyright &copy; {new Date().getFullYear()} Eunji Lee. All rights reserved </footer>
    {*/}
            </div>
        </div>
    )
}
export default Home;
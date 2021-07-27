import React from 'react'
import styles from './css/Aboutme.module.css'
import BorderSubtractive from '../components/GridBorder'
import { Link } from 'react-router-dom';
import profilepic2 from '../assets/profilepic2.png'


const Aboutme = () => {
    return (
        <>
            <div className= {styles.container}>
                <div className = {styles.gridContainer}>
                        <BorderSubtractive backgroundColor ='#FFF' borderColor = '#FF9C13'/>
                </div>
                <div className = {styles.innerContainer}>
                    <Link to = "/" className= {styles.logoBox}>
                        <div className = {styles.logoText}>Portfolio of</div>
                        <div className = {styles.logoText}>Eunji Lee</div>
                    </Link>
                    <div className = {styles.title}>ABOUT ME</div>
                    <div className={styles.intro}>
                    Hello. My name is Eunji.<br></br>
                    I develop softwares, aim to change lives. 
                    </div>
                    <div>
                        <img className={styles.profile} src= {profilepic2} alt="profile"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme;
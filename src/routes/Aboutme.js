import React from 'react'
import styles from './css/Aboutme.module.css'
import BorderSubtractive from '../components/GridBorder'

const Aboutme = () => {
    return (
        <>
            <div className= {styles.container}>
                <div className = {styles.gridContainer}>
                        <BorderSubtractive backgroundColor ='#E7EFF5' borderColor = '#9FBFD6'/>
                </div>
                <div className = {styles.innerContainer}>
                    <div className= {styles.logoBox}>
                        <div className = {styles.logoText}>Portfolio of</div>
                        <div className = {styles.logoText}>Eunji Lee</div>
                    </div>
                    <div>about me</div>
                </div>
            </div>
        </>
    )
}

export default Aboutme;
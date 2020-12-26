import React from 'react'
import styles from './css/Loading.module.css'

const Loading = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.text}>Portfolio of Eunji Lee</div>
            <div className = {styles.textLoading}>loading...</div>
        </div>
    )
}

export default Loading;
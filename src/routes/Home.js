import React, {useState} from 'react'
import styles from './css/Home.module.css'
import BorderSubtractive from '../components/GridBorder'
import { Link } from 'react-router-dom';

const Home = () => {
    const [isHover, setHover] = useState(false);
    let context = "contact me";
    if(isHover === true){context = "now !"}

    return (
        <div className = {styles.container}>
            <div className = {styles.gridContainer}>
                    <BorderSubtractive backgroundColor = '#FFF' borderColor = '#FF9C13'/>
            </div>
            <div className = {styles.innerContainer}>
                <div className= {styles.logoBox}>
                    <div className = {styles.logoText}>Portfolio of</div>
                    <div className = {styles.logoText}>Eunji Lee</div>
                </div>

                <a href = "https://github.com/saltycroissants" className = {styles.githubButton}
                >
                    <div className = {styles.githubText}>github</div>
                </a>

                <div className = {styles.contactButton}>
                    <div className = {styles.underlineBox}></div>  
                    <Link to = "/emailform" className = {styles.contactText} 
                    onMouseEnter = {() => setHover(true)}
                    onMouseLeave = {() => setHover(false)}
                    >{context}</Link>
                </div>

                <div className={styles.textBox}>
                    <div className = {styles.text}>DEVELOPER</div>
                    <div className = {styles.text}>BASED IN</div>
                    <div className = {styles.text}>SEOUL, KOREA</div>
                </div>
                <div className ={styles.bottomTab}>
                    <Link to = "/aboutme" className = {styles.bottomTabText}>ABOUT ME</Link>
                    <Link to = "/projects" className = {styles.bottomTabText}>PROJECTS</Link>
                    <a href="https://eunji-lee.tistory.com/" className = {styles.bottomTabText}>BLOG</a>
                    <div className = {styles.bottomTabText}>YOUTUBE</div>
                </div>
                
                {/*}
                <footer>copyright &copy; {new Date().getFullYear()} Eunji Lee. All rights reserved </footer>
    {*/}
            </div>
        </div>
    )
}
export default Home;
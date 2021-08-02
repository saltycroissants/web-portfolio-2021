import styles from './css/Aboutme.module.css'
import BorderSubtractive from '../components/GridBorder'
import { Link } from 'react-router-dom';


const Project = () => {
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
                    <div className = {styles.title}>PROJECTS</div>
                    <div className="projectBox">Game client</div>
                    <div className="projectBox">Web</div>
                    <div className="projectBox">Mobile</div>
                </div>
            </div>
        </>
            
        
    )
}

export default Project;
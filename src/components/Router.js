import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom"
import Home from '../routes/Home';
import Aboutme from '../routes/Aboutme';
import Project from '../routes/Project'
import Form from '../components/Form'

const AppRouter = () => {
    
    return (
        <Router>
            <Route exact path = "/"> <Home/></Route>
            <Route path = "/aboutme" exact={true} component = {Aboutme}></Route>
            <Route path = "/projects" exact={true} component = {Project}></Route>
            <Route path = "/emailform" exact={true} component = {Form}></Route>
        </Router>
    )
}

export default AppRouter

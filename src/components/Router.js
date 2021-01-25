import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Aboutme from '../routes/Aboutme';
import Project from '../routes/Project'

const AppRouter = ({isLoggedIn}) => {
    
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (<Route exact path = "/"> <Home/> </Route>) 
                : (<Route exact path = "/"> <Auth/> </Route>)}
            </Switch>
            <Route path = "/aboutme" exact={true} component = {Aboutme}></Route>
            <Route path = "/projects" exact={true} component = {Project}></Route>
        </Router>
    )
}

export default AppRouter

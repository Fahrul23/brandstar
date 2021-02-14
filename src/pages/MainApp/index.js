import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home,Product}  from '../index';
import {Loading,Header,Sidebar,Footer} from './../../Components/'
import Login from './../Login/index';
function MainApp(props) {
    return (
            <div>
                <div id="main-wrapper">      
                        <Router>
                            <Loading />
                            <Header /> 
                            <Sidebar />  
                                <Switch>
                                    <Route path="/product">
                                        <Product />
                                    </Route>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route path="/login">
                                        <Login />
                                    </Route>                        
                                </Switch>
                        </Router>
        
                    <Footer />
                </div>
            </div>
    );
}

export default MainApp;
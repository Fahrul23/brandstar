import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home,Product}  from '../index';
import {Loading,Header,Sidebar,Footer} from './../../Components/'
function MainApp(props) {
    return (
            <div>
                <div id="main-wrapper">
                    <Loading />
                    <Header /> 
                    <Sidebar />            
                        <Router>
                            <Switch>
                                <Route path="/product">
                                    <Product />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>                        
                            </Switch>
                        </Router>
        
                    <Footer />
                </div>
            </div>
    );
}

export default MainApp;
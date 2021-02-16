import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home,Product,DetailProduct}  from '../index';
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
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route exact path="/product">
                                        <Product />
                                    </Route>
                                    <Route exact path="/detail/:id">
                                        <DetailProduct />
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
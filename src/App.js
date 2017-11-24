import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//Component
import  Homepage from "./components/pages/homePage";
import  Produtcts from "./components/pages/products";
import  SignIn from "./components/auth/SignIn";
import  SignUp from "./components/auth/SignUp";

//includes
import './Assets/css/default.min.css';
import './Assets/css/style.css';

//main code
class App extends Component {
    render() {
         return (
           <Router>
            <div className = "App">             
             <Route exact path="/" component={SignIn}  />
              <Route exact path="/Homepage" component={Homepage}  />
              <Route exact path="/Produtcts" component={Produtcts}  tesy="" />              
            </div>
            </Router>
          );
    }
}

export default App;



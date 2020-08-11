import React from "react";
import Home from './Home';
import { BrowserRouter  , Route  } from 'react-router-dom'   
import Header from './Header' ;
import Dashboard from "./Dashboard";

function MainWrap() {

    return  <BrowserRouter >
 
    <Route ></Route>

    <Header/>
    {/* <Home/> */}
    <Dashboard/>

    </BrowserRouter>
   

}

export default MainWrap;

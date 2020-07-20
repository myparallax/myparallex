import React  from "react";
import Header from './Header/Header'
import Services from "./Services";
// import { setLanguage} from "../state_manager/actions" 
// import {useSelector , useDispatch} from "react-redux";
// import {IntlProvider} from "react-intl";
// import {languages} from "../translations";
// import {HashRouter as Router } from "react-router-dom";


function MainWrap(){


    return (
        <div className="main-wrap">
<div>
            <img src={require('./../Assests/header-parallax1.png')} alt="" className="header-img" />
            <Header />
            <div className="header-content">
                <h2>پیام پارالاکس برای  کاربران خود</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                طراحان دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <button>شروع به کار</button>
            </div>
            </div>
            <div className="clear-both"></div>
            <Services />

            
            
        </div>
    )

}

export default MainWrap ;

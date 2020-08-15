import React from 'react';
import { Label, Input } from 'reactstrap'

function Profile() {
    return(
        <div className="dashboard-content"> 
            <div className="user-card">
                <div className="user-name">پیام نصیری</div>
                <div className="user-bio">عاشق جاوا اسکریپت هستم و پروژه های زیادی را باهاش انجام دادم
به طبیعت گردی و کوهنوردی هم علاقه زیادی دارم</div>
                <div className="user-profile-imsge">
                    <img src={require('@/Assests/dashboard/profile.jpg')} alt="your picture"/>
                </div>
            </div>
            <div className="title-profile">
                <h5>پروفایل کاربری</h5>
                <h3>مشخصات پروفایل</h3>
            </div>
            <div className="change-pictures">
                <div className="pic-item pictures">
                    <div className="pic-baner">
                        <img src={require('@/Assests/dashboard/Op component 1.jpg')} alt=""/>
                    </div>
                    <div className="pic-prof">
                    <img src={require('@/Assests/dashboard/prof.jpg')} alt=""/>
                    </div>
                </div>
                <div className="pic-item change-logo">
                    <label class="custom-file-upload">
                        <input type="file"/>
                        <img src={require("@/Assests/dashboard/color-member-icon.svg")} alt="" className="img-color"/>
                        <img src={require("@/Assests/dashboard/dark-member-icon.svg")} alt="" className="img-dark"/>
                        <p>
                        تغییر لوگو
                        <br/>
                        ابعاد کوچکتر از ۱۱۰*۱۱۰ پیکسل
                        </p>
                    </label>
                </div>
                <div className="pic-item change-baner">
                    <label class="custom-file-upload">
                        <input type="file"/>
                        <img src={require("@/Assests/dashboard/color-Photos-Icon.svg")} alt="" className="img-color"/>
                        <img src={require("@/Assests/dashboard/dark-Photos-Icon.svg")} alt="" className="img-dark"/>
                        <p>
                        تغییر بنر
                        <br/>
                        ابعاد کوچکتر از ۱۱۸۴*۳۰۰ پیکسل
                        </p>
                    </label>
                </div>
            </div>
            <div className="change-information">

            </div>
        </div>
           
    )
}
export default Profile;
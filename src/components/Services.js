import React from 'react';

function Services(){

    return (
        <div className="services">
            <h2>پارالاکس<br/>ضامن ارتقای دانش کشور</h2>
            <div className="services-cards">
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax1.svg')} alt=" " />
                    </div>
                    <h3>پروژه مهندسی</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax2.svg')} alt=" " />
                    </div>
                    <h3>طراح ui/ux</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax3.svg')} alt=" " />
                    </div>
                    <h3>برنامه نویس اپلیکیشن</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax4.svg')} alt=" " />
                    </div>
                    <h3>برنامه نویس وب</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax5.svg')} alt=" " />
                    </div>
                    <h3>طراحان گرافیک</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax6.svg')} alt=" " />
                    </div>
                    <h3>تولید محتوا</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax7.svg')} alt=" " />
                    </div>
                    <h3>ترجمه و متون</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax8.svg')} alt=" " />
                    </div>
                    <h3>تدوین و</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax9.svg')} alt=" " />
                    </div>
                    <h3>استارتاپ</h3>
                </div>
                <div className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax10.svg')} alt=" " />
                    </div>
                    <h3>اختراعات</h3>
                </div>
            </div>
        </div>
    )
    
}

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

function Services(){

    return (
        <div className="services">
            <div className="services-cards">
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax1.svg')} alt=" " />
                    </div>
                    <h3>پروژه مهندسی</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax2.svg')} alt=" " />
                    </div>
                    <h3>طراح ui/ux</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax3.svg')} alt=" " />
                    </div>
                    <h3>برنامه نویس اپلیکیشن</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax4.svg')} alt=" " />
                    </div>
                    <h3>برنامه نویس وب</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax5.svg')} alt=" " />
                    </div>
                    <h3>طراحان گرافیک</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax6.svg')} alt=" " />
                    </div>
                    <h3>تولید محتوا</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax7.svg')} alt=" " />
                    </div>
                    <h3>ترجمه و متون</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax8.svg')} alt=" " />
                    </div>
                    <h3>تدوین و صدا</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax9.svg')} alt=" " />
                    </div>
                    <h3>استارتاپ</h3>
                </Link>
                <Link className="services-card">
                    <div className="services-card-logo">
                        <img src={require('./../Assests/servicesCard/icon-parallax10.svg')} alt=" " />
                    </div>
                    <h3>اختراعات</h3>
                </Link>
            </div>
        </div>
    )
    
}

export default Services;
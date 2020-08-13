import React from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
    return(
        <div className="sidebar-container">
            <nav className="sidebar">
                <ul>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Members Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to="" className="sidebar-item-title">پروفایل کاربری</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Groups Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to="" className="sidebar-item-title">گروه ها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Marketplace Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to="" className="sidebar-item-title">مارکت شما</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Messages Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to=""  className="sidebar-item-title">صفحه چت شما</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Events Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to=""  className="sidebar-item-title">رخدادها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Forums Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to=""  className="sidebar-item-title">پیام ها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Overview Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to="" className="sidebar-item-title">وضعیت</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Notifications Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link to=""  className="sidebar-item-title">اعلان ها</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;
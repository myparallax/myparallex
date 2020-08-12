import React from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
    return(
        <div className="sidebar-container">
            <nav className="sidebar">
                <ul>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Members Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/profile">پروفایل کاربری</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Groups Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/groups">گروه ها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Marketplace Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/ownMarket">مارکت شما</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Messages Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/chat">صفحه چت شما</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Events Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/events">رخدادها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Forums Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/message">پیام ها</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Overview Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/situation">وضعیت</Link>
                    </li>
                    <li className="sidebar-item">
                        <img src={require('@/Assests/sidebar-icons/Notifications Icon.svg')} alt=" "className="sidebar-item-icon"/>
                        <Link className="sidebar-item-title" to="/dashboard/notification">اعلان ها</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;
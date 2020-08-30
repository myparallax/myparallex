import React from "react";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
// import dashboard items
import Profile from "./Dashboard_Item/Profile";
import Chat from "./Dashboard_Item/Chat";
import Events from "./Dashboard_Item/Events";
import Groups from "./Dashboard_Item/Groups";
import Message from "./Dashboard_Item/Message";
import Notification from "./Dashboard_Item/Notification";
import OwnMarket from "./Dashboard_Item/OwnMarket";
import Situation from "./Dashboard_Item/Situation";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Route path="/dashboard/profile" component={Profile} />
      <Route path="/dashboard/chat" component={Chat} />
      <Route path="/dashboard/events" component={Events} />
      <Route path="/dashboard/groups" component={Groups} />
      <Route path="/dashboard/message" component={Message} />
      <Route path="/dashboard/notification" component={Notification} />
      <Route path="/dashboard/ownMarket" component={OwnMarket} />
      <Route path="/dashboard/situation" component={Situation} />
    </div>
  );
}
export default Dashboard;

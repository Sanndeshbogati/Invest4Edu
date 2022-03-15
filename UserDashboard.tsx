import React, { Component } from 'react';
import HelpWidget from "./HelpWidget";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Copyright from "./Copyright"; 
import UserDashboardWelcome from "./UserDashboardWelcome";
import "./userdashboard.css"
import UserDashboardEdu from"./UserDashboardEdu"
import UserDashboardProtection from "./UserDashboardProtection"

 class UserDashboard extends Component {
  render() {
    return <div> 
       < UserDashboardWelcome></UserDashboardWelcome> 
       <UserDashboardEdu></UserDashboardEdu>
       <UserDashboardProtection></UserDashboardProtection>    
        <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>;
  }
}

export default UserDashboard;

import React, { Component } from 'react';
import HelpWidget from "./HelpWidget";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import Copyright from "./Copyright"; 
import StepFirstGoal from './StepFirstGoal'
import './stepforgoal.css'

class StepForGoal extends Component {
  render() {
    return <div>
        <StepFirstGoal></StepFirstGoal>
         <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>;
  }
}

export default StepForGoal;

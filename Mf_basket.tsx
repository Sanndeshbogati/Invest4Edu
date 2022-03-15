import React, { Component } from 'react';
import Mf_basket_Intro from './Mf_basket_Intro';
import Mf_basket_course from './Mf_basket_course'
import AppInfo from './AppInfo';
import Footer from './Footer';
import HelpWidget from './HelpWidget';
import Copyright from './Copyright';
import Compare_mf from './Compare_mf';
import "../component-css/mf_basket.css"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};
class Mf_basket extends Component {
  render() {
    return <div>
      <Mf_basket_Intro></Mf_basket_Intro>
      <Mf_basket_course></Mf_basket_course>
      <Compare_mf></Compare_mf>
      <HelpWidget></HelpWidget>
      <AppInfo></AppInfo>
      <h2 onClick={scrollToTop}>hello</h2>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>;

  }
}

export default Mf_basket
import React, { Fragment } from "react";
import { Navbar, Nav,NavDropdown    } from 'react-bootstrap'
import logo from '../images/logo_3.png';
import {
    Link
} from "react-router-dom";
import Login from "./LoginLogout/Login";
import Signup from "./LoginLogout/Signup";
import LoginSignup from "./LoginLogout/LoginSignup";
import Otp from "./LoginLogout/Otp";

class PageHeader extends React.Component<any,any> {
  constructor(props : any) {
    super(props);
    this.state={
        showModalPopup:false,
        showModalPopup1:false,
    }
  }
  isShowPopup = (status: any)=>{
      this.setState({showModalPopup:status})
  }
  isShowPopup1 = (status: any)=>{
      this.setState({showModalPopup1:status})
  }
render() {
    return (
            <div>
            <Fragment>
                <Navbar bg="light" variant={"light"} expand="lg">
                    <Navbar.Brand href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                           className="justify-content-end" style={{ width: "100%" }}
                            navbarScroll
                        >
                             <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Why Invest4Edu</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Who we are</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">How Invest4Edu Works</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Education Opportunities" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Study in India</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Study in Canada</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Study in UK</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Study in Australia</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Study in US</NavDropdown.Item>
                            </NavDropdown>

          
                            <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
                            {/* <Nav.Link as={Link} to="/Login">Login</Nav.Link> */}
                    
                            <button className="signinpopup" onClick={() => this.isShowPopup(true)} style={{ border:"none", backgroundColor:"rgba(var(--bs-light-rgb),var(--bs-bg-opacity))"}}>Login
                            </button>
                             <Login showModalPopup={this.state.showModalPopup}  
                              onPopupClose={this.isShowPopup}  ></Login>
                             
                                 {/* <Otp showModalPopup={this.state.showModalPopup}  
                                   onPopupClose={this.isShowPopup}></Otp> */}



                           <button className="signinpopup" onClick={()=>this.isShowPopup1(true)} style={{border:"none", backgroundColor:"rgba(var(--bs-light-rgb),var(--bs-bg-opacity))", float:"left"}}>
                            Signup </button>
                           <Signup showModalPopup={this.state.showModalPopup1} onPopupClose={this.isShowPopup1}/>
                             
                            {/* <Nav.Link as={Link} to="/Signup">Sign Up</Nav.Link>  */}
                              
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Fragment>
            </div>
    )
}   
}
  
export default PageHeader;

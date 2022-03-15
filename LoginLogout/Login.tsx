import { icon } from '@fortawesome/fontawesome-svg-core';
import React, { Component, Fragment } from 'react';
import {Container, Form, Modal} from "react-bootstrap"
import usericone  from "../../images/user-icon.png"
import "./Login.css"
import {BiMouse} from "react-icons/bi"
import {Link} from 'react-router-dom';
import Otp from './Otp';
import Signup from './Signup';


 class Login extends Component< any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModalPopup:false,
            showModalPopup1:false,
        };
      }

      
    isShowModal = (status:any) => {  
        this.handleClose();  
        this.setState({ showModal:status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  
  
    isShowPopup = (status:any) => {  
        this.setState({ showModalPopup:status });  
      };    
      isShowPopup1 = (status:any) => {  
        this.setState({ showModalPopup1: status });  
      }; 
  render() {
    return <div>
     <Fragment>
     <Modal className="user-edit-popup" show={this.props.showModalPopup} onHide={this.handleClose}>
         
        <div className='login-header' role={"document"}>
            <Container className='content-header'>
            <div className='model-header-login-up'>
            <button type='button' className='close-sign-up' 
                    aria-label="Close" onClick={() => this.isShowModal(true)} >×
                {/* <span onClick={() => this.isShowModal(true)}  className='sign-up-span'>×</span> */}
                    </button>
                </div>
            <div className='login-sign-up-body'>
                     <div className='login-sign-up-user-icone'>
                     <img className=" login-sign-up-image-login" src={usericone}/>
                     </div>
                   
                    <Form action='user-dashboard' className='form-for-signup-rem'>
                        <h5  className='model-login-h5'>
						You can login with mobile number here :</h5>
                        <input className='form-conntrol-login' type="number" placeholder='+91 **** **** **' required/>
                      
                      <div className='form-row-login'>
                           <button type="button" className="btn btn-main-sm login-button-main" onClick={() => this.isShowPopup(true)} > <BiMouse className='login-mouse' onClick={() => this.isShowPopup(true)}/>Log in </button>
                           <Otp showModalPopup={this.state.showModalPopup}  onPopupClose={this.isShowPopup} ></Otp>
                        </div>
                                 
                        <div className='login-sigin-otp' style={{color:"black"}}>
                        Unable to Login? 
                        <button type="button"style={{color: "#2e7eed" , textDecoration:"none", border:"none", backgroundColor:"rgba(var(--bs-light-rgb),var(--bs-bg-opacity))"}}data-toggle="modal" data-target="#signup-form"  onClick={() => this.isShowPopup1(true)}> &nbsp;SIGN UP</button>
                        <Signup showModalPopup={this.state.showModalPopup1} onPopupClose={this.isShowPopup1}></Signup>
                         </div>
                    </Form>
                 </div>
         </Container>
        </div>
        </Modal>
        </Fragment>
    </div>
  }
}

export default Login;

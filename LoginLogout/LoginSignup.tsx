import React, { Component } from 'react'
import {Container, Row,Col, Form} from "react-bootstrap"
import usericone  from "../../images/user-icon.png"
import {BiMouse} from "react-icons/bi"
import google from  "../../../src/images/social-media/google-2.png"

 class LoginSignup extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state={
          animate:true,
    
        };
            this.handleClick = this.handleClick.bind(this);
    
      }
      handleClick(a:any) {
          // modify the state, this will automatically recall render() below.
          this.setState((prevState:any) => {
              return { animate: !prevState.animate }
            });
            console.log(this.state.animate);
        }
     
  render() {
      console.log(this.state.animate)
    const animationClasses = (this.state.animate ? true : false);
    return (
      <div>
     <div className='LoginSignup-main'>
         <Container className='cont1 content-header'>
             <div className="LoginSignup-modal-header">
             <button type='button' className='close-login'>
                        <span className='login-span'>×</span>
                    </button>
                    <ul className='user-login-icone'>
                        <li className={'user-login-li'+ (this.state.animate? ' login_active' : "") } onClick={() => {this.setState({animate:true})}} >
                            <a className='user-login-tab-link'>Log in</a>
                        </li>
                        <li className={'user-signup-tab-li '+(this.state.animate? '  ' : "login_active1")  }onClick={() => {this.setState({animate:false})}} >
                            <a className='signup-clss-up'>Sign Up</a>
                        </li>
                    </ul>
             </div>
             {this.state.animate?<><div className='login-sign-up-tab-conatin'>
                 <div className='login-sign-up-body'>
                     <div className='login-sign-up-user-icone'>
                     <img className=" login-sign-up-image-login" src={usericone}/>
                     </div>
                     <Form action='user-data' >
                        <input  className='form-conntrol-login' type="text"  placeholder='Username'required/>
                        <input className='form-conntrol-login' type="password" placeholder='Password' required />
                        <div className='form-row-login'>
                            <button className='btn btn-main-sm login-button-main'>
                            <BiMouse className='login-mouse'/>Log in</button>
                        </div>
                        <div className='log-in-forget-poss'>
                            Forgot password ?
                            <a href="#" style={{textDecoration:"none"}}> Reset here</a>
						 </div>
                    </Form>
                    <Form action='user-dashboard'>
                        <h5  className='model-login-h5'>
						You can login with mobile number here :</h5>
                        <input className='form-conntrol-login' type="text" placeholder='+91 xxxx xxxx xx' required/>
                        <input  className='form-conntrol-login' type="password" placeholder='Secure OTP'/>
                        <div className='form-row-login'>
                            <button className='btn btn-main-sm login-button-main'>
                            <BiMouse className='login-mouse'/>Log in</button>

                        </div>
                        <div className='login-sigin-otp'>
                            Didn't get the OTP ? 
                            <a href="#" style={{textDecoration:"none"}}>Resend in 20s</a>
                        </div>
                    </Form>
                 </div>
   {/* ***********************************start signup part *********************************** */}
             </div></>:<><div>
              <div className='login-sign-up-user-icone'>
                     <img className=" login-sign-up-image-login" src={google}/>
                </div>
                <form action="user-dashboarf-sign-up">
          <h5 className='model-sign-up-h5 sign-up-h5-or'> <i>or</i> </h5>
          <div className='form-row-sign-up'>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up' type="text" placeholder='First name' required />
              </Col>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up' type="text" placeholder=' Last name' required />
              </Col>
          </div>
          <div className='form-row-sign-up'>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up' type="text" placeholder='Email' required />
              </Col>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up' type="text" placeholder=' Mobile number' required />
              </Col>
          </div>
          <div className='form-row-sign-up'>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up signup-poss' type="password" placeholder='Password' required />
              </Col>
              
          </div>
          <div className='form-row-sign-up'>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up-input' type="checkbox" id='gridCheck' />
                  <label className='form-check-label' > By creating an account, you agree to our a  <a style={{color:"#ed2e2e"}}>Terms & conditions </a> 
                  </label>
              </Col>
              
          </div>
          <div className='form-row-login'>
                            <button className='btn btn-main-sm login-button-main'>
                            <BiMouse className='login-mouse'/>SIGNUP</button>

                        </div>
      </form>


            </div></>}
             
             
              {/* end signin part */}
              {/* start signup part */}
            
              {/* top row end */}
             
         </Container>
          </div>

        
      </div>
    )
  }
}

export default LoginSignup
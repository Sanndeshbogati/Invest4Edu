import React, { Component, Fragment } from 'react';
import { Container, Col, Modal } from 'react-bootstrap';
import usericone  from "../../images/user-icon.png"
import {BiMouse} from "react-icons/bi"

 class Signup extends Component<any,any>{
     constructor(props:any){
         super(props);
         this.state={
            showModalPopup: false  
         };
     }
     isShowModal =(status: any) => {
         this.setState({showModal:status});
         this.handelClose();
     }
     handelClose=()=>{
         this.props.onPopupClose(false);
     }
    
  render() {
    return <div>
        <Fragment>
        <Modal show={this.props.showModalPopup} onHide={this.handelClose} className="user-edit-popup">
                <div className='signup--header' role={"document"}>
            <Container className='content-header-UP'>
                <div className='model-header-sign-up'>
                    <h5 className='model-sign-up-h5'>Sign-up to discover more</h5>
                   <button type='button' className='close-sign-ori-up' onClick={() => this.isShowModal(false)}
                    aria-label="Close" >
                        <span className='sign-up-span'>×</span>
                    </button>
                </div>
    <div className='model-body-sign-in'>
       <form action="user-dashboarf-sign-up " className='form-for-signup-rem'>
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
                  <input className='form-control-sign-up' type="text" placeholder=' Mobile number' required />
              </Col>
          </div>
      <div className='form-row-sign-up'>
              <Col className='col-sign-up'>
                  <input className='form-control-sign-up-input' type="checkbox" id='gridCheck' />
                  <label className='form-check-label-signup' > By creating an account, you agree to our a  <a style={{color:"#ed2e2e"}}>Terms & conditions </a> 
                  </label>
              </Col>
              
          </div>
          <div className='form-row-login'>
                            <button className='btn btn-main-sm login-button-main'>
                            <BiMouse className='login-mouse'/>SIGN UP</button>

                        </div>
      </form>


    </div>



                </Container>
                </div>
                </Modal>
                </Fragment>

    </div>;
  }
}

export default Signup;

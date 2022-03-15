import React, { Component, Fragment } from 'react'
import {Container,Row, Form, Modal} from "react-bootstrap"
import {BiMouse} from "react-icons/bi"
import usericone  from "../../images/user-icon.png"


 class Otp extends Component<any,any> {
  constructor(props:any) {  
    super(props);  
    this.state = {  
        showModal: false  
    };  
}  

isShowModal = (status:any) => {  
    this.handleClose();  
    this.setState({ showModal: status });  
}  

handleClose = () => {  
    this.props.onPopupClose(false);  
}  
  render() {
    return (
      
      <div>
        <Fragment>
        <Modal show={this.props.showModalPopup} onHide={this.handleClose} >
           <div className='login-header' role={"document"}>
            <Container className='content-header'>
            <div className='model-header-otp-up'>
            <button type='button' className='close-sign-up' onClick={() => this.isShowModal(true)}>
                        <span className='sign-up-span' >×</span>
                    </button>
                </div>
            <div className='login-sign-up-body'>
                     <div className='login-sign-up-user-icone'>
                     <img className=" login-sign-up-image-login" src={usericone}/>
                     </div>
                   
                    <Form action='user-dashboard'>
                        <h5  className='model-otp-h5'>
					                 	Verification:</h5>
                        <h6 className='model-otp-h6'>Please Enter the otp sent to</h6>
                        <input className='form-conntrol-login' type="text" placeholder='Enter 6 digit Otp' required/>
                      
                        <div className='form-row-login'>
                            <button className='btn btn-main-sm login-button-main'>
                            <BiMouse className='login-mouse'/>SUBMIT</button>

                        </div>
                        <div className='login-sigin-otp' style={{color:"black"}}>
                        Didn't get OTP
                        <a href="" style={{color: "#2e7eed" , textDecoration:"none" }}data-toggle="modal" data-target="#signup-form"> &nbsp;  Resend Otp</a>
                         
                        </div>
                    </Form>
                 </div>

              
       

            </Container>

        </div>
        </Modal>
        </Fragment>
      </div>
    )
  }
}

export default Otp
import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaPlusSquare} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {FaRupeeSign} from "react-icons/fa";
import UserDashboardAddEdit from './UserDashboardAddEdit';

class UserDashboardProtection extends Component<any, any> {
  constructor(props:any) {  
    super(props);  
    this.state = {  
      showModalPopup: false  
    }  
  }  
  isShowPopup = (status:any) => {  
    this.setState({ showModalPopup: status });  
  };  
  render() {
    return <div> 
        <Fragment>
       <div className='user-edu-main'>
            <Container className=" userdashboard-edusub-main cont1">
                <Row className='user-dsahboard-protection'>
                    <Col className='col-lg-6 col-md-6 col-12 protection-user'>
                        <ul className='user-edu-watch-list' onClick={() => this.isShowPopup(true)}>
                              <FaPlusSquare className='fun-fact-svg-icons'/>
                              
                        </ul>
                        
                      <div className='user-protection-app-feature'>
                          <h3 className='user-edu-h3'>Protection</h3>
                          <p className='user-edu-p'>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.</p>
                          <br />
                          
                      </div>
                    </Col>
                      {/* first part end */}
                      <Col className='col-lg-6 col-md-6 col-12 protection-user'>
                        <ul className='user-edu-watch-list' onClick={() => this.isShowPopup(true)}>  
              
                              < FaPlusSquare className='fun-fact-svg-icons'/>
                        </ul>
                        <UserDashboardAddEdit showModalPopup={this.state.showModalPopup}  
          onPopupClose={this.isShowPopup}   ></UserDashboardAddEdit>
                      <div className='user-protection-app-feature'>
                          <h3 className='user-edu-h3'>Education Loan</h3>
                          <p className='user-edu-p'>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.</p>
                          <br />
                          
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </Fragment>
</div>;
  }
}

export default UserDashboardProtection;

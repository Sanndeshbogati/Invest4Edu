import React, { Component,Fragment } from 'react';
import { Container, Col, Row, Modal } from 'react-bootstrap';
import { FaPlusSquare} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {FaRupeeSign} from "react-icons/fa";
import { Link } from 'react-router-dom';
import UserDashboardAddEdit from './UserDashboardAddEdit'

 class UserDashboardEdu extends Component<any,any> {
    constructor(props: any){
        super(props);
        this.state={
          showModalPopup: false,

        };
    }
    isShowPopup = (status:any) => {  
        this.setState({ showModalPopup: status });  
      };
  render() {
        console.log(this.state.showModal);
      return(
       <div> 
         <Fragment> 
        
        <div className='user-edu-main'>
            <Container className=" userdashboard-edusub-main cont1">
                <Row className='user-dsahboard-edu'>
                    <Col className='col-lg-6 col-md-6 col-12 edu-user'>
                        <ul className='user-edu-watch-list'>
                             
                              <div className="className='fun-fact-svg-icons" ><FaPlusSquare onClick={() => this.isShowPopup(true)}/>
                              <div className='popup-edit-add'>
                             <UserDashboardAddEdit showModalPopup={this.state.showModalPopup} onPopupClose={this.isShowPopup} />
                              
                              </div>
                              </div>
                        </ul>
                        
                      <div className='user-edu-app-feature'>
                          <h3 className='user-edu-h3'>Education Goal </h3>
                          <p className='user-edu-p'>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.</p>
                          <br />
                          <table className='user-edu-table'>
                              <tbody>
                                  <tr>
                                      <td>
                                          <a href="#"  className='edu-a'>Taksh</a>
                                      </td>
                                      <td>2.0 Lac</td>
                                      <td>Canada</td>
                                      <td>2021</td>
                                      <td>
                                           {/* <a href="#" className='rounded-circle-edu'>
                                            <FaEdit className='user-edu-icone'/>
                                            
                                           </a> */}
                                         <Link className="className='fun-fact-svg-icons" to="/UserDashboardAddEdit" ><FaEdit/> </Link>
                                      </td>
                                      <td>
                                           <a href="#" className='rounded-circle-edu'>
                                            <FaRupeeSign className='user-edu-icone'/>
                                           </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <a href="#" className='edu-a'>Inaya</a>
                                      </td>
                                      <td>3.0 Lac</td>
                                      <td>India</td>
                                      <td>2025</td>
                                      <td>
                                           {/* <a href="#" className='rounded-circle-edu'>
                                            <FaEdit className='user-edu-icone'/>
                                           </a> */}
                                            <Link className="className='fun-fact-svg-icons" to="/UserDashboardAddEdit" ><FaEdit/> </Link>
                                      </td>
                                      <td>
                                           <a href="#" className='rounded-circle-edu'>
                                            <FaRupeeSign className='user-edu-icone'/>
                                           </a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                    </Col>
                      {/* first part end */}
                      <Col className='col-lg-6 col-md- col-12 edu-user-sec'>
                        <ul className='user-edu-watch-list'>
                              {/* <FaPlusSquare className='fun-fact-svg-icons'/> */}
                              <Link className="className='fun-fact-svg-icons" to="/UserDashboardAddEdit" ><FaPlusSquare /> </Link>
                        </ul>
                      <div className='user-edu-app-feature'>
                          <h3 className='user-edu-h3'>Investment Products </h3>
                          <p className='user-edu-p'>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.</p>
                          <br />
                         
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </Fragment> 
         </div>
      )}
}

export default UserDashboardEdu;

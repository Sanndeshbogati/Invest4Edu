import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import udbcanada from "../images/udbcanada.png"

export class UserDashboardWelcome extends Component {
  render() {
    return <div>
        <div className='userboard-welcome-main'>
            <Container className=' userdashboard-sub-main cont1'>
              <Row className='user-dsahboard-welcome'>
                <Col className='col-lg-6 col-md-6 user-order-0'>
                  <div className='fade-down aos-init aos-animate' data-aos="fade-down">
                  <img className="dashboard-img-fluid" src={ udbcanada}/>
                  </div>
                  </Col>
                {/* col-lg-6-end */}
              <Col className='col-lg-6 col-md-6 user-order-1 call'>
                  <div className='dashboard-section-title'>
                    <h2 className='welcome-dashboard-h2'>
                    Welcome Dhawal
                    </h2>
                    <p className='welcome-dashboard-p'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    </p>
                  </div>
              </Col>
                

                {/* main-row */}
              </Row>
            </Container>
        </div>
    </div>;
  }
}

export default UserDashboardWelcome;

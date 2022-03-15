import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {BsFillCalendarCheckFill } from "react-icons/bs"
import {FaPiggyBank} from "react-icons/fa"
import { FaFileInvoiceDollar} from "react-icons/fa"
import {
    Link
} from "react-router-dom";

 class StepFirstGoal extends Component {
  render() {
    return <div>

      <div className='step-first-main'>
          <Container className="cont1">
              <Row className='step-first-goal'>
                   <Col className='col-md-12 step-1st-goal '>
                       <h2 className='step-first-main-h2'>
                       Just 3 Steps to reach your Goal
                       </h2>
                     <h3 className='step-first-main-goal-h3'>
                     The first step is half the journey - Mr. Bonds
                     </h3>
                     <div id='3-boxs' className='d-flux-first-goal first-goal-step '>
                         <Col className='col-md-3 col-lg-3 col-12  step-first-goal-boxs'>
                         <BsFillCalendarCheckFill className='first-goal-icone'/>
                         <br />
                         <h3 className='step-first-main-h3'>Step-1 </h3>
                         <p className='step-first-main-p'>Set Education Goal</p>
                         </Col>
                         <Col className='col-md-3 col-lg-3 col-12   step-first-goal-boxs stp-boxs'>
                         <FaPiggyBank className='first-goal-icone'/>
                         <br />
                         <h3 className='step-first-main-h3'>Step-2 </h3>
                         <p  className='step-first-main-p'>Start Investment Account 
                             <br />
                             FREE
                         </p>
                         </Col>
                         <Col className='col-md-3 col-lg-3 col-12  step-first-goal-boxs '>
                         <FaFileInvoiceDollar className='first-goal-icone'/>
                         <br />
                         <h3 className='step-first-main-h3'>Step-3 </h3>
                         <p  className='step-first-main-p'>Select best suited Investment Basket 
                             <br />
                             ( Customized basis goal )
                         </p>
                         </Col>
                        

                     </div>
                    
                     <Link type="button" className="step-fs-goal-button  btn" to="/StepForVerifyPAN" >CONTINUE </Link>
                   </Col>

                 {/* top row end  */}
              </Row>
          </Container>
      </div>
    </div>;
  }
}

export default StepFirstGoal;

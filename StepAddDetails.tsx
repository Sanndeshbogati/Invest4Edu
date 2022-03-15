import React, { Component } from 'react';
import { Container, Col, Row,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 class StepAddDetails extends Component {
  render() {
    return <div>
       <div className='stepadd-main'>
           <Container className="cont1">
               <Row className='stepa-add-details'>
            <Col className='step-add-personal-details'>
                <h2 className='step-add-dtls-h2'>Add Personal Details</h2>
                 <h3 className='step-add-dtls-h3'>Enter your personal details for a better experience</h3>
                 <br />
                 <br />
                  <div className='step-add-form-group'>
                      <input type="text" className='form-control textfield' id="user_fullname" placeholder= "Father's name" />
                     
                 </div>
                 <div className='step-add-form-group'>
                      <input type="text" className='form-control textfield' id="user_fullname" placeholder= "Mother's name"   />
                     
                 </div>
                 <div className='step-add-form-group'>
                      <input type="text" className='form-control textfield' id="user_fullname" placeholder= "City of birth"  />
                     
                 </div>
                 <div className='form-group'>
                     <fieldset className='p-2 mr-auto'>
                         <legend className='mumlebel'>Gender</legend>
                         <Row className='step-gender'>
                             <Col className='col-md-3 col-12 col-lg-3 personal-dtls-step'>
                                 <div className='form-check'>
                                     <input className='form-check-input' type="radio" name="flexRadioDefault"  id=" flexRadioDefault1"/>
                                     <label className='form-check-label'>Male</label>
                                 </div>
                             </Col>
                             <Col className='col-md-3 col-12 col-lg-3 personal-dtls-step'>
                             <div className='form-check'>
                                     <input className='form-check-input' type="radio" name="flexRadioDefault"  id=" flexRadioDefault1"/>
                                     <label className='form-check-label'>Female</label>
                                 </div>
                             </Col>
                             <Col className='col-md-3 col-12 col-lg-3 personal-dtls-step'>
                             <div className='form-check'>
                                     <input className='form-check-input' type="radio" name="flexRadioDefault"  id=" flexRadioDefault1"/>
                                     <label className='form-check-label'>Other</label>
                                 </div>
                             </Col>
                         </Row>
                     </fieldset>
                 </div>
                
     <div className='form-group'>
         <fieldset  className='p2 mr-auto'>
         <legend className='mumlebel'>Marital Status</legend>
         <Row className='step-marital'>
             <Col className='col-md-3 col-12 col-lg-3 personal-dtls-step'>
                  <div className='form-check'>
                  <input className='form-check-input' type="radio" name="flexRadioDefault1"  id=" flexRadioDefault1"/>
                 <label className='form-check-label'>Single</label>
                  </div>
             </Col>
             <Col className='col-md-3 col-12 col-lg-3 personal-dtls-step'>
                  <div className='form-check'>
                  <input className='form-check-input' type="radio" name="flexRadioDefault1"  id=" flexRadioDefault1"/>
                 <label className='form-check-label'>Single</label>
                  </div>
             </Col>
         </Row>
         </fieldset>
     </div>
     <br />
     <br />
     <Link type="button" className="step-add-details-goal-button btn" to="/StepAddOtherDetails" >NEXT</Link>
            </Col>





                   {/* main row end */}
               </Row>
           </Container>
       </div>
    </div>;
  }
}

export default StepAddDetails;

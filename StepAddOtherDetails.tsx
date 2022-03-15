import React, { Component } from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";

 class StepAddOtherDetails extends Component {
  render() {
    return <div>
    <div className='add-other-main'>
        <Container className='cont1'>
            <Row className='step-main-add-other'>
                <Col className='add-other-details-sub-main'>
                    <h2 className="step-other-h2">Add other details</h2>
                    <h3 className='step-other-h3'> Enter your personal details for a better experience</h3>
             

                <div className='form-group field-wrapper'>
                <Form.Select className="form-control other-details-control " aria-label="Default select example" >
                <option>Occupation</option>
                             <option value="01">2</option>
                              <option value="02">2</option>
                              <option value="03">2</option>
                              <option value="04">2</option>
                              <option value="05">2</option>
                             
                </Form.Select>

                
                <Form.Select className="form-control other-details-control" aria-label="Default select example" >
                <option>Annual income range</option>
                             <option value="01">2</option>
                              <option value="02">2</option>
                              <option value="03">2</option>
                              <option value="04">2</option>
                              <option value="05">2</option>
                             
                </Form.Select>

                
                <Form.Select className="form-control other-details-control" aria-label="Default select example" >
                <option>Source of fund</option>
                             <option value="01">2</option>
                              <option value="02">2</option>
                              <option value="03">2</option>
                              <option value="04">2</option>
                              <option value="05">2</option>
                             
                </Form.Select>
                </div>
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto'>
                            <legend className='mumlabel-leg'>Politically exposed person</legend>
                              <Row className=' add-other-min'>
                                  <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >yes</label>
                                          </div>
                                 </Col>
                                 <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >No</label>
                                          </div>
                                 </Col>
                              </Row>
                             </fieldset>
                    </div>
                
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto'>
                            <legend className='mumlabel-leg'>Are you a US Citizen?</legend>
                              <Row className=' add-other-min'>
                                  <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault1' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >yes</label>
                                          </div>
                                 </Col>
                                 <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault1' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >No</label>
                                          </div>

                         
                                        
                                 </Col>
                              </Row>
                             </fieldset>
                    </div>
                 
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto'>
                            <legend className='mumlabel-leg'>Are you a Tax resident of any country other than India?</legend>
                              <Row className=' add-other-min'>
                                  <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault2' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >yes</label>
                                          </div>
                                 </Col>
                                 <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input  className='form-check-input' type="radio" name='flexRadioDefault2' id='flexRadioDefault1' />
                                          <label className=" form-check-label" >No</label>
                                          </div>

                         
                                         
                                 </Col>
                              </Row>
                             </fieldset>
                    </div>
                    <Link type="button" className="step-add-other-button btn" to="/StepAddNomination" > NEXT</Link>
                </Col>

                {/* end first row */}
            </Row>
        </Container>
    </div>
    </div>;
  }
}

export default StepAddOtherDetails;

import React, { Component } from 'react';
import { Container, Col, Row , Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


 class StepForVerifyPAN extends Component {
  render() {
    return <div>
    <div className='pan-main'>
  <Container className='cont1'>
      <Row className='step-main-pain'>
          <Col className='col-md-12 step-sub-main'>
              <h2 className='stepmain-pan-h2'>
              Verify your PAN details
              </h2>
              <h3 className='stepmain-pan-h3'>
              Enter your pan number & date-of-birth for verification
              </h3>
              <br />
              <br />
              <div className='step-main-form-group'>
                  <input type="text" className='pan-form-control' id="user-fullname" placeholder='Enter PAN number'/>
              </div>
              <div className='pan-form-group'>
                  <fieldset className='pan-p-2'>
                    <legend className='pan-lebel'>Date of birth</legend> 
                    <Row className='pan-row'>
                     
                              <Col className='col-md-4 col-lg-4 col-12 pan-list-table'>
                              <Form className="mb-3 "   >
                <Form.Select className="form-control pan-form-time" aria-label="Default select example" >
                <option>Day</option>
                <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                              <option value="04">4</option>
                              <option value="05">5</option>
                              <option value="06">6</option>
                              <option value="07">7</option>
                              <option value="08">8</option>
                              <option value="09">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                </Form.Select>
                </Form>
                </Col>
                      <Col className='col-md-4 col-lg-4 col-12 pan-list-table'>
                    <Form className="mb-3 "   >
                <Form.Select className="form-control  pan-form-time" aria-label="Default select example" >
                <option>Month</option>
             <option value="01">January</option>
                             <option value="02">February</option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                </Form.Select>
                </Form>
                </Col>

                              <Col className='col-md-4 col-lg-4 col-12 pan-list-table pan-list-agn'>
                                 <input type="text" className='foem-control' name='dob-year'placeholder='Year'/>
                              </Col>
                    </Row> 
                  </fieldset>
              </div>
          <div className='pan-form-check-switch'>
        <input className='pan-foem-check-switch pan-very' type={"checkbox"} id='' />
    <label className='"form-check-label pan-sub-check-level'>
    I confirm to fetch my latest KYC details from KRA to open my Investment account.
    </label>
          </div>
          <br />
          <br />
          <Link type="button" className="step-fs-pan-button btn" to="/StepAddDetails" >SUBMIT </Link>


          </Col>


          {/* main row  end stop */}
      </Row>
  </Container>
        </div>
    </div>;
  }
}

export default StepForVerifyPAN;

import React, { Component } from 'react';
import {Container,Row,Col}  from 'react-bootstrap'
import { Link } from 'react-router-dom';

 class StepDigiLocker extends Component {
  render() {
    return <div>
<div className='digi-locker-main'>
    <Container className='cont1'>
        <Row className='step-digi-lock'>
          <Col className="col-md-12 step-add-nomination-sub">
          <h2 className="step-nom-h2">Digi Locker</h2>
                    <h3 className='step-nom-h3'> A digital initiative by Government of India</h3>
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto auto-nom'>
                            <legend className='mumlabel-leg'>Add authorizaton</legend>
                              <Row className=' add-other-min nom-other-min'>
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
                    
              <div className='pan-form-check-switch pan-read-more-side'>
        <input className='pan-foem-check-switch' type={"checkbox"} id='' />
    <label className='form-check-label'>
    I hereby authorize Invest4Edu to... 
    </label>
    <div>
    <a href="#" style={{color:"#2e7eed", textDecoration:"none"}}>read more</a>
   
    </div>
          </div>
        
               <Link type="button" className="step-fs-pan-button  stepfs-nom-button btn" to="/StepAddressdetails" >Next </Link>

              {/* top col end  */}
          </Col>
        </Row>
    </Container>
</div>
    </div>;
  }
}

export default StepDigiLocker;

import React, { Component } from 'react';
import {Container,Row,Col}  from 'react-bootstrap'
import { Link } from 'react-router-dom';


class StepAddressdetails extends Component {
  render() {
    return <div>
                      <div className='digi-locker-main'>
    <Container className='cont1'>
        <Row className='step-digi-lock'>
          <Col className="col-md-12 step-add-nomination-sub">
          <h2 className="step-nom-h2">Address Details</h2>
                    <h3 className='step-nom-h3'>Address details confirmation</h3>
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto auto-address'>
                            <legend className='mumlabel-leg'>Address details confirmation</legend>
                              <Row className='steps-address'>
                                  <Col className='col-md-3 col-12 col-lg-3 step-address-details-p'>
                                  <p className='addtess-p-steps'>
                                    <div>
                                         Suresh Pal, B-23 Regency, 
                                         </div>
                                    <div>
                                        Tagor Nagar, Kalyan,
                                    </div>
                                        <div>

                                         Maharashtra - 421306
                                        </div>
                                        </p>
                                         
                                 </Col>
                                </Row>
                             </fieldset>
                    </div>
                    
              <div className='pan-form-check-switch '>
        <input className='pan-foem-check-switch' type={"checkbox"} id='' />
    <label className='form-check-label address-details-form'>
    Consider as Correspondence address too 
    </label>
   
          </div>
        
               <Link type="button" className="step-fs-pan-button  stepfs-nom-button btn" to="/StepFirstGoal" >Next </Link>

              {/* top col end  */}
          </Col>
        </Row>
    </Container>
</div>
    </div>;
  }
}

export default StepAddressdetails;

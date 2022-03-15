import React, { Component } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class StepAddNomination extends Component<any,any>{
  constructor(props:any) {
    super(props);
    this.state={
      animate:true,
    };
		this.handleClick = this.handleClick.bind(this);

  }
    handleClick() {
		
		this.setState((prevState:any) => {
		  return { animate: !prevState.animate }
		});
	  }
  
 
  
  render() {
     //   const addActiveClass=this.state.addActiveClass.slice();
    //  const activeClasses = this.state.activeClasses.slice();

  return <div>
  <div className='add-nominated'>
    <Container  className='cont1'>
        <Row  className='step-add-nominated' >
    <Col className=' col-md-12 step-add-nomination-sub'>
    <h2 className="step-nom-h2">Add nomination details</h2>
                    <h3 className='step-nom-h3'> Enter your nominee details here</h3>
                    <div className='form-group'>
                        <fieldset className='p-2 mr-auto auto-nom'>
                            <legend className='mumlabel-leg'>Add nomination details</legend>
                              <Row className=' add-other-min nom-other-min'>
                                  <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input className='form-check-input' checked={this.state.animate?true:false} onChange={() => this.setState({animate:true})} type="radio" name='flexRadioDefault' id='flexRadioDefault1'/>
                                          <label className=" form-check-label" >yes</label>
                                          </div>
                                         
                                 </Col>
                                 <Col className='col-md-3 col-12 col-lg-3'>
                                      <div className='foem-check'>
                                          <input className= 'form-check-input' checked={this.state.animate?false:true} onChange={() => this.setState({animate:false})} type="radio" name='flexRadioDefault' id='flexRadioDefault'/>
                                          <label className= "form-check-label" >No</label>
                                          </div>
                                 </Col>

                              </Row>
                             </fieldset>
                    </div>
{this.state.animate?<>
<div>
                    <div  className='form-group field-wrapper'>
                    <div className='step-main-form-group'>
                  <input type="text" className='nominated-form-control' id="user-fullname" placeholder='Name'/>
                  </div>
                <Form.Select className="form-control ag-form-control" aria-label="Default select example" >
                <option>Relationship with applicant</option>
                             <option value="01">2</option>
                              <option value="02">2</option>
                              <option value="03">2</option>
                              <option value="04">2</option>
                              <option value="05">2</option>
                              </Form.Select>
                              <Form.Select className="form-control" aria-label="Default select example" >
                <option>Identification type</option>
                             <option value="01">2</option>
                              <option value="02">2</option>
                              <option value="03">2</option>
                              <option value="04">2</option>
                              <option value="05">2</option>
                             </Form.Select>
                             <div className='step-main-form-group'>
                  <input type="text" className='nominated-form-control nom-idenification' id="user-fullname" placeholder='Identification No.'/>
                  </div>
                  <div className='step-main-form-group'>
                  <input type="text" className='nominated-form-control' id="user-fullname" placeholder='Share'/>
                  </div>
                
                     </div>

          
           <div  className='pan-form-group'>
                  <fieldset className='pan-p-2'>
                    <legend className='pan-lebel'>Nominee's Date of birth</legend> 
                    <Row className='pan-row'>
                     
                              <Col className='col-md-4 col-lg-4 col-12 pan-list-table'>
                              <Form className="mb-3 "   >
                <Form.Select className="form-control  pan-form-time" aria-label="Default select example" >
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

                              <Col className='col-md-4 col-lg-4 col-12 pan-list-table step-add-table'>
                                 <input type="text" className='foem-control  stepiadd-tb ' name='dob-year'placeholder='Year'/>
                              </Col>
                    </Row> 
                  </fieldset>
              </div>
        
              <div className='pan-form-check-switch pan-add-nomination'>
        <input className='pan-foem-check-switch ' type={"checkbox"} id='' />
    <label className='form-check-label'>
    Add more Nomination.
    </label>
          </div>
       </div></>:<>  <div  className='not-wish-nom'>
               <input className='pan-foem-check-switch' type={"checkbox"} id='' />
               <label className='form-check-label'>
                  I do not wish to keep.  </label>
              <div>
              <a href="#" style={{color:"#2e7eed", textDecoration:"none"}}>read more</a>
   
    </div>
               </div></>}
      
       
                    
                   {/* for no show button  */}
           

             


          
          <Link type="button" className="step-fs-pan-button  stepfs-nom-button btn" to="/StepDigiLocker" >NEXT </Link>



    </Col>



        </Row>
    </Container>
</div>



    </div>;
  }
}

export default StepAddNomination;
function animate(animate: any): void {
  throw new Error('Function not implemented.');
}


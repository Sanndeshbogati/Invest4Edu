import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import "../components/css/filterMutualFunds.css"
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';


export class FilterMutualFunds extends Component<any, any> {

    constructor(props:any){
		super(props);
		this.state = {
			activeClasses:[false, false, false, false, false],
			animate:false,
		};
		this.addActiveClass = this.addActiveClass.bind(this);

	}
	addActiveClass(index: any){
		const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
		const activeClasses1 = activeClasses
		this.setState({activeClasses});
		// console.log("Active class ",activeClasses);
		// console.log(index.target.className);
		
	}
	

  render() {
    //   const addActiveClass=this.state.addActiveClass.slice();
    const activeClasses = this.state.activeClasses.slice();
    return <div> 
        <div className=' filter-mutualfunds-main'>
            <Container className='filter-mutual-sub-main cont1'>
                <Row className='filter-mutual-wrop'>
                    <Col className='col-md-4  filterfund-mainsub'>
                        <div className='filter-mf-main'>
                            <div className='filter-mf-text'>
                                <h1 className='filter-mf-mainh1'>FILTERS
                                    {/* <span className='btnck'>Clear All</span> */}
                                    <span>
                                     <button className="fmfbt">Clear All</button>
                                     </span>
                                </h1>
                            </div>
                            {/* amc */}
                            <Row className='filter-box-wrap'>
                                <Col className='col-md-12 filter-mf-md12'>
                                    <Container className='filter-other-cont'>
                                        <a onClick={() => this.addActiveClass(0)} 			 
						                                           className='filter-tabs-heading'>
                                            AMC
                                            <FaAngleDown className='filter-icons-down'/>
                                        </a>
                                        <div style={{display: activeClasses[0]? "block":"none"}} id='demo'>
                                            <form>
                                                <div className='mf-search-box'>
                                               
                                                <input type="text" className="search_input" placeholder="Search Mutual Fund Companies"/>
                                                <BiSearch className='filter-fund-icons'/>
                                            </div>
                                            
                                            <div  className='filter-mutual-checkbox-list overflow-scole'>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>Aditya Birla Sun Life Mutual Fund </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Axis Mutual Fund
                                                    </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> BNP Paribas Mutual Fund
                                                        </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> BOI AXA Mutual Fund
                                                   </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Baroda Mutual Fund
                                                         </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Canara Robeco Mutual Fund
                                                       </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> DSP Mutual Fund
                                                  </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Edelweiss Mutual Fund
                                                    </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Essel Mutual Fund
                                                     </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Franklin Templeton Mutual Fund
                                                </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> HDFC Mutual Fund
                                                   </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  ICICI Prudential Mutual Fund
                                                        </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> IDBI Mutual Fund
                                                      </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> IDFC Mutual Fund
                                                    </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> IIFL Mutual Fund
                                                     </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> ITI Mutual Fund
                                                  </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Indiabulls Mutual Fund
                                                   </span> 
                                                </div>
                                               
                                            </div>
                                            </form>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                            {/* categoty */}
                            <Row className='filter-box-wrap'>
                                <Col className='col-md-12'>
                                    <Container className='filter-other-cont'>
                                        <a onClick={() => this.addActiveClass(1)} className='filter-tabs-heading' >
                                            Category
                                            <FaAngleDown className='filter-icons-down'/>
                                        </a>
                                        <div style={{display: activeClasses[1]? "block":"none"}} className='demo'>
                                            <form>
                                                
                                            <div className='filter-mutual-checkbox-list overflow-scole'>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span' >Debt</span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Equity
                                                    </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Hybrid</span> 

                                                        
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Other
                                                   </span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  Solution Oriented </span> 
                                                    </div>
                                                    </div>
                                            </form>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>   
                             {/*            risk            */}
                             <Row className='filter-box-wrap'>
                                <Col className='col-md-12'>
                                    <Container className='filter-other-cont'>
                                        <a onClick={() => this.addActiveClass(2)}  className='filter-tabs-heading' >
                                            Risk
                                            <FaAngleDown className='filter-icons-down'/>
                                        </a>
                                        <div style={{display: activeClasses[2]? "block":"none"}} className='demo'>
                                            <form>
                                               
                                            <div className='filter-mutual-checkbox-list overflow-scole'>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>Low</span> 
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  Moderately Low
                                                    </span>
                                                    
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Moderate</span> 

                                                        
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  Moderately High   </span>

                                                  
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> High </span> 
                                                    </div>
                                                    <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  Very High </span> 
 
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>                       
                            {/* fund size                    */}
                            <Row className='filter-box-wrap'>
                                <Col className='col-md-12'>
                                    <Container className='filter-other-cont'>
                                        <a onClick={() => this.addActiveClass(3)}  className='filter-tabs-heading' >
                                            Fund Size
                                            <FaAngleDown className='filter-icons-down'/>
                                        </a>
                                        <div style={{display: activeClasses[3]? "block":"none"}} className='demo'>
                                            <form>
                                                
                                            <div className='filter-mutual-checkbox-list overflow-scole'>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Upto 1,000Cr </span> 

                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'> Upto 2,000Cr  </span>

                                                  
                                                    
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  Upto 5,000Cr </span> 


                                                        
                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>   Upto 10,000Cr </span>
                                                    </div>
                                                   
                                                 </div>
                                            </form>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>                       
                                 {/* Avilable to invest     */}
                                 <Row className='filter-box-wrap'>
                                <Col className='col-md-12'>
                                    <Container className='filter-other-cont'>
                                        <a onClick={() => this.addActiveClass(4)} className='filter-tabs-heading' >
                                           Avilable to Investe
                                            <FaAngleDown className='filter-icons-down'/>
                                        </a>
                                        <div style={{display: activeClasses[4]? "block":"none"}} className='demo'>
                                            <form>
                                               
                                            <div className='filter-mutual-checkbox-list overflow-scole'>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>SIP </span> 

                                                </div>
                                                <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>  ONE-TIME  </span>
                                                    </div>
                                                    </div>
                                            </form>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>   
                            </div>   
                            </Col>

                               {/* right-side        */}          
            
			
                            
		  <div className="col-md-8 filter-semi-main-done">
          <Row className='filter-rideside-ro'>
                                 <Col className='col-md-6'>
                                     <h1 className='filter-rightside-h1'>All Mutual Funds</h1>
                                     </Col>  
                                  <Col className='col-md-6 '></Col>
                            </Row>
                            <div className='mutual-fund-body'>
				<div id="London" className="tabcontent">
					<div className="row pills-body">
						<Col className="col-md-7">
							<div className="plan">
									<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon" data-toggle="collapse" data-target="#demo"><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
										<p  className="filter-side-p">Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
									<div className="container">
									</div>
								</div>

							</div>
						</Col>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">0.39%</h2>
										<p className='filter-side-p'>1Y</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">97.12%</h2>
										<p className='filter-side-p'>3Y</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">44.78%</h2>
										<p className='filter-side-p'>5Y</p>
									</div>
								</div>
							</div>
						</div>
						
					</div>


					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p className="filter-side-p">Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">0.39%</h2>
										<p className='filter-side-p'>1D</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">97.12%</h2>
										<p className='filter-side-p'>1Y</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">44.78%</h2>
										<p className='filter-side-p'>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p className="filter-side-p">Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">0.39%</h2>
										<p className='filter-side-p'>1D</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">97.12%</h2>
										<p  className="filter-side-p">1Y</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">44.78%</h2>
										<p className='filter-side-p'>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p className="filter-side-p">Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">0.39%</h2>
										<p className='filter-side-p'>1D</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">97.12%</h2>
										<p className='filter-side-p'>1Y</p>
									</div>
								</div>
								<div className="col-md-4 size-extand">
									<div className="plan-body text-center">
										<h2 className="filter-side-h2">44.78%</h2>
										<p className='filter-side-p'>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					

					
				</div>
                </div>
				
			
				
			</div>
		
          
                    
                                                    

                        
                   
                </Row>
            </Container>
        </div>
    </div>;
  }
}

export default FilterMutualFunds;

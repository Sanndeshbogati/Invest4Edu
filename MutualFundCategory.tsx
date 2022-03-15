import React, { Component } from "react";
import "../component-css/mutualFundCategory.css";
import Footer from "./Footer";
import { Accordion, Col, Nav, Row, Tab } from "react-bootstrap";
import { FaChevronDown  } from "@react-icons/all-files/fa/FaChevronDown";
import { FaChevronUp  } from "@react-icons/all-files/fa/FaChevronUp";
import { BsBoxArrowInUpRight  } from "@react-icons/all-files/bs/BsBoxArrowInUpRight";
import { Link } from "react-router-dom";
import Redeem_popup from "./Redeem_popup";
import Switch from "./Switch";
import SWP from "./SWP";
import MF_list from "./response.json"



export default class MutualFundCategory extends Component<any,any>{
	
	constructor(props:any){
		super(props);
		this.state = {
			showButton1: true,
			showButton2: false,
			showButton3: false,
			showButton4: false,
			showButton5: false,
			showButton6: false,
			
			MoreInfo:false,

			showRedeem:false,
			showRedeem2:false,
			showRedeem3:false,
			
			showRedeembtn1:true,
			showRedeembtn2:false,
			showRedeembtn3:false,
			
			sip:true,
			
			lumsum:false,
			
			showModalPopup: false,
			showModalPopup1: false,
			showModalPopup2: false,
			
		};

		// var length = Object.keys(JSON.parse(MF_list)).length
		
		// for(var i=0;i<=100;i++){
		// 	console.log(MF_list.ArrayOfResponse[i].BSESchemeCode);
		// }
	console.log(MF_list.ArrayOfResponse);

		// MF_list.ArrayOfResponse.map((name:any) => (console.log(name)) )
		// MF_list.ArrayOfResponse.map((name:any) => {
		// 	return <p >  </p>
		// })
		


	}
	
	toggle = () => {
		this.setState({ 
			showButton1: true, showButton2: false, showButton3:false, showButton4: false, showButton5: false, showButton6: false, 
		});
	};
	toggle2 = () => {
		this.setState({ 
			showButton1: false, showButton2: true, showButton3:false, showButton4: false, showButton5: false, showButton6: false, 
		});
	  };
	toggle3 = () => {
		this.setState({ 
			showButton1: false, showButton2: false, showButton3:true, showButton4: false, showButton5: false, showButton6: false, 
		});
	  };
	toggle4 = () => {
		this.setState({ 
			showButton1: false, showButton2: false, showButton3:false, showButton4: true, showButton5: false, showButton6: false, 
		});
	  };
	toggle5 = () => {
		this.setState({ 
			showButton1: false, showButton2: false, showButton3:false, showButton4: false, showButton5: true, showButton6: false, 
		});
	  };
	toggle6 = () => {
		this.setState({ 
			showButton1: false, showButton2: false, showButton3:false, showButton4: false, showButton5: false, showButton6: true, 
		});
	  };
	redeemToggle1 = () =>{
		this.setState({
			showRedeembtn1:true,
			showRedeembtn2:false,
			showRedeembtn3:false,
		});
	};

	redeemToggle2 = () =>{
		this.setState({
			showRedeembtn1:false,
			showRedeembtn2:true,
			showRedeembtn3:false,
		});
	};

	redeemToggle3 = () =>{
		this.setState({
			showRedeembtn1:false,
			showRedeembtn2:false,
			showRedeembtn3:true,
		});
	};

	MoreInfo(){
		this.setState((prevState:any) => {
			return { MoreInfo: !prevState.MoreInfo }
		  });
		
	}
	showRedeem = () => {
		this.setState((prevState:any) => {
			return {showRedeem: !prevState.showRedeem }
		  });
		
	}
	showRedeem2 = () => {
		this.setState((prevState:any) => {
			return {showRedeem2: !prevState.showRedeem }
		  });
		
	}
	showRedeem3 = () => {
		this.setState((prevState:any) => {
			return {showRedeem3: !prevState.showRedeem }
		  });
		
	}

	isShowPopup = (status:any) => {  
		this.setState({ showModalPopup: status });  
	  }; 
	isShowPopup2 = (status:any) => {  
		this.setState({ showModalPopup1: status });  
	}; 
	isShowPopup3 = (status:any) => {  
		this.setState({ showModalPopup2: status });  
	}; 


  render() {
    // Get the element with id="defaultOpen" and click on it


    return (	
      <div>
        <section className="section-title">
          <h2 id="Weather" onClick={this.toggle} style={this.state.showButton1? {display:"block"} : {display:"none"}} >Select Your Mutual Fund Category</h2>
          <p>
            <a href="index.html">Invest4Edu</a> makes it easy to invest for your
            education goals. <br />
            No complicated tasks. No gimmicks.
          </p>
        </section>

	 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col  sm={3}>
      <Nav variant="pills" className="flex-column ">
        <Nav.Item>
          <Nav.Link className="tab-button" eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className="tab-button" eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora quisquam odio, exercitationem distinctio. Rerum, quam inventore aliquid eaque voluptate repellendus, ea aliquam neque eius pariatur cumque doloremque quas.1
        </Tab.Pane>
        <Tab.Pane eventKey="second">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora quisquam odio, exercitationem distinctio. Rerum, quam inventore aliquid eaque voluptate repellendus, ea aliquam neque eius pariatur cumque doloremque quas.2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> 

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="container">
			<Row>
				<Col className="col-md-3">
            <div className="tab">
		<Nav variant="pills" className="flex-column ">
			<Nav.Item>
				<Nav.Link className="tab-button" eventKey="first">Tab 1</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link  className="tab-button" eventKey="second">Tab 2</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link  className="tab-button" eventKey="third">Tab 3</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link  className="tab-button" eventKey="fourth">Tab 4</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link  className="tab-button" eventKey="fifth">Tab 5</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link  className="tab-button" eventKey="sixth">Tab 6</Nav.Link>
			</Nav.Item>
		</Nav>
              <button onClick={this.toggle} className={this.state.showButton1? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-align-center" aria-hidden="true"></i>
                </span>{" "}
                TAX SAVING{" "}
              </button>
              <button onClick={this.toggle2} className={this.state.showButton2? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-landmark" aria-hidden="true"></i>
                </span>{" "}
                SECTORIAL
              </button>
              <button onClick={this.toggle3} className={this.state.showButton3? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-chart-line" aria-hidden="true"></i>
                </span>{" "}
                HIGH RANKING
              </button>
              <button onClick={this.toggle4} className={this.state.showButton4? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-chart-pie" aria-hidden="true"></i>
                </span>{" "}
                HIGH PERFORMER
              </button>
              <button onClick={this.toggle5} className={this.state.showButton5? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-donate" aria-hidden="true"></i>
                </span>{" "}
                BETTER THAN FDs
              </button>
              <button onClick={this.toggle6} className={this.state.showButton6? "tablinks active" : "tablinks"}>
                <span>
                  <i className="fa fa-chart-bar" aria-hidden="true"></i>
                </span>{" "}
                HIGH ALPHA
              </button>
            </div>
          </Col>
		  <div className="col-md-9">
			  



		  {this.state.showButton1?
		  <>
			<div id="London" className="tabcontent">
			<Tab.Content>
    	<Tab.Pane eventKey="first">
			<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="" >
				<Accordion.Header>
					<div >
				
					<Link className="i4e" to='/'><img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/> ICICIOOO Prudential Technology Direct Plan Growth <BsBoxArrowInUpRight/></Link>
					<p>Very High Risk <span>|</span> <span> Equity </span>  <span>|</span> <span> 5 * </span></p>
					</div>
					<div className="col-md-4">
										<div className="row returns">
											<div className="col-md-3">
												<div className="plan-body text-center">
													<h2>0.39%</h2>
													<p>1Y</p>
												</div>
											</div>
											<div className="col-md-3">
												<div className="plan-body text-center">
													<h2>97.12%</h2>
													<p>3Y</p>
												</div>
											</div>
											<div className="col-md-3">
												<div className="plan-body text-center">
													<h2>44.78%</h2>
													<p>5Y</p>
												</div>
											</div>
										</div>
									</div>
				
				</Accordion.Header>
				<Accordion.Body style={{backgroundColor:'#e7f1ff'}}>
				<div  id="demo" className="text-center">
											<div className="demo-btn text-center">
												<Link to="/lumsum_sip"  state={false}><button  type="button" className="btn">Lumsum</button></Link>
												<Link to="/lumsum_sip" state={true}><button type="button" className="btn" >SIP</button></Link>
												
												<button type="button" 
												// onClick={this.showRedeem}
												onClick={() => this.isShowPopup(true)}
												className="btn">
													Redeem
												</button>
												<button type="button" className="btn" id="goToSwitch" onClick={() => this.isShowPopup2(true)}>
													Switch
												</button>
												<button type="button" className="btn" onClick={() => this.isShowPopup3(true)}>
													SWP
												</button>
											</div>
										</div>
				</Accordion.Body>
			</Accordion.Item>



			<Accordion.Item eventKey="1">
				<Accordion.Header>ICICIOOO Prudential Technology Direct Plan Growth</Accordion.Header>
				<Accordion.Body>
				<div  id="demo" className="text-center">
											<div className="demo-btn text-center">
												
												{/* <Link to="/Lumsum_sip" params={{ testvalue: "hello" }} > Go to courses </Link> */}
												<Link to="/lumsum_sip"  state={false}><button  type="button" className="btn">Lumsum</button></Link>
												{/* <Route path="/lumsum_sip" component={Lumsum_sip} /> */}
												{/* <Lumsum_sip  /> */}
			
												
												
												<Link to="/lumsum_sip" state={true}><button type="button" className="btn" >SIP</button></Link>
												
												<button type="button" 
												// onClick={this.showRedeem}
												onClick={() => this.isShowPopup(true)}
												className="btn">
													Redeem
												</button>
												<button type="button" className="btn" id="goToSwitch" onClick={() => this.isShowPopup2(true)}>
													Switch
												</button>
												<button type="button" className="btn" onClick={() => this.isShowPopup3(true)}>
													SWP
												</button>
											</div>
										</div>
				</Accordion.Body>
			</Accordion.Item>
			</Accordion>
		
        </Tab.Pane>
        <Tab.Pane eventKey="second">

        </Tab.Pane>
      </Tab.Content>
					<div className="row pills-body">
						<Col className="col-md-7">
							<div className="plan">
									<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICIOOO Prudential Technology Direct Plan Growth</a>
									 <span className="down-icon" data-toggle="collapse" data-target="#demo" onClick={this.MoreInfo}>
										{/*  */}
										
										{this.state.MoreInfo?
										<FaChevronUp></FaChevronUp>
										:
										<FaChevronDown></FaChevronDown>
										}

										{/*  */}
										</span></h2>
										<p>Very High Risk <span>|</span> <span> Equity </span>  <span>|</span> <span> 5 * </span></p>
									<div className="container">
									</div>
								</div>

							</div>
						</Col>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>3Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>5Y</p>
									</div>
								</div>
							</div>
						</div>
						{this.state.MoreInfo? <><div className="col-md-12_">
							<div  id="demo" className="text-center">
								<div className="demo-btn text-center">
									
									{/* <Link to="/Lumsum_sip" params={{ testvalue: "hello" }} > Go to courses </Link> */}
									<Link to="/lumsum_sip"  state={false}><button  type="button" className="btn">Lumsum</button></Link>
									{/* <Route path="/lumsum_sip" component={Lumsum_sip} /> */}
									{/* <Lumsum_sip  /> */}
 
									
									
									<Link to="/lumsum_sip" state={true}><button type="button" className="btn" >SIP</button></Link>
									
									<button type="button" 
									// onClick={this.showRedeem}
									onClick={() => this.isShowPopup(true)}
									 className="btn">
										Redeem
									</button>
									<button type="button" className="btn" id="goToSwitch" onClick={() => this.isShowPopup2(true)}>
										Switch
									</button>
									<button type="button" className="btn" onClick={() => this.isShowPopup3(true)}>
										SWP
									</button>
								</div>
							</div>
						</div></>:<></>}
						
					</div>

					{/* <!------------------ redeem modal start--------------> */}
					
					{this.state.showModalPopup?
					<>{/* Redeem popup */}
					<Redeem_popup showModalPopup={this.state.showModalPopup}  onPopupClose={this.isShowPopup} />
					<Switch showModalPopup={this.state.showModalPopup1}  onPopupClose={this.isShowPopup2}/>
					<SWP showModalPopup={this.state.showModalPopup2}  onPopupClose={this.isShowPopup3}></SWP>
					</>:
					<>
					</>
					}

					
					
					{/* <!------------------ redeem modal ends--------------> */}


					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		  </>:
		  <>
			
		  </>}
				
				  
		  {this.state.showButton2?
		  <>
<div id="Paris" className="tabcontent">
					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		  </>:
		  <>

		  </>}
				
		  
		  {this.state.showButton3?
		  <>
		 
				<div id="Tokyo" className="tabcontent">
					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		  </>:
		  <>
		  
		  </>}
		  
				{this.state.showButton4?
		  <>
		  <div id="a" className="tabcontent">
					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
		  </>:
		  <>
		  
		  </>}
				
		  
				{this.state.showButton5?
		  <>
		 <div id="b" className="tabcontent">
					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		  </>:
		  <>
		  
		  </>}
				
		  
				{this.state.showButton6?
		  <>
		  <div id="c" className="tabcontent">
					<div className="row pills-body">
						<div className="col-md-7">
							<div className="plan">
								<img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
								<div className="plan-body">
									<h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a></h2>
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
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
									<p>Very High Risk <span>.</span> <span> Equity </span>  <span>.</span> <span> 5 * </span></p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>0.39%</h2>
										<p>1D</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>97.12%</h2>
										<p>1Y</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="plan-body text-center">
										<h2>44.78%</h2>
										<p>3Y</p>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
		  </>:
		  <>
		  
		  </>}

			</div>
			</Row>
          
        </div>
		<div>
		</div>
		  </Tab.Container>
        <Footer />
      </div>
    );
  }
}


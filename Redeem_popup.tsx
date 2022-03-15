import React, { Component } from 'react'
import { BsCheck2Circle } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

export class Redeem_popup extends Component<any,any> {
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
			showRedeem:true,
			showRedeembtn1:true,
			showRedeembtn2:false,
			showRedeembtn3:false,
			sip:true,
			lumsum:false,
            showModal: false,
			
		};
		this.MoreInfo = this.MoreInfo.bind(this);
		this.showRedeem = this.showRedeem.bind(this);
		
	}

    isShowModal = (status:any) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    } 

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
  render() {

    return (
        <div>
            {this.state.showRedeem?<>
            <div className="modal-fade-show modal fade show" style={{display:"block"}} id="redeemModal">
      <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content">
              <div className="signup-step-container">
                  <div className="container">
                      <Row className="">
                          <div className="col-md-12_">
                              <button type="button" className="redeem_close_btn open"  onClick={() => this.isShowModal(true)}  data-dismiss="modal"><AiOutlineCloseCircle></AiOutlineCloseCircle></button>
                              <div className="wizard">
                                  <div className="wizard-inner">
                                      <div className="connecting-line"></div>
                                      <ul className="popup_nav_tabs nav nav-tabs" role="tablist">
                                          <li role="presentation" className="step_1 active">
                                              <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span onClick={this.redeemToggle1} className={this.state.showRedeembtn1? "round-tab" : "round-tab_dis" }>1 </span></a>
                                          </li>
                                          <li role="presentation" className="step_2 disabled">
                                              <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false"><span onClick={this.redeemToggle2} className={this.state.showRedeembtn2? "round-tab" : "round-tab_dis" }>2</span></a>
                                          </li>
                                          <li role="presentation" className="step_3 disabled">
                                              <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span onClick={this.redeemToggle3} className={this.state.showRedeembtn3? "round-tab" : "round-tab_dis" }>3</span></a>
                                          </li>
                                      </ul>
                                  </div>

                                  <form role="form" action="index.html" className="login-box">
                                      <div className="tab-content" id="main_form">

                                          <div style={this.state.showRedeembtn1? {display:"block"} : {display:"none"}} className={this.state.showRedeembtn1? "tab-pane active" : "tab-pane" } role="tabpanel" id="step1">
                                              <h4 className="text-left">Redeem</h4>
                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="scheme-name">
                                                          <h6>Scheme Name</h6>
                                                          <h3>SBI BlueChip Fund-Reg(G)</h3>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="scheme-name">
                                                          <h6>Folio No:</h6>
                                                          <h2>14579091</h2>
                                                      </div>
                                                  </div>
                                              </div>
                                              <Row className="">
                                                  <div className="col-md-12_">
                                                      <div className="scheme-name">
                                                          <h6>Current NAV (Unit)</h6>
                                                          <h2>63.91</h2>
                                                      </div>
                                                  </div>
                                              </Row>
                                              <form>
                                                  <div className="row">
                                                      <div className="col-md-6">
                                                          <label>Units</label>
                                                          <input type="text" placeholder="Unit" className="popup-form-control"/>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <label>Amount <sup>*</sup></label>
                                                          <input type="text" placeholder="Enter Amount" className="popup-form-control"/>
                                                      </div>
                                                  </div>
                                                  <div>
                                                  <input type="checkbox" className="mt-3"/> <label className="popup-check">Redeem All Avilable Units: 2857783</label>
                                                  <div>
                                                  <input type="checkbox"/> <label className="popup-check">I Confirm that this transaction is done purely at my sole discretion on my own.</label>

                                                  </div>

                                                  </div>

                                                  <p className="note">Note: Amount is Indicative as per latest avilabel NAV. Redemption would be processed by unit only. <sup>*</sup></p>
                                              </form>
                                              <ul className="popup_list-inline pull-right">
                                                  <li><button type="button" className="default-btn next-step">Continue to Redeem</button></li>
                                              </ul>
                                          </div>
                                          <div style={this.state.showRedeembtn2? {display:"block"} : {display:"none"}} className={this.state.showRedeembtn2? "tab-pane active" : "tab-pane" } role="tabpanel" id="step2">
                                              <h4 className="text-left">Please review your information below.</h4>
                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="scheme-name">
                                                          <h6>Scheme Name</h6>
                                                          <h3>SBI BlueChip Fund-Reg(G)</h3>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="scheme-name">
                                                          <h6>Folio No:</h6>
                                                          <h2>14579091</h2>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-12_">
                                                      <div className="scheme-name">
                                                          <h6>Current NAV (Unit)</h6>
                                                          <h2>63.91</h2>
                                                      </div>
                                                  </div>
                                              </div>
                                              <form>
                                                  <div className="row">
                                                      <div className="col-md-6">
                                                          <label>Units</label>
                                                          <input type="text" placeholder="Unit" className="popup-form-control"/>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <label>Amount <sup>*</sup></label>
                                                          <input type="text" placeholder="Enter Amount" className="popup-form-control"/>
                                                      </div>
                                                  </div>
                                                  <div>
                                                  <div>
                                                  <input type="checkbox" className="mt-3"/> <label className="popup-check">Redeem All Avilable Units: 2857783</label>
                                                  </div>	
                                                  <div>
                                                  <input type="checkbox"/> <label className="popup-check">I Confirm that this transaction is done purely at my sole discretion on my own.</label>

                                                  </div>

                                                  </div>

                                                  <p className="note">Note: Amount is Indicative as per latest avilabel NAV. Redemption would be processed by unit only. <sup>*</sup></p>
                                              </form>

                                              <ul className="popup_list-inline pull-right">
                                                  <li><button type="button" className="default-btn prev-step">Back</button></li>
                                                  <li><button type="button" className="default-btn next-step skip-btn">Skip</button></li>
                                                  <li><button type="button" className="default-btn next-step">Continue</button></li>
                                              </ul>
                                          </div>
                                          <div style={this.state.showRedeembtn3? {display:"block"} : {display:"none"}} className={this.state.showRedeembtn3? "tab-pane active" : "tab-pane" } role="tabpanel" id="step4">
                                              <div className="complete">
                                              <BsCheck2Circle size={250}/>
                                                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                  <div className="complete-body">
                                                      <h1>Payment Complete</h1>
                                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                      <h2>Order Number:</h2>
                                                      <h3>23485648365</h3>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="clearfix"></div>
                                      </div>

                                  </form>
                              </div>
                          </div>
                      </Row>
                  </div>
              </div>

          </div>
      </div>
  </div>
  </>:<></>}
    </div>
    )
  }
}

export default Redeem_popup
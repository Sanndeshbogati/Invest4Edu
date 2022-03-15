import React, { Component } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import "../component-css/swp.css"

export class SWP extends Component<any,any>{
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
          	<div style={{display:"block"}} className="modal-fade-show modal fade show" id="SWPModal" aria-modal="true" role="dialog">
						<div className="modal-dialog modal-dialog-centered">
						  <div className="modal-content">
							<div className="signup-step-container">
							  <div className="swp_cont container">
								<div className="row">
								  <div className="col-md-12">
									<button type="button" className="swp_close_btn deem_close_btnswitch_close"><AiOutlineCloseCircle onClick={() => this.isShowModal(true)}></AiOutlineCloseCircle>
									</button>
									<div className="wizard">
									  <form role="form" action="index.html" className="login-box">
										<div className="tab-content" id="main_form">
										  <div className="" role="tabpanel" id="step1">
											<div className="row">
											<h4 className="text-left">SWP</h4>
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
											  <div className="col-md-6">
												<div className="scheme-name">
												  <h6>Target Scheme</h6>
												  <h3>SBI FUND-Reg(G)</h3>
												</div>
											  </div>
											
											<div className="row">
											  <div className="col-md-4">
												<div className="scheme-name">
												  <h6>Withdraw / Transfer Date</h6>
												  <input type="date" className='swp-start-end' name="swp-start" min="2022-01-01" max="2040-12-31"/>
												</div>
											  </div>
											  <div className="col-md-4">
												<div className="scheme-name">
												  <h6>Withdraw / Transfer Freq</h6>
												  <select className="form-control">
													<option value="">Select Frequency</option>
													<option value="Weekly">Weekly</option>
													<option value="Monthly">Monthly</option>
													<option value="Quarterly">Quarterly</option>
												  </select>
												</div>
											  </div>
											  <div className="col-md-4">
												<div className="scheme-name">
												  <h6>Withdraw / Transfer End Date</h6>
												  <input type="date" className='swp-start-end' name="swp-end" min="2022-01-01" max="2040-12-31"/>
												</div>
											  </div>
											</div>
					  
											<div className="row">
											  <div className="col-md-6">
												<label>Units</label>
												<input type="text" placeholder="Unit" className="form-control"/>
											  </div>
											  <div className="col-md-6">
												<label>Amount <sup>*</sup></label>
												<input type="text" placeholder="Enter Amount" className="form-control"/>
											  </div>
											</div>
											<div className='swp_checkbox'>
											  <input type="checkbox" className="mt-3" />
											  <label className="check">SWP All Avilable Units: 2857783</label>
											</div>
											<div className='swp_checkbox'>
											  <input type="checkbox" />
											  <label className="check" >I Confirm that this transaction is done purely at my sole discretion on my own.</label>
											</div>
					  
											<ul className="list-inline pull-right">
											  <li>
												<button type="button" className="default-btn next-step">
												  SUBMIT
												</button>
											  </li>
											</ul>
										  </div>
										  </div>
										  <div className="clearfix"></div>
										</div>
									  </form>
									</div>
								  </div>
								</div>
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

export default SWP
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../component-css/switch.css"

export class Switch extends Component<any,any>{
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
        <div
          className="modal-fade-show modal fade show"
          style={{ display: "block" }}
          id="redeemModal"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="signup-step-container">
                <div className="container">
                  <Row className="">
                    <div className="switch_container">
                      <div className="row align-items-center">
                        {/* <!============ switch starts ===============> */}

                        <table className="switch_table table table-responsive table-borderless">
                          <tr>
                            <td className="switch_scheme_name">
                              Scheme to Switch Units from :&nbsp;{""}
                              <strong>Axis Long Term Equity Fund-Reg(G)</strong>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="row">
                                <div className="switch_units_value col-md-4 col-12">
                                  <strong>NAV  </strong>
                                  <div>
                                  76.94 
                                  </div>
                                  <div>
                                     As on 17-11-2021
                                    </div>
                                </div>

                                <div className="switch_units_value col-md-4 col-12">
                                  <strong>Units</strong>
                                  <div>
                                  3101.861
                                  </div>
                                </div>

                                <div className="switch_units_value col-md-4 col-12">
                                  <strong>Current Value(&#8377;)</strong>
                                  <div>
                                  2.39L
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Select transfer type :</td>
                          </tr>

                          <tr>
                            <td>
                              <ul className="account_statement_list d-md-flex col-sm-12 col-lg-9 col-xl-7 px-0 switch-mb5">
                                <li>
                                  <div className="reg reg-mob">
                                    <label>
                                      <input
                                        type="radio"
                                        value="Switch Lumpsum"
                                        id="switchradio"
                                        name="TransferType"
                                      />
                                      <span></span> Switch Lumpsum
                                    </label>
                                    <i
                                      className="icon icon-iifl-info switch-tooltip"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      data-original-title="Switch holdings from one scheme to different scheme of same mutual fund house one time"
                                    ></i>
                                  </div>
                                </li>
                                <li>
                                  <div className="reg padding-left-0 reg-mob">
                                    <label>
                                      <input
                                        type="radio"
                                        value="Systematic transfer Plan"
                                        id="stpradio"
                                        name="TransferType"
                                      />
                                      <span></span> Systematic Transfer Plan
                                      (STP)
                                    </label>
                                    <i
                                      className="icon icon-iifl-info switch-tooltip"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      data-original-title="Set up systematic switch transactions for a chosen frequency and amount"
                                    ></i>
                                  </div>
                                </li>
                              </ul>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              Note: Your investment will be visible in your
                              account with 3 business days
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="switch_checkbox checkbox_main switch-checkbox-tnc">
                                <input id="myCheckbox4" type="checkbox" />
                                <label htmlFor="myCheckbox4">
                                  I confirm that this transaction is done on my
                                  own{" "}
                                </label>
                                <span></span>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <a
                                href="mf-baskets.html"
                                className="switch_btn"
                              >
                                <i className="ti-mouse"></i>
                                CONFIRM
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              *Amount as per NAV on 17-11-2021 and may vary as
                              per the NAV at the time of transaction processing.
                            </td>
                          </tr>
                        </table>    
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
    );
  }
}

export default Switch;

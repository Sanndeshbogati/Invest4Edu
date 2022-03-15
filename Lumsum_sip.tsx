import React, { Component } from 'react';
import '../component-css/lumsum_sip.css'
import { withState } from '../utils/Router.Helper';
import {NavLink} from 'react-router-dom'



class Lumsum_sip extends Component<any,any>{
    
    constructor(props: any){      
        console.log("lumsum",props);
        super(props);{
            this.state={
                sipL:props.state,
                sip1:false,
            }
        };
    };
    
    render() {
        console.log("SIPL",this.state.sipL);

    return <div>
        <section className="sip-lumpsum">

    <div className="cont1 container">
    <div className="row">
        <div className="col-12 col-lg-12 align-self-start sip-lump-main">
                    <div className="x_panel mb-0 pb-0">
                            <h3 className="float-left" id="TitleTextCart" style={{display:"none"}} >&nbsp;Cart</h3>
                            <div className="clearfix"></div>
                            <div className="x_panel mb-0 invest_tabs p-0">
                                <ul className="nav nav-tabs">
                                    <li onClick={() => this.setState({sipL:false})} className={!this.state.sipL?"lumBtn lumBtn_active":"lumBtn"}>
                                        <a id="LSTab" data-toggle="tab" className="active show">Lumpsum</a>
                                    </li>
                                    <li onClick={() => this.setState({sipL:true})} className={!this.state.sipL?"spiBtn":"spiBtn spiBtn-active"}>
                                        <a id="STab" data-toggle="tab" className="" >SIP</a>
                                    </li>
                                </ul>
                                {/* <!-- <div className="NFO_right"><a href="/MFOnline/NFO">NFO <i className="icon icon-iifl-angle-right"></i></a></div> --> */}
                            </div>
                        </div>
                

                    <div className="tab-content clearfix pt-0">
                    {this.state.sipL? <>
                    </>:<>
                    <div id="LumpsumTab" className="tab-pane fade active show">
                                <div className="clearfix col-12" id="BuySellLumpsum">

                                    <div id="LSBlock">
                                        <div className="x_panel invest_mode">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="row">
                                                        
                                                    <h1>Lumpsum</h1>
                                                        <div className="col-sm-12 col-md-4  mb-3">
                                                            <label className="select-label">AMC</label>
                                                            
                                                            <input id="LSAMCDDL_0" type="text" name="Scheme Name" className="form-control lumsum_form-control ui-autocomplete-input"  data-toggle="tooltip" data-placement="top" title=""  data-original-title=""/>
                                                            <div id="errLSAMCDDL_0" className="error">Please Select Scheme</div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">Scheme Name</label>
                                                            <input id="LSAMCScheme_0" type="text" name="Scheme Name" className="form-control lumsum_form-control" data-toggle="tooltip" data-placement="top" title="" data-original-title=""/>
                                                            <div id="errLSAMCScheme_0" className="error">Please Select Scheme</div>
                                                            <div id="LSSchemePlan_0" className=""></div>
                                                        </div>

                                                        <div style={{display:"none"}} className="col-sm-12 col-md-4 mb-3  select_btn_group " id="dvDividendType_L">
                                                            <label className="select-label">IDCW</label>
                                                            <div className="btn-group btn-group-justified" data-toggle="buttons">
                                                                <div className="btn btn-default custombtn-radio filterbtns rdbtn-SchemeAssetType active">
                                                                    <input type="radio" id="rdbPayout_0" name="rdbDividendType_0" value="Payout"/>
                                                                    Payout
                                                                </div>
                                                                <div className="btn btn-default custombtn-radio filterbtns rdbtn-SchemeAssetType ">
                                                                    <input type="radio" id="rdbReInvest_0" name="rdbDividendType_0" value="Re-Invest" />
                                                                    Re-Invest
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">Amount</label>
                                                            <input type="text" name="Amount" id="txtLSAmount_0" className="form-control lumsum_form-control"/>
                                                            <span className="d-block">Minimum Investment Amount <span id="lblmininvestmentamt_0" className="font-weight-bold">00.00</span></span>
                                                            <div id="errtxtLSAmount_0" className="error"></div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-4 mb-3" id="divGet_foliono">
                                                            <label className="select-label">Folio No. (optional)</label>
                                                            <select name="ddFolioNo" id="ddFolioNo" className="form-control lumsum_form-control" >
                                                                <option value="0">--Select--</option>
                                                            </select>
                                                            {/* <input type="hidden" id="hdnExistFolioNo"/>
                                                            <input type="text" name="txtLSFolioNo" id="txtLSFolioNo" />
                                                            <span id="error">* Invalid Character</span> */}
                                                        </div>

                                                        <div style={{display:"none"}} className="col-sm-12 mt-3" id="OvernightDiv_0">
                                                            <div className="checkbox_main">
                                                                <input id="chkLSOvernightFund_0" type="checkbox" />
                                                                <label htmlFor="chkLSOvernightFund_0">
                                                                    Place as overnight order
                                                                    <a href="javascript:void(0)" className="red-tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="If you are looking to place the purchase order today with an aim to get the investment back in your ledger the next business day, we encourage you to place this as an overnight order. With overnight order, you’d invest in selected liquid scheme today, and we’ll process automatic redemption for you so that the proceeds are credited to your ledger on the next business day of the redemption date that you select."><i className="icon icon-iifl-info h2 align-middle d-inline-block"></i> </a>
                                                                </label>
                                                                <span></span>
                                                            </div> <p className="order_overnight_time">Overnight order can be place between 9 AM &amp; 12PM</p>

                                                        </div>

                                                        <div style={{display:"none"}} className="col-12 order_overnight_after" id="OvernightDayDiv_0">
                                                            <div className="row ">
                                                                <div className="col-sm-12 col-md-6 mb-3  select_btn_group ">
                                                                    <label className="select-label">Redemption Date</label>
                                                                    <div className="btn-group btn-group-justified" data-toggle="buttons">
                                                                        <div className="btn btn-default custombtn-radio filterbtns active">
                                                                            <input type="radio" name="rdbOvernight_0" value="BusinessDate" checked/>
                                                                            Current <br className="d-block d-sm-none"/>Business Day
                                                                        </div>
                                                                        <div className="btn btn-default custombtn-radio filterbtns custum_date">
                                                                            <input type="radio" name="rdbOvernight_0" value="CustomDate"/>
                                                                            Custom<br className="d-block d-sm-none"/> Date
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12 col-md-4 mb-3 select_date" id="OverNightCustomDateDiv_0">
                                                                    <label className="select-label">Select Custom Date</label>
                                                                    <input className="form-control lumsum_form-control datepick" id="txtOvernightDate_0" name="FromDate" type="text" value=""/>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <p id="overnightNext_0">Redemption proceeds would be credited to client’s ledger on the next business day.</p>
                                                                    <p id="overnightCustom_0">Redemption proceeds would be credited to client’s ledger on the next business day of the Redemption Date selected.</p>
                                                                    <p id="SpreadAdded_0">One or more Overnight orders present in cart; please process them or add another scheme for overnight order only!</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 lumsum-pointer">
                                                            <ul className="cut_off_list">
                                                                <li>*Cut-off time for orders of Rs. 2L and above:</li>
                                                                <li>Liquid &amp; overnight schemes - 1 pm, Other schemes - 2.30 pm</li>
                                                                <li>Duration for which such orders do not get accepted at exchange and are queued at our end for later execution:</li>
                                                                <li>Liquid &amp; overnight schemes - 1 pm to 3 pm, Other schemes - 2.30 pm to 3 pm</li>
                                                                <li>NAV applicability would increase by a business day for respective scheme types.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{display:"none"}} className="col-sm-12 col-md-12 col-lg-4">
                                                    <div className="invest_right_navcalculate_box dvcart">
                                                        <div className="row">
                                                            <div className="col-sm-12  text-center nav_on">
                                                                <div className="bdr_bottom p-3">
                                                                    <label>NAV as on <span id="lblNAVOn_0"></span></label>
                                                                    <span id="lblNAV_0">00.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 p-3 text-center pt-4">
                                                                <label>Minimum Invest Amount <span className="rupee ">`</span></label>
                                                                <span id="lblmininvestmentamt_0">00.00</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>Nature </label>
                                                                <span id="lblnature_0">-</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>Cut Off Time* </label>
                                                                <span id="lblcutofftime_0">00:00</span>
                                                            </div>
                                                            
                                                            


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-group d-block mb-3">
                                        <button type="button" className="lumsumBtn text-primary mt-0 add_more"> + Add More Funds</button>
                                        <button type="button" id="btn_Lcart" className="lumsumBtn text-primary mt-0">Go To Cart</button>
                                    </div>
                                    
                                    <div className="x_panel text-center">
                                        <button type="button" id="btnaddtocartLumpSum" className="lumsumBtn lumsumBtnConform btn-blue desk-btn  border-0 btn_tcenter">CONFIRM &amp; PROCEED</button>
                                    </div>

                                </div>


                            </div>
                    </>}
                             
                          

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                            {this.state.sipL?<><div id="SIPTab" style={{display:"block"}} className="tab-pane">
                                <div className="clearfix col-12"  id="BuySellSIP">

                                    <div id="SIPBlock">
                                        <div className="x_panel invest_mode">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="row">
                                                        <h1>SIP</h1>
                                                        <div className="col-sm-12 col-md-4  mb-3">
                                                            <label className="select-label">AMC</label>
                                                            
                                                            <input id="LSAMCDDL_1" type="text" name="Scheme Name" className="form-control lumsum_form-control ui-autocomplete-input"/>
                                                            <div id="errLSAMCDDL_1" className="error"></div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">Scheme Name</label>
                                                            <input id="LSAMCScheme_1" type="text" name="Scheme Name" className="form-control lumsum_form-control ui-autocomplete-input"/>
                                                            <div id="errLSAMCScheme_1" className="error"></div>
                                                            <div id="LSSchemePlan_1" className=""></div>
                                                        </div>

                                                        <div style={{display:"none"}} className="col-sm-12 col-md-4 mb-3  select_btn_group " id="dvDividendType_S">
                                                            <label className="select-label">IDCW</label>
                                                            <div className="btn-group btn-group-justified" data-toggle="buttons">
                                                                <div className="btn btn-default custombtn-radio filterbtns rdbtn-SchemeAssetType disabled">
                                                                    <input type="radio" id="rdbPayout_1" name="rdbDividendType_1" value="Payout"/>
                                                                    Payout
                                                                </div>
                                                                <div className="btn btn-default custombtn-radio filterbtns rdbtn-SchemeAssetType disabled">
                                                                    <input type="radio" id="rdbReInvest_1" name="rdbDividendType_1" value="Re-Invest"/>
                                                                    Re-Invest
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">SIP Frequency</label>
                                                            <select className="form-control lumsum_form-control valid" id="ddlSIPFrequency_1" ><option value="M">MONTHLY</option></select>
                                                            <div id="errddlSIPFrequency_1" className="error"></div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">SIP Date</label>
                                                            <select className="form-control lumsum_form-control" id="ddlSIPDate_1"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option></select>
                                                            <div id="errddlSIPDate_1" className="error"></div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">SIP Duration</label>
                                                            <select className="form-control lumsum_form-control" id="ddlSIPDuration_1"><option value="0">Perpetual</option><option value="120">10 Years</option><option value="60">5 Years</option><option value="48">4 Years</option><option value="36">3 Years</option><option value="24">2 Years</option><option value="12">1 Year</option></select>
                                                            <div id="errddlSIPDuration_1" className="error"></div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 mb-3">
                                                            <label className="select-label">SIP Amount</label>
                                                            <input type="text" name="Amount" id="txtLSAmount_1" className="form-control lumsum_form-control"/>
                                                            <span className="d-block">Minimum Investment Amount <span id="lblmininvestmentamt_1" className="font-weight-bold">1,000</span></span>
                                                            <div id="errtxtLSAmount_1" className="error"></div>
                                                        </div>
                                                        <div style={{display:'none'}} className="col-sm-12 col-md-4 mb-3" id="divGet_foliono1">
                                                            <label className="select-label">Folio No. (optional)</label>
                                                            <select name="ddFolioNo1" id="ddFolioNo1" className="form-control lumsum_form-control">
                                                                
                                                            <option value="0">--Select--</option></select>
                                                            <input type="hidden" id="hdnExistFolioNo1"/>
                                                            <input type="text" name="txtLSFolioNo1" id="txtLSFolioNo1"/>
                                                            <span id="error1">* Invalid Character</span>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <div className="checkbox_main">
                                                                <input id="chkSFOT_1" type="checkbox"/>
                                                                <label htmlFor="chkSFOT_1" className="text-gray">Place First Order Today</label> <span></span>
                                                            </div>
                                                            <p className="txtblack "><small>Start investment today! This will be one additional order over number of installments as per above inputs.</small></p>
                                                        </div>
                                                        <div className="col-12">
                                                            <ul className="cut_off_list mb-0 pb-0">
                                                                <li>
                                                                    (SIP Start Date &amp; End Date are considering Ledger as mode of payment and may change depending on other modes of payment.)
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{display:"none"}} className="col-sm-12 col-md-12 col-lg-4">
                                                    <div className="invest_right_navcalculate_box dvcart">
                                                        <div className="row">
                                                            <div className="col-sm-12  text-center nav_on">
                                                                <div className="bdr_bottom p-3">
                                                                    <label>NAV as on <span id="lblNAVOn_1">01 Feb 2022</span></label> <span id="lblNAV_1">98.69</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 p-3 text-center pt-4">
                                                                <label>Minimum Invest Amount <span className="rupee ">`</span></label><span id="lblmininvestmentamt_1">00.00</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>Nature </label><span id="lblnature_1">Growth</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>No. of installments </label><span id="lblinstallment_1">924</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>Start Date </label><span id="lblsipstartdate_1">05 Mar 2022</span>
                                                            </div>
                                                            <div className="col-6 col-sm-6 p-3 text-center">
                                                                <label>End Date </label><span id="lblsipenddate_1">05 Feb 2099</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group d-block mb-3">
                                        <button type="button" className="sipbtn lumsumBtn text-primary mt-0 add_more"> + Add More Funds</button>
                                        <button type="button" id="btn_Scart" className="sipbtn lumsumBtn text-primary mt-0 add_more">Go To Cart</button>
                                    </div>
                                    
                                    <div className="x_panel sip_btn text-center">
                                        <button type="button" id="btnAddToCartSIP" className="sipbtn lumsumBtn lumsumBtnConform btn-blue desk-btn  border-0 btn_tcenter">CONFIRM &amp; PROCEED</button>
                                    </div>
                                </div>

                            </div></>:<></>}

                            

                        </div>
                        

            
        </div>

    </div>

</div>

</section>
    </div>;

  }
}
export default withState( Lumsum_sip )

import React, { Component } from 'react'

 class FundScreenerSimilarFunds extends Component {
  render() {
    return (
      <div>

<section className="section">


<div className="container">

    <div className="row align-items-center" style={{padding: "2% 2% 1% 0.5%", marginBottom: "5%"}}>


        <div className="section-title similar-funds-sub" style={{width:"100%"}}>
            <h2>Similar Funds</h2>
            <p><a href="index.html">Invest4Edu</a> makes
                it easy to invest for your  education goals. 
                <br/>
                No complicated tasks. No gimmicks.</p>
        </div> 


        <section className="pills" style={{width: "100%"}}>

            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <div className="tab">
                            <button className="tablinks"
                            //  onclick="openCity(event, 'London')" id="defaultOpen"
                             ><span><i className="fa fa-chart-pie" style={{marginRight:"5%", fontSize: "20p"}}
                            aria-hidden="true"></i></span> HIGH PERFORMER
                            </button>
                            <button className="tablinks" 
                            // onclick="openCity(event, 'Paris')"
                            ><span><i className="fa fa-chart-line" style={{marginRight:"5%",fontSize: "20px"}}
                             aria-hidden="true"></i></span>
                                HIGH RANKING
                            </button>
                            <button className="tablinks" 
                            // onclick="openCity(event, 'Tokyo')"
                            ><span><i className="fa fa-bitbucket" style={{marginRight:"5%",fontSize: "20px"}}
                            aria-hidden="true"></i></span> HIGH
                                RETURN
                            </button>

                        </div>
                    </div>


                    <div className="col-md-9">
                        <div id="London" className="tabcontent">
                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        <div className="plan-image-box">
                                            {/* <img src="images/icici.svg"> */}
                                        </div>
                                        <div className="plan-body">
                                            <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"><i className="fa fa-chevron-down" aria-hidden="true"></i></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>

                                    </div>
                                </div>
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
                                <div className="col-md-12">
                                    <div id="demo" className="collapse text-center">
                                        <div className="demo-btn text-center">
                                            <button type="button" className="btn"
                                            //  onclick="smoothScroll(document.getElementById('lumpsum_sip'))" 
                                             >Lumpsum
                                            </button>
                                            <button type="button" 
                                            // onclick="smoothScroll(document.getElementById('lumpsum_sip'))" className="btn"
                                            >SIP
                                            </button>
                                            <button type="button" className="btn" data-toggle="modal" data-target="#redeemModal"
                                            >Redeem
                                            </button>
                                            <button type="button" className="btn" id="goToSwitch"
                                            >Switch
                                            </button>
                                            <button type="button" className="btn" data-toggle="modal" data-target="#swp">
                                                SWP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <!-------------------- swp modal body----------------> */}

                            {/* <!-- The Modal --> */}
                            <div className="modal fade" id="swp">
                                <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "600px"}}>


                                    <div className="modal-content" style={{padding: "10%"}}>


                                        <p>

                                            <button type="button" className="close" data-dismiss="modal" style={{position: "absolute",top: "12%",right: "3%"}}>×</button>

                                            Redemption of units through offline mode cannot be done online.
                                            Please write to info@invest4edu.com for further support on this.

                                        </p>

                                    </div>
                                </div>
                            </div>


                            {/* // <!------------------ swp modal ends--------------> */}

                            {/* // <!-------------------- redeem modal body----------------> */}

                            {/* <!-- The Modal --> */}
                            <div className="modal fade" id="redeemModal">
                                <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "600px"}}>


                                    <div className="modal-content" style={{padding: "10%"}}>
                                        <section className="signup-step-container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <div className="wizard">
                                                            <div className="wizard-inner">
                                                                <div className="connecting-line"></div>
                                                                <ul className="nav nav-tabs" role="tablist">
                                                                    <li role="presentation" className="active">
                                                                        <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span
                                                                                className="round-tab">1 </span></a>
                                                                    </li>
                                                                    <li role="presentation" className="disabled">
                                                                        <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab"
                                                                           aria-expanded="false"><span className="round-tab">2</span></a>
                                                                    </li>
                                                                    <li role="presentation" className="disabled">
                                                                        <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span
                                                                                className="round-tab">3</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <form role="form" action="index.html" className="login-box">
                                                                <div className="tab-content" id="main_form">
                                                                    <div className="tab-pane active" role="tabpanel" id="step1">
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
                                                                        <div className="row">
                                                                            <div className="col-md-12">
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
                                                                                    <input type="text" placeholder="Unit" className="form-control"/>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label>Amount <sup>*</sup></label>
                                                                                    <input type="text" placeholder="Enter Amount" className="form-control"/>
                                                                                </div>
                                                                            </div>
                                                                            <input type="checkbox" className="mt-3"/> <label className="check">Redeem All Available Units:
                                                                            2857783</label> <br/>
                                                                            <input type="checkbox" required/> <label className="check">I Confirm that this transaction is
                                                                            done
                                                                            purely at my sole discretion on my own.</label>

                                                                            <p className="note">Note: Amount is Indicative as per latest avilabel NAV. Redemption
                                                                                would be processed by unit only. <sup>*</sup></p>
                                                                        </form>
                                                                        <ul className="list-inline pull-right">
                                                                            <li>
                                                                                <button type="button" className="default-btn next-step">Continue to Redeem</button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="tab-pane" role="tabpanel" id="step2">
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
                                                                            <div className="col-md-12">
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
                                                                                    <input type="text" placeholder="Unit" className="form-control" value="24"/>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label>Amount <sup>*</sup></label>
                                                                                    <input type="text" placeholder="Enter Amount" className="form-control" value="35244"/>
                                                                                </div>
                                                                            </div>
                                                                            <input type="checkbox" className="mt-3"/> <label className="check">I Confirm that this
                                                                            transaction is done purely at my sole discretion on my own.</label>

                                                                            <p className="note">Note: Amount is Indicative as per latest avilabel NAV. Redemption
                                                                                would be processed by unit only. <sup>*</sup></p>
                                                                        </form>

                                                                        <ul className="list-inline pull-right">
                                                                            <li>
                                                                                <button type="button" className="default-btn prev-step">Back</button>
                                                                            </li>

                                                                            <li>
                                                                                <button type="button" className="default-btn next-step">Continue</button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="tab-pane" role="tabpanel" id="step4">
                                                                        <div className="complete">
                                                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                                            <div className="complete-body">
                                                                                <h1>Payment Complete</h1>
                                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                                    Lorem Ipsum has been the industry's standard dummy.</p>
                                                                                <h2>Order Number:</h2>
                                                                                <h3>23485648365</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="clearfix">
                                                                        </div>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                    </div>
                                </div>
                            </div>


                            {/* <!------------------ redeem modal ends--------------> */}


                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        {/* <img src="images/icici.svg"> */}
                                        <div className="plan-body">
                                           <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>

                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        {/* <img src="images/icici.svg"> */}
                                        <div className="plan-body">
                                           <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>

                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        {/* <img src="images/icici.svg"> */}
                                        <div className="plan-body">
                                           <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>

                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        {/* <img src="images/icici.svg"> */}
                                        <div className="plan-body">
                                           <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>

                            <div className="row pills-body">
                                <div className="col-md-7">
                                    <div className="plan">
                                        {/* <img src="images/icici.svg"> */}
                                        <div className="plan-body">
                                           <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICI Prudential Technology Direct Plan Growth</a> <span className="down-icon"  data-toggle="collapse" data-target="#demo"></span></h2>
                                            <p>Very High Risk <span>.</span> <span> Equity </span> <span>.</span> <span> 5 * </span></p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>

                        

                      
                    </div>

                </div>

            </div>

        </section>


     

    </div>


    


   

   </div>
</section>
      </div>
    )
  }
}

export default FundScreenerSimilarFunds
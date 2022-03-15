import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import { FaDownload, FaRupeeSign } from 'react-icons/fa'


 class PostInvestmentPortFolio extends Component {
  render() {
    return (
      <div>
 <section className='section'>
            <div className='container'>
            <div className="row">
                {/* <!-- Feature 02--> */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="content text-center mumBg post-mf-dashbd" style={{border: "none"}}>
                        <div className="app-feature text-center">
                            {/* <!-- Heading --> */}
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h3 className="mum-h3 holding-post-mf">HOLDINGS</h3>
                                <div><button type="button" id="PortfolioExcel-btn" className="btn btn-sm text-primary holding-mf-download"><i
                                            className="fa fa-download" aria-hidden="true"> <FaDownload/></i>Export to Excel</button> /
                                            <button type="button" id="PortfolioPDF-btn" className="btn btn-sm text-primary holding-mf-download"><i
                                            className="fa fa-download" aria-hidden="true"><FaDownload/></i>Export to PDF</button></div>
                            </div>
                            {/* <!-- Description --> */}
                            <Accordion defaultActiveKey="none">
                            <div className="table-wrap" style={{overflowX: "scroll"}} >
                                <table className="table myaccordion table-hover" id="accordion">
                                    <thead style={{background: "#8bc6f0"}}>
                                        <tr>
                                            <th>Scheme</th>
                                            <th>Folio</th>
                                            <th>Investment(<i className="fa fa-rupee-sign"><FaRupeeSign/></i>)</th>
                                            <th>Current Value(<i className="fa fa-rupee-sign"><FaRupeeSign/></i>)</th>
                                            <th>Div.Paid</th>
                                            <th>Div.ReInvest</th>
                                            <th>G/L Return(%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                   <Accordion.Item eventKey="0">
                                      <Accordion.Header>
                                        <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseOne" className="collapsed" >
                                             <th scope="row" className='holding-mf-fund'>Invest4Edu Equity Fund (G)</th>
                                            
                                            <td>7878746528</td>
                                            <td>81.00K</td>
                                            <td>1.09L</td>
                                            <td>Invest</td>
                                            <td>Edu</td>
                                            <td>21.08%</td>
                                        </tr>
                                        
                                        </Accordion.Header>
                                        <Accordion.Body>
                                  <tr id="collapseOne" className="acc" data-parent="#accordion">
                                            <td 
                                            colSpan={7}
                                             style={{padding: "0px"}}>
                                                <div className="app-feature text-center" style= {{background: "#aad2e9"}}>
                                                    <div className="demo-btn text-center">
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='lumpsum.html'" --> */}
                                                            Lumpsum
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='sip.html'" --> */}
                                                            SIP
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#redeemModal">
                                                            Redeem
                                                        </button>
                                                        <button type="button" className="btn goToSwitch" data-target="mutual-fund-switch.html" id="goToSwitch">
                                                            Switch
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#SWPModal">
                                                            SWP
                                                        </button>
                                                    </div>
                                                    {/* <!-- Heading --> */}
                                                    <div>
                                                        <h5 style={{color: "#646464"}}>Detail Transactions Report</h5>
                                                    </div>
                                                    {/* <!-- Description --> */}
                                                    <div className="table-wrap"
                                                        style={{overflowX: "scroll", margin: "0px 40px"}}>
                                                        <table className="table myaccordion3" id="accordion3">
                                                            <thead style={{background: "#8bc6f0"}}>
                                                                <tr>
                                                                    <th>Folio</th>
                                                                    <th>Date</th>
                                                                    <th>Order Type</th>
                                                                    <th>Nav</th>
                                                                    <th>Units</th>
                                                                    <th>Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.09</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.50</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>23.10</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.49</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <br />
                                                </div>
                                            </td>
                                        </tr> 
                                         </Accordion.Body>
                                    </Accordion.Item>
                                         
                                     <Accordion.Item eventKey="1">
                                         <Accordion.Header>  
                                            <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo" className="collapsed">
                                            <th scope="row" className='holding-mf-fund'>Invest4Edu Equity Fund (G)</th>
                                            <td>7878746528</td>
                                            <td>81.00K</td>
                                            <td>1.09L</td>
                                            <td>Invest</td>
                                            <td>Edu</td>
                                            <td>22.08%</td>
                                        </tr>
                                        </Accordion.Header>

                                        <Accordion.Body>

                                        
                                       <tr id="collapseTwo" className="acc" data-parent="#accordion">
                                            <td 
                                            colSpan={7}
                                            
                                             style={{padding: "0px"}}>
                                                <div className="app-feature text-center" style= {{background:"#aad2e9"}}>
                                                    <div className="demo-btn text-center">
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='lumpsum.html'" --> */}
                                                            Lumpsum
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='sip.html'" --> */}
                                                            SIP
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#redeemModal">
                                                            Redeem
                                                        </button>
                                                        <button type="button" className="btn goToSwitch" data-target="mutual-fund-switch.html" id="goToSwitch">
                                                            Switch
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#SWPModal">
                                                            SWP
                                                        </button>
                                                    </div>
                                                    {/* <!-- Heading --> */}
                                                    <div>
                                                        <h5 style={{color: "#646464"}}>Detail Transactions Report</h5>
                                                    </div>
                                                    {/* <!-- Description --> */}
                                                    <div className="table-wrap"
                                                        style={{overflowX: "scroll", margin: "0px 40px"}}>
                                                        <table className="table myaccordion3" id="accordion3">
                                                            <thead style={{background: "#8bc6f0"}}>
                                                                <tr>
                                                                    <th>Folio</th>
                                                                    <th>Date</th>
                                                                    <th>Order Type</th>
                                                                    <th>Nav</th>
                                                                    <th>Units</th>
                                                                    <th>Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.09</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.50</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row"className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>23.10</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.49</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <br />
                                                </div>
                                            </td>
                                        </tr>  
                                        </Accordion.Body>
                                     </Accordion.Item>
                                      <Accordion.Item eventKey="2">
                                         <Accordion.Header>   <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo" className="collapsed">
                                            <th scope="row" className='holding-mf-fund'>Invest4Edu Equity Fund (G)</th>
                                            <td>7878746528</td>
                                            <td>81.00K</td>
                                            <td>1.09L</td>
                                            <td>Invest</td>
                                            <td>Edu</td>
                                            <td>22.08%</td>
                                        </tr>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        
                                       <tr id="collapseTwo" className="acc" data-parent="#accordion">
                                            <td 
                                            colSpan={7}
                                            
                                             style={{padding: "0px"}}>
                                                <div className="app-feature text-center" style= {{background:"#aad2e9"}}>
                                                    <div className="demo-btn text-center">
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='lumpsum.html'" --> */}
                                                            Lumpsum
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='sip.html'" --> */}
                                                            SIP
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#redeemModal">
                                                            Redeem
                                                        </button>
                                                        <button type="button" className="btn goToSwitch" data-target="mutual-fund-switch.html" id="goToSwitch">
                                                            Switch
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#SWPModal">
                                                            SWP
                                                        </button>
                                                    </div>
                                                    {/* <!-- Heading --> */}
                                                    <div>
                                                        <h5 style={{color: "#646464"}}>Detail Transactions Report</h5>
                                                    </div>
                                                    {/* <!-- Description --> */}
                                                    <div className="table-wrap"
                                                        style={{overflowX: "scroll", margin: "0px 40px"}}>
                                                        <table className="table myaccordion3" id="accordion3">
                                                            <thead style={{background: "#8bc6f0"}}>
                                                                <tr>
                                                                    <th>Folio</th>
                                                                    <th>Date</th>
                                                                    <th>Order Type</th>
                                                                    <th>Nav</th>
                                                                    <th>Units</th>
                                                                    <th>Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.09</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.50</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row"className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>23.10</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.49</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <br />
                                                </div>
                                            </td>
                                        </tr>  
                                        </Accordion.Body>
                                        </Accordion.Item>
                                       
                                         <Accordion.Item eventKey="3">
                                         <Accordion.Header>   <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo" className="collapsed">
                                            <th scope="row" className='holding-mf-fund'>Invest4Edu Equity Fund (G)</th>
                                            <td>7878746528</td>
                                            <td>81.00K</td>
                                            <td>1.09L</td>
                                            <td>Invest</td>
                                            <td>Edu</td>
                                            <td>22.08%</td>
                                        </tr>
                                        </Accordion.Header>
                                       
                                        <Accordion.Body>
                                         <tr id="collapseTwo" className="acc" data-parent="#accordion">
                                            <td 
                                            colSpan={7}
                                            
                                             style={{padding: "0px"}}>
                                                <div className="app-feature text-center" style= {{background:"#aad2e9"}}>
                                                    <div className="demo-btn text-center">
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='lumpsum.html'" --> */}
                                                            Lumpsum
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#login-signup-form">
                                                            {/* <!-- onclick="location.href='sip.html'" --> */}
                                                            SIP
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#redeemModal">
                                                            Redeem
                                                        </button>
                                                        <button type="button" className="btn goToSwitch" data-target="mutual-fund-switch.html" id="goToSwitch">
                                                            Switch
                                                        </button>
                                                        <button type="button" className="btn" data-toggle="modal"
                                                            data-target="#SWPModal">
                                                            SWP
                                                        </button>
                                                    </div>
                                                    {/* <!-- Heading --> */}
                                                    <div>
                                                        <h5 style={{color: "#646464"}}>Detail Transactions Report</h5>
                                                    </div>
                                                    {/* <!-- Description --> */}
                                                    <div className="table-wrap"
                                                        style={{overflowX: "scroll", margin: "0px 40px"}}>
                                                        <table className="table myaccordion3" id="accordion3">
                                                            <thead style={{background: "#8bc6f0"}}>
                                                                <tr>
                                                                    <th>Folio</th>
                                                                    <th>Date</th>
                                                                    <th>Order Type</th>
                                                                    <th>Nav</th>
                                                                    <th>Units</th>
                                                                    <th>Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.09</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.50</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row"className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>23.10</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7878746528</td>
                                                                    <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                                                    <td>Invest</td>
                                                                    <td>21.49</td>
                                                                    <td>Edu</td>
                                                                    <td>21,080</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <br />
                                                </div>
                                            </td>
                                        </tr>  
                                        </Accordion.Body>
                                        </Accordion.Item>

                                       </tbody>
                                </table>
                               </div>
                            </Accordion>
                            <br />
                        </div>
                    </div>
                </div>

            </div>  

                
            </div>
         </section>




      
      </div>
    )
  }
}

export default PostInvestmentPortFolio
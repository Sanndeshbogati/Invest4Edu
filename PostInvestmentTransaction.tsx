import React, { Component } from 'react'

 class PostInvestmentTransaction extends Component {
  render() {
    return (
      <div>
        <section className="section">
        <div className="container">
        <div className="row">
                {/* <!-- Feature 03--> */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="content text-center mumBg post-mf-dashbd" style={{border: "none"}}>
                        <div className="app-feature text-center">
                            {/* <!-- Heading --> */}
                            <div className='post-transaction-main'>
                                <h3 className="mum-h3">Recent Transactions</h3>
                                <h4 className="mum-h4  transaction_mf_h4">Purchase / Redemption</h4>
                            </div>
                            {/* <!-- Description --> */}
                            <div className="table-wrap" 
                            style={{overflowX:"scroll"}}>
                        
                                <table className="table myaccordion2" id="accordion2">
                                    <thead style={{background: "#8bc6f0"}}>
                                        <tr>
                                            <th>Trade Date</th>
                                            <th>Scheme</th>
                                            <th>Folio</th>
                                            <th>TransType</th>
                                            <th>Nav</th>
                                            <th>Units</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                            <td>Invest4Edu Equity Fund (G)</td>
                                            <td>7878746528</td>
                                            <td>Invest</td>
                                            <td>21.09</td>
                                            <td>Edu</td>
                                            <td>21,080</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                            <td>Invest4Edu Equity Fund (G)</td>
                                            <td>7878746528</td>
                                            <td>Invest</td>
                                            <td>21.50</td>
                                            <td>Edu</td>
                                            <td>21,080</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                            <td>Invest4Edu Equity Fund (G)</td>
                                            <td>7878746528</td>
                                            <td>Invest</td>
                                            <td>23.10</td>
                                            <td>Edu</td>
                                            <td>21,080</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='holding-mf-fund'>28/02/22</th>
                                            <td>Invest4Edu Equity Fund (G)</td>
                                            <td>7878746528</td>
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
                    </div>
                </div>

            </div>



        </div>
       </section>
      </div>
    )
  }
}

export default PostInvestmentTransaction
import React, { Component } from 'react'
import { BiRupee } from 'react-icons/bi'
import { FaRupeeSign } from 'react-icons/fa'

class PostInvestmentTotalHolding extends Component {
  render() {
    return (
      <div>
           <section className="section">
        <div className="container">
        <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 order-0">
                    <div id="MFTotalHoldings" className="mf-cart-hold mf-cart-hold-table  post-mf-dashbd">
                        <ul>
                            <li className="head">Total Holdings</li>
                            <li><label>Investment (<span className="rupee d-inline-block"><i className="fa fa-rupee-sign"
                                            aria-hidden="true"><FaRupeeSign/></i></span>)</label> <span className="">81.00K</span></li>
                            <li><label>Current Value (<span className="rupee d-inline-block"><i className="fa fa-rupee-sign"
                                            aria-hidden="true"><FaRupeeSign/></i></span>)</label> <span className="">1.15L</span></li>
                            <li className="d-none d-lg-block"><label>Gain / Loss (<span className="rupee d-inline-block"><i
                                            className="fa fa-rupee-sign" aria-hidden="true"><FaRupeeSign/></i></span>)</label><span
                                  className="text-green">34.02K</span> </li>
                            <li><label>Gain / Loss(%)</label><span className="text-green positive">42.00%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
            </div>
            </section>
      </div>
    )
  }
}

export default PostInvestmentTotalHolding
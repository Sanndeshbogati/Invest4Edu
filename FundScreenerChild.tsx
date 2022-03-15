import React, { Component } from 'react'
import FundScreenerDirectGrowth from './FundScreenerDirectGrowth'
import "../components/css/fund_screener_pages.css"
import FundEveryMonths from './FundEveryMonths'
import FundScreenerSimilarFunds from './FundScreenerSimilarFunds'


 class FundScreenerChild extends Component {
  render() {
    return (
      <div>

          <FundScreenerDirectGrowth></FundScreenerDirectGrowth>
             {/* <FundEveryMonths/> */}
             <FundScreenerSimilarFunds />
      </div>
    )
  }
}

export default FundScreenerChild
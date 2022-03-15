import React, { Component } from 'react'
import PostInvestmentholding from './PostInvestmentholding'
import PostInvestmentPortFolio from './PostInvestmentPortFolio'
import PostInvestmentTotalHolding from './PostInvestmentTotalHolding'
import PostInvestmentTransaction from './PostInvestmentTransaction'
import "../components/css/postinvestment_mf_dashboard.css"

 class PostInvestment_MfDashboard extends Component {
  render() {
    return (
      <div>
          <PostInvestmentTotalHolding />
          <PostInvestmentPortFolio/>
          <PostInvestmentholding/>
          {/* <PostInvestmentTransaction/> */}

      </div>
    )
  }
}

export default PostInvestment_MfDashboard
import React, { Component } from 'react'
import iifllogo from '../images/iifl-logo.png'
import paragparikhlogo from "../images/parag-parikh-logo.png"
import shield from "../images/shield.png"
import "../components/css/cart.css"
import {IoMdTrash} from 'react-icons/io'
import {AiFillExclamationCircle, AiFillPlusCircle} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'



 class Cart extends Component {
  render() {
    return (
      <div>
  <section className="cart-main section">
	       <div className="container">
		<div className="row">
			<div className="col-md-8">
				<div className="cart-left">
					<h4>My Cart (2)</h4>
					<div className="cart-box">
						<div className="row">
							<div className="col-md-8">
								<div className="cart-box-left">
									<img className="image-gallery" src={iifllogo}/>
									<h4>IIFL Focused Equity Fund Direct Growth</h4>
								</div>
							</div>
							<div className="col-md-4 cart-box-right cart-shift-right">
								<i className="fa fa-trash">  <IoMdTrash/></i>
							</div>
						</div>
						{/* <!-- 2nd row --> */}
						<div className="row mt-3">
							<div className="col-md-8">
								<div className="cart-box-left">
									<h6>SIP date <span className="edit">1st <i className="fa fa-pencil-square-o">  <BsPencilSquare/></i></span>
                                         <span><i className="fa fa-exclamation-circle" title="Lorem Ipsum"> <AiFillExclamationCircle/></i></span></h6>
								</div>
							</div>
							<div className="col-md-4 cart-box-left cart-shift-right">
								<h6 className="cart-shift-righ">Amount <span>₹5,000</span></h6>
							</div>
						</div>
					</div>

					{/* <!-- 2nd cart box --> */}
					<div className="cart-box">
						<div className="row">
							<div className="col-md-8">
								<div className="cart-box-left">
							<img src={paragparikhlogo}/>
                            <h4>Parag Parikh Flexi Cap Fund Direct Growth</h4>
								</div>
							</div>
							<div className="col-md-4 cart-box-right cart-shift-right">
								<i className="fa fa-trash">  <IoMdTrash/></i>
							</div>
						</div>
						{/* <!-- 2nd row --> */}
						<div className="row mt-3">
							<div className="col-md-8">
								<div className="cart-box-left">
									<h6>SIP date <span className="edit">14st <i className="fa fa-pencil-square-o"> <BsPencilSquare/></i> </span>
                                     <span><i className="fa fa-exclamation-circle" title="Lorem Ipsum"><AiFillExclamationCircle/></i></span></h6>
								</div>
							</div>
							<div className="col-md-4 cart-box-left cart-shift-right ">
								<h6 className="pr-0">Amount <span>₹6,000</span></h6>
							</div>
						</div>
					</div>

					{/* <!-- more fund btn --> */}
					<div className="row">
						<div className="col-md-12">
							<div className="more-fund-btn mt-5">
								<a href="#"><span><i className=" carts-icone-pc"><AiFillPlusCircle/> </i></span> ADD MORE FUNDS</a>
							</div>
						</div>
					</div>

				</div>
			</div>


			<div className="col-md-4 mt-3">
				<div className="amount-payable">
					<h6>Amount payable now</h6>
					<h1>₹11,000</h1>
				 <img className="shield" src={shield}/>

					<p>100% safe and secure</p>
					<h5>By Continuing, you agree to <a href="#" className="term"> Term & Conditions</a></h5>
					<form className="balance">
						<input type="checkbox" name=""/> <span>Use Grow Balance</span>
						<h5 className="rate-amount">₹0.00</h5>
					</form>
					<a href="#" className="procced_pay">PROCEED TO PAY</a>
				</div>
			</div>


		</div>
	</div>
</section>

      </div>
    )
  }
}

export default Cart
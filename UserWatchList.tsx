import React, { Component } from 'react'
import graph from "../images/graph-m.png"
import ordermf from "../images/order-mf.png"
import "../components/css/user_watch_list.css"
import { FaBars, FaTrash } from 'react-icons/fa'
 class UserWatchList extends Component {
  render() {
    return (
      <div>
          <section className="groww-watchlist">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="container">
				{/* <!-- Nav tabs --> */}
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
					  <a className="nav-link active" data-toggle="tab" href="#home">Mutual Funds</a>
					</li>
					{/* <li className="nav-item">
					  <a className="nav-link" data-toggle="tab" href="#menu1">Fixed Deposits</a>
					</li> */}
				</ul>
				{/* <!-- Tab panes --> */}
			  <div className="tab-content">
					<div id="home" className="container tab-pane active">
                        <br/>
						<div className="row">
							<div className="col-md-9 user-list-watch-main">
								<div className="main-box">
									<div className="row">
										<div className="col-md-5">
											<div 	className="container">
											  <div className="dropdown">
												<a href="" className="dropdowntoggle" data-toggle="dropdown">
												  My Watchlist
												</a>
												<div className="dropdown-menu">
												  <h2>Select Watchlist</h2>
												  <div className="row">
													<div className="col-md-12 p-0">
														<div className="icons">
															<a href="#"><i className="fa fa-bookmark" aria-hidden="true"></i><span>My Watchlist</span> 
                                                            <br/>
                                                            <span className="items">5 Items</span></a>
														</div>
														<div className="icons">
															<a href="#"><i className="fa fa-plus-square-o" aria-hidden="true"></i><span className="watching-heading">Create New List</span></a>
														</div>
													</div>
												  </div>
												</div>
											  </div>
											</div>
											<div className="row">
												<div className="col-md-12">
													<div className="heading text-left">
														<h1 className="name">Name</h1>
													</div>
												</div>
											</div>

										</div>
										<div className="col-md-7">
											<form className="example">
											<input type="text" placeholder="Search & add stocks" className='search-user-watch' />
											</form>
											
											<div className="row">
												<div className="col-md-4 pr-0 price-low-high">
													<div className="heading">
														<h1>Market Price</h1>
													</div>
												</div>
												<div className="col-md-4 p-0 price-low-high">
													<div className="heading">
														<h1>52 Week Low</h1>
													</div>
												</div>
												<div className="col-md-4 price-low-high">
													<div className="heading">
												  <h1>52 Week High</h1>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="list-item">
												<div className="row">
													<div className="col-md-4">
														<div className="list-icons">
															<a href="#"><i className="fa fa-bars"> <FaBars/></i><span className="ff">Reliance Industries</span></a>
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-icons">
															<img src={graph}/>
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-text">
															<h2>₹2,464.00</h2>
															<p>51.40</p>
														</div>
													</div>
													<div className="col-md-4">
														<div className="list-text rates">
															<h2>₹1,830.00</h2>
															<h2 className="rate2">₹2,751.35</h2>
														</div>
														<div className="list-btn">
															<button className="b-btn">B</button>
															<button >S</button>
															<button><i className="fa fa-trash" aria-hidden="true"><FaTrash/></i></button>
														</div>
													</div>
													{/* <!-- <div className="col-md-2">
														<div className="list-text">
															<h2>₹2,751.35</h2>
														</div>
													</div> --> */}
												</div>
											</div>
										</div>

										{/* <!-- 2nd row --> */}
										<div className="col-md-12">
											<div className="list-item">
												<div className="row">
													<div className="col-md-4">
														<div className="list-icons">
															<a href="#"><i className="fa fa-bars" aria-hidden="true"><FaBars/></i> <span className="ff">Reliance Industries</span></a>
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-icons">
															<img src={graph}/>
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-text">
															<h2>₹2,464.00</h2>
															<p>51.40</p>
														</div>
													</div>
													<div className="col-md-4">
														<div className="list-text rates">
															<h2>₹1,830.00</h2>
															<h2 className="rate2">₹2,751.35</h2>
														</div>
														<div className="list-btn">
															<button className="b-btn">B</button>
															<button >S</button>
															<button><i className="fa fa-trash" aria-hidden="true"><FaTrash/></i></button>
														</div>
													</div>
													{/* <!-- <div className="col-md-2">
														<div className="list-text">
															<h2>₹2,751.35</h2>
														</div>
													</div> --> */}
												</div>
											</div>
										</div>

										{/* <!-- 3rd row --> */}
										<div className="col-md-12">
											<div className="list-item">
												<div className="row">
													<div className="col-md-4">
														<div className="list-icons">
															<a href="#"><i className=" fa fa-bars" aria-hidden="true"><FaBars/></i> <span className="ff">Reliance Industries</span></a>
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-icons">
                                                        <img src={graph}/>
                                                               
														</div>
													</div>
													<div className="col-md-2">
														<div className="list-text">
															<h2>₹2,464.00</h2>
															<p>51.40</p>
														</div>
													</div>
													<div className="col-md-4">
														<div className="list-text rates">
															<h2>₹1,830.00</h2>
															<h2 className="rate2">₹2,751.35</h2>
														</div>
														<div className="list-btn">
															<button className="b-btn">B</button>
															<button >S</button>
															<button><i className="fa fa-trash"  aria-hidden="true"><FaTrash/></i></button>
														</div>
													</div>
													{/* <!-- <div className="col-md-2">
														<div className="list-text">
															<h2>₹2,751.35</h2>
														</div>
													</div> --> */}
												</div>
											</div>
										</div>

									</div>
									
									
								</div>
							</div>
							
							<div className="col-md-3">
								<div className="invest">
									<img width="130" className="img-responsive" alt="Looking for Mutual Funds?" src={ordermf}/>
									<h1>Looking for Mutual Funds?</h1>
									<p>Create your demat account with us in 2 minutes</p>
									
									<div className="row">
										<div className="col-md-12">
											<div className="look-button" style={{marginTop:"15%"}}>
												<a href="#">UNLOCK NOW</a>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					
					</div>
                   {/* 					
					<div id="menu1" className="container tab-pane fade">
                        <br/>
						<div className="row mt-5">
							<div className="col-md-6">
								<div className="watchlist-img" style={{width:"370"}} >
									<img src="images/order-fd.png"/>
								</div>
							</div>
							
							<div className="col-md-6">
								<div className="watchlist-content">
									<h2>Not watching any fixed-deposits</h2>
									<p>Keep a watch and stay updated about 
                                        <br/>
                                        fixed-deposits of your interest</p>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="watchlist-content">
											<a href="#">EXPLORE FIXED DEPOSITS</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					
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

export default UserWatchList
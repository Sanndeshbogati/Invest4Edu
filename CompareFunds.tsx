import React, { Component } from 'react';
import "../component-css/mutualFundCategory.css";
import { Button, Col, Row } from "react-bootstrap";
import FAQ from './FAQ';
import { FiCheckSquare } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { RiGridFill } from "react-icons/ri"; 




class CompareFunds extends Component <any, any>{
	constructor(props:any){
		super(props);
		this.state = {
			basicActive:'tab1',
		
		};


	}




	handleClick() {
		// modify the state, this will automatically recall render() below.
		this.setState((prevState:any) => {
		  return { animate: !prevState.animate }
		});
	  }

	  handleBasicClick(value: string){
		if(value===this.state.basicActive)
		return		
		this.setState({basicActive:value});
	  };

  render() {
	// const animationClasses = (this.state.animate ? true: false);
	console.log(this.state.basicActive);
    return <div>
        <section className="section">
			<div className="cont1 container">
				<Row className="">
					<div className="section-title col-sm-8 m-auto">
						{/* <!-- Page Title --> */}
						<h1 id="theee">Compare Mutual Funds</h1>
						{/* <!-- Page Description --> */}
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, beatae atque dolorum impedit provident veritatis inventore similique deserunt suscipit quae.</p>
						<div>
						{/* <div style={{display : animationClasses ?'block':'none'}}>
          <a>Test</a>
        </div>

        <div>
          <Button title="Toggle Animation" onClick={this.handleClick}/>
        </div>	 */}
					</div>			
					</div>
				</Row>
			</div>
		</section>
		

	
	<div className="compare_table container">


		<div className='compare_table_search'>
		<table className="table compare-table table-bordered table-striped table-responsive">
							<tbody>
								<tr>


								<td id="td_Title_1">
									<span id="reset_1" className="button b-close reset"><span>×</span></span>
									<div id="div_Addscheme_1">
										<div className="input-group compare-search-form" id="div_SearchScheme_1">
											<input type="text" className="form-control txtScheme globalSearchValidation ui-autocomplete-input" placeholder="Type Fund name here" id="txt_SearchScheme_1" />
											<span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="ti-search"></i>
									
                                </button>
                            </span>
										</div>

									</div>
									<div id="div_Header_1">
										<input type="hidden" name="hdnSchemCode_1" value="" id="hdnSchemCode_1"/>
										<input type="hidden" name="hdnSchemPlan_1" value="" id="hdnSchemPlan_1"/>
										<input type="hidden" name="hdnSchemCode" value="" id="flag"/>
										<div className="ct-title dvSchemeName" id="div_Title_1"></div>
										<div className="ct-rate" id="div_Rate_1">Exp: <span id="lblExp1"></span>% | 1Y Rt:<span id="lbl1yrRt1"></span>%</div>
										<div id="">
											<input type="button" id="loginbtninvestment_1" className="btn btn-default smallgreybtnform btn-white btn-InvestScheme" value="Invest Now" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
											<input type="button" id="btnAddwatch_1" className="btn btn-watch-list white-btn" value="addwatchlist" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
										</div>

									</div>
								</td>

								<td id="td_Title_2">
									<span id="reset_2" className="button b-close reset"><span>×</span></span>
									<div id="div_Addscheme_2">
										<div className="input-group compare-search-form" id="div_SearchScheme_2">
											<input type="text" className="form-control txtScheme globalSearchValidation ui-autocomplete-input" placeholder="Type Fund name here" id="txt_SearchScheme_2" />
											<span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="ti-search"></i>
                                </button>
                            </span>
										</div>

									</div>
									<div id="div_Header_2">
										<input type="hidden" name="hdnSchemCode_2" value="" id="hdnSchemCode_2"/>
										<input type="hidden" name="hdnSchemPlan_2" value="" id="hdnSchemPlan_2"/>
										<div className="ct-title dvSchemeName" id="div_Title_2"></div>

										<div className="ct-rate" id="div_Rate_2">Exp: <span id="lblExp2"></span>% | 1Y Rt:<span id="lbl1yrRt2"></span>%</div>



										<div id="">
											<input type="button" id="loginbtninvestment_2" className="btn btn-default smallgreybtnform btn-white btn-InvestScheme" value="Invest Now" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
											<input type="button" id="btnAddwatch_2" className="btn btn-watch-list white-btn" value="addwatchlist" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
										</div>

									</div>
								</td>
								<td id="td_Title_3">
									<span id="reset_3" className="button b-close reset"><span>×</span></span>
									<div id="div_Addscheme_3">
										<div className="input-group compare-search-form" id="div_SearchScheme_3">
											<input type="text" className="form-control txtScheme globalSearchValidation ui-autocomplete-input" placeholder="Type Fund name here" id="txt_SearchScheme_3"/>
											<span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="ti-search"></i>
                                </button>
                            </span>
										</div>

									</div>
									<div id="div_Header_3">
										<input type="hidden" name="hdnSchemCode_3" value="" id="hdnSchemCode_3"/>
										<input type="hidden" name="hdnSchemPlan_3" value="" id="hdnSchemPlan_3"/>
										<div className="ct-title dvSchemeName" id="div_Title_3"></div>

										<div className="ct-rate" id="div_Rate_3">
											Exp: <span id="lblExp3"></span>% | 1Y Rt:
											<span id="lbl1yrRt3"></span>
											%
										</div>
										<div id="">
											<input type="button" id="loginbtninvestment_3" className="btn btn-default smallgreybtnform btn-white btn-InvestScheme" value="Invest Now" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
											<input type="button" id="btnAddwatch_3" className="btn btn-watch-list white-btn" value="addwatchlist" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
										</div>

									</div>
								</td>
								<td id="td_Title_4">
									<span id="reset_4" className="button b-close reset"><span>×</span></span>
									<div id="div_Addscheme_4">
										<div className="input-group compare-search-form" id="div_SearchScheme">
											<input type="text" className="form-control txtScheme globalSearchValidation ui-autocomplete-input" placeholder="Type Fund name here" id="txt_SearchScheme_4"/>
											<span className="input-group-btn">
                                <button className="btn" type="button">
                                    <i className="ti-search"></i>
                                </button>
                            </span>
										</div>

									</div>
									<div id="div_Header_4">
										<input type="hidden" name="hdnSchemCode_4" value="" id="hdnSchemCode_4"/>
										<input type="hidden" name="hdnSchemPlan_4" value="" id="hdnSchemPlan_4"/>
										<div className="ct-title dvSchemeName" id="div_Title_4"></div>

										<div className="ct-rate" id="div_Rate_4">
											Exp: <span id="lblExp4"></span>% | 1Y Rt:
											<span id="lbl1yrRt4"></span>
											%
										</div>
										<div id="">
											<input type="button" id="loginbtninvestment_4" className="btn btn-default smallgreybtnform btn-white btn-InvestScheme"  value="Invest Now" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
											<input type="button" id="btnAddwatch_4" className="btn btn-watch-list white-btn" value="addwatchlist" data-dismiss="modal" data-toggle="modal" data-target="#NOSingIN"/>
										</div>

									</div>
								</td>
							</tr>
							<tr id="trChart">

								<td colSpan={4} style={{display:'none'}}>
									<div id="divChartloading">
										<img className="imgNewsLoading" src="Images/loading.gif" alt="Loding...."/>
									</div>
									<div className="rel" id="divChartNavMovement">
										<div className="returns-filter returns-filter-2">
											<ul className="">
												<li>Returns:</li>
												<li><a className="aReturns">1 Yr</a></li>
												<li><a className="aReturns">3 Yrs</a></li>
												<li><a className="aReturns selected">5 Yrs</a></li>
											</ul>
										</div>
									
										<div id="dvChart" className="chartContainer2">
										</div>
									</div>
							
								</td>
							</tr>
							</tbody>
						</table>
						</div>

							<div>
								<div>
									<div className="compare_btn_tab">
										<div className="compare-list-inline-item">
											<button className={this.state.basicActive=="tab1"?"compare_btn btn b-nav-tab compare_btn_active":"compare_btn btn b-nav-tab"} data-tab="orange" onClick={() => this.handleBasicClick('tab1')}>
												<i className="ti-time" ></i>
												Overview
											</button>
										</div>
										<div className="compare-list-inline-item">
										<button id="btnHolding" className={this.state.basicActive=="tab2"?"compare_btn btn b-nav-tab compare_btn_active":"compare_btn btn b-nav-tab"} data-tab="green" onClick={() => this.handleBasicClick('tab2')}>
											<i className="ti-layout-grid3-alt"></i>
											Scheme Holding
										</button>
									</div>

										<div className="compare-list-inline-item">
											<button className={this.state.basicActive=="tab3"?"compare_btn btn b-nav-tab compare_btn_active":"compare_btn btn b-nav-tab"} data-tab="blue" onClick={() => this.handleBasicClick('tab3')}>
												<i className="ti-layout-media-right" ></i>
												Performance
											</button>
										</div>

									</div>
								</div>
							</div>
	<div>
		<div>
			{this.state.basicActive=='tab1'? 
		<>
			<div id="orange" className="b-tab">
				<table className="table table-bordered table-striped">

				<tbody><tr>
					<td>Scheme AUM</td>
					<td id="tdSchemeAUM_OV_1"></td>
					<td id="tdSchemeAUM_OV_2"></td>
					<td id="tdSchemeAUM_OV_3"></td>
					<td id="tdSchemeAUM_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Age</td>
					<td id="tdSchemeAge_OV_1"></td>
					<td id="tdSchemeAge_OV_2"></td>
					<td id="tdSchemeAge_OV_3"></td>
					<td id="tdSchemeAge_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Asset Type</td>
					<td id="tdSchemeAssetType_OV_1"></td>
					<td id="tdSchemeAssetType_OV_2"></td>
					<td id="tdSchemeAssetType_OV_3"></td>
					<td id="tdSchemeAssetType_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Category</td>
					<td id="tdSchemeCategory_OV_1"></td>
					<td id="tdSchemeCategory_OV_2"></td>
					<td id="tdSchemeCategory_OV_3"></td>
					<td id="tdSchemeCategory_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Horizon</td>
					<td id="tdSchemeHorizon_OV_1"></td>
					<td id="tdSchemeHorizon_OV_2"></td>
					<td id="tdSchemeHorizon_OV_3"></td>
					<td id="tdSchemeHorizon_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Nature</td>
					<td id="tdSchemeNature_OV_1"></td>
					<td id="tdSchemeNature_OV_2"></td>
					<td id="tdSchemeNature_OV_3"></td>
					<td id="tdSchemeNature_OV_4"></td>
				</tr>
				<tr>
					<td>Scheme Risk</td>
					<td><span className="mode-low" id="sapnSchemeRisk_OV_1"></span></td>
					<td><span className="high" id="sapnSchemeRisk_OV_2"></span></td>
					<td><span className="mode-low" id="sapnSchemeRisk_OV_3"></span></td>
					<td><span className="mode-low" id="sapnSchemeRisk_OV_4"></span></td>
				</tr>
				<tr>
					<td>Scheme NAV</td>
					<td id="tdSchemeNAV_OV_1"></td>
					<td id="tdSchemeNAV_OV_2"></td>
					<td id="tdSchemeNAV_OV_3"></td>
					<td id="tdSchemeNAV_OV_4"></td>
				</tr>
				<tr>
					<td>52 W High Low</td>
					<td id="td52WHighLow_OV_1"></td>
					<td id="td52WHighLow_OV_2"></td>
					<td id="td52WHighLow_OV_3"></td>
					<td id="td52WHighLow_OV_4"></td>
				</tr>
				<tr>
					<td>Benchmark index</td>
					<td id="tdBenchmarkindex_OV_1"></td>
					<td id="tdBenchmarkindex_OV_2"></td>
					<td id="tdBenchmarkindex_OV_3"></td>
					<td id="tdBenchmarkindex_OV_4"></td>
				</tr>
				<tr>
					<td>Fund Manager</td>
					<td id="tdFundManager_OV_1"></td>
					<td id="tdFundManager_OV_2"></td>
					<td id="tdFundManager_OV_3"></td>
					<td id="tdFundManager_OV_4"></td>
				</tr>
				<tr>
					<td>AMC</td>
					<td id="tdAMC_OV_1"></td>
					<td id="tdAMC_OV_2"></td>
					<td id="tdAMC_OV_3"></td>
					<td id="tdAMC_OV_4"></td>
				</tr>
				<tr>
					<td>Min. SIP/SWP Amount</td>
					<td id="tdMinSipAmt_OV_1"></td>
					<td id="tdMinSipAmt_OV_2"></td>
					<td id="tdMinSipAmt_OV_3"></td>
					<td id="tdMinSipAmt_OV_4"></td>
				</tr>
				<tr>
					<td>Min. Lumpsum Amount</td>
					<td id="tdMinLumpsumAmt_OV_1"></td>
					<td id="tdMinLumpsumAmt_OV_2"></td>
					<td id="tdMinLumpsumAmt_OV_3"></td>
					<td id="tdMinLumpsumAmt_OV_4"></td>
				</tr>
				<tr>
					<td>Min. Incremental SIP </td>
					<td id="tdIncrementalSipAmt_OV_1"></td>
					<td id="tdIncrementalSipAmt_OV_2"></td>
					<td id="tdIncrementalSipAmt_OV_3"></td>
					<td id="tdIncrementalSipAmt_OV_4"></td>
				</tr>
				<tr>
					<td>Min. Incremental Lumpsum </td>
					<td id="tdIncrementalAmt_OV_1"></td>
					<td id="tdIncrementalAmt_OV_2"></td>
					<td id="tdIncrementalAmt_OV_3"></td>
					<td id="tdIncrementalAmt_OV_4"></td>
				</tr>
				<tr>
					<td>SIP Dates</td>
					<td id="tdSipDates_OV_1"></td>
					<td id="tdSipDates_OV_2"></td>
					<td id="tdSipDates_OV_3"></td>
					<td id="tdSipDates_OV_4"></td>
				</tr>
				</tbody></table>

				</div>
			</> 
		: null}
			{this.state.basicActive=='tab2'? 
			<>
			<div id="green" className="b-tab active">
				<table className="table table-bordered table-striped">

					<tbody><tr>
						<td>Asset Allocation</td>
						<td>

							<div id="div_AssetChart_1" className="chart-wh"></div>
						</td>
						<td>

							<div id="div_AssetChart_2" className="chart-wh"></div>
						</td>
						<td>

							<div id="div_AssetChart_3" className="chart-wh"></div>
						</td>
						<td>
							<div id="div_AssetChart_4" className="chart-wh"></div>
						</td>
					</tr>
					<tr>
						<td id="">Sector Allocation</td>
						<td>
							<div className="progress">
							</div>
						</td>
						<td>
							<div className="progress">
							</div>
						</td>
						<td>
							<div className="progress">
							</div>
						</td>
						<td>
							<div className="progress">
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_1"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_1_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_1_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_1_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_1_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_1_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_1_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_1_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_1_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_2"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_2_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_2_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_2_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_2_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_2_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_2_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_2_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_2_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_3"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_3_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_3_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_3_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_3_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_3_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_3_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_3_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_3_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_4"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_4_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_4_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_4_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_4_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_4_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_4_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_4_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_4_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_5"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_5_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_5_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_5_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_5_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_5_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_5_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_5_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_5_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_6"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_6_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_6_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_6_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_6_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_6_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_6_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_6_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_6_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_7"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_7_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_7_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_7_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_7_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_7_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_7_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_7_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_7_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_8"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_8_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_8_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_8_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_8_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_8_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_8_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_8_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_8_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_9"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_9_1" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_9_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_9_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_9_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_9_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_9_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_9_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_9_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_10"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_10_1" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_10_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_10_2" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_10_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_10_3" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_10_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_10_4" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_10_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_11"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_11_1" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_11_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_11_2" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_11_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_11_3" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_11_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_11_4" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_11_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_12"></td>
						<td>
							<div className="progress">
								<div id="div_Sector_12_1" className="progress-bar pro-lightyellow" role="progressbar" >
									<span className="progress-percent" id="span_Sector_12_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_12_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_12_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_12_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_12_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_12_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_12_4"></span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td id="span_Sector_13">Misc</td>
						<td>
							<div className="progress">
								<div id="div_Sector_13_1" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_13_1"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_13_2" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_13_2"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_13_3" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_13_3"></span>
								</div>
							</div>
						</td>
						<td>
							<div className="progress">
								<div id="div_Sector_13_4" className="progress-bar pro-lightyellow" role="progressbar">
									<span className="progress-percent" id="span_Sector_13_4"></span>
								</div>
							</div>
						</td>
					</tr>
					</tbody>
					</table>
			</div>
			</>
			: null}
			
			{this.state.basicActive=='tab3'? 
			<>
			<div id="blue" className="b-tab">
			<table className="table table-bordered table-striped">
				<tbody><tr>
					<td id="td3Months_Preformance_">3 months</td>
					<td id="td3Months_Preformance_1"></td>
					<td id="td3Months_Preformance_2"></td>
					<td id="td3Months_Preformance_3"></td>
					<td id="td3Months_Preformance_4"></td>
				</tr>
				<tr>
					<td id="td6Months_Preformance_">6 months</td>
					<td id="td6Months_Preformance_1"></td>
					<td id="td6Months_Preformance_2"></td>
					<td id="td6Months_Preformance_3"></td>
					<td id="td6Months_Preformance_4"></td>
				</tr>
				<tr>
					<td id="td1Year_Preformance_">1 year</td>
					<td id="td1Year_Preformance_1"></td>
					<td id="td1Year_Preformance_2"></td>
					<td id="td1Year_Preformance_3"></td>
					<td id="td1Year_Preformance_4"></td>
				</tr>
				<tr>
					<td id="td3Year_Preformance_">3 years</td>
					<td id="td3Year_Preformance_1"></td>
					<td id="td3Year_Preformance_2"></td>
					<td id="td3Year_Preformance_3"></td>
					<td id="td3Year_Preformance_4"></td>
				</tr>
				<tr>
					<td id="td5Year_Preformance_">5 years</td>
					<td id="td5Year_Preformance_1"></td>
					<td id="td5Year_Preformance_2"></td>
					<td id="td5Year_Preformance_3"></td>
					<td id="td5Year_Preformance_4"></td>
				</tr>
				<tr>
					<td id="tdIllustration_Preformance_">Illustration</td>
					<td id="tdIllustration_Preformance_1">
						<div id="divIllustration_Preformance_1" className="high-chart chart-wh"></div>
					</td>
					<td id="tdIllustration_Preformance_2">
						<div id="divIllustration_Preformance_2" className="high-chart chart-wh"></div>
					</td>
					<td id="tdIllustration_Preformance_3">
						<div id="divIllustration_Preformance_3" className="high-chart chart-wh"></div>
					</td>
					<td id="tdIllustration_Preformance_4">
						<div id="divIllustration_Preformance_4" className="high-chart chart-wh"></div>
					</td>
				</tr>
				<tr>
					<td id="tdSchemeBeta_Preformance_">Scheme Beta</td>
					<td id="tdSchemeBeta_Preformance_1"></td>
					<td id="tdSchemeBeta_Preformance_2"></td>
					<td id="tdSchemeBeta_Preformance_3"></td>
					<td id="tdSchemeBeta_Preformance_4"></td>
				</tr>
				<tr>
					<td id="tdSchemeSharp_Preformance_">Scheme Sharpe</td>
					<td id="tdSchemeSharp_Preformance_1"></td>
					<td id="tdSchemeSharp_Preformance_2"></td>
					<td id="tdSchemeSharp_Preformance_3"></td>
					<td id="tdSchemeSharp_Preformance_4"></td>
				</tr>
				<tr>
					<td id="tdSchemeAlpha_Preformance_">Scheme Alpha</td>
					<td id="tdSchemeAlpha_Preformance_1"></td>
					<td id="tdSchemeAlpha_Preformance_2"></td>
					<td id="tdSchemeAlpha_Preformance_3"></td>
					<td id="tdSchemeAlpha_Preformance_4"></td>
				</tr>
				<tr>
					<td id="tdSchemeVolatility_Preformance_">Scheme volatility</td>
					<td id="tdSchemeVolatility_Preformance_1"></td>
					<td id="tdSchemeVolatility_Preformance_2"></td>
					<td id="tdSchemeVolatility_Preformance_3"></td>
					<td id="tdSchemeVolatility_Preformance_4"></td>
				</tr>
				</tbody></table>
			</div>
			</> 
			: null}
			
		</div>
		

	

		<div className="container">
		<div className="explore-fund">
			<div className="row">
				<div className="col-md-1"></div>
				<div className="paperless col-md-5">
					<ul>
						<li> <i className="ti-check-box"><FiCheckSquare/></i> Paperless A/C</li>
						<li> <i className="ti-check-box"><FiCheckSquare/></i> Trusted View</li>
						<li> <i className="ti-check-box"><FiCheckSquare/></i> List of analysis</li>
					</ul>
				</div>
				<div className="col-md-1"></div>
				<div className="d-explore col-md-5 align-items-center">
					<a href="" className="exlore_btn btn-main-md">Invest Now</a>
				</div>
			</div>
		</div>


		</div>
	</div>
	</div>
	{/* <FAQ></FAQ> */}
	</div>;
  }
}
export default CompareFunds
function e(e: any): React.MouseEventHandler<HTMLButtonElement> | undefined {
	throw new Error('Function not implemented.');
}

import React, { Component } from 'react'
import "../components/css/mf_basket_cart_order_books.css"
import { FaRupeeSign } from "react-icons/fa"

 class MfBasketCartOrderBook extends Component { 
  render() {
    return (
      <div>
          <section className="section mf-basket-order-book-main" style={{marginTop: "3%"}}>

<div className="container">
    
<div className="row align-items-center">
    <div className="col-md-12 text-center justify-content-center"
        style={{backgroundColor: "#eef6fe", borderRadius: "20px",padding: "3% 3% 0% 3%" }}>

        {/* <!--------------- content starts -----------------> */}

        <div className="dataTables_wrapper no-footer">
            <table id="SchemeComissionDetailsSIP"
                className="table table_Header nowrap table_Accordion dataTable no-footer dtr-column" style={{width: "100%"}}
                // style={{width: "100%",
                // //  cellPadding="0", cellspacing="0", role="grid"
                //  }}
                 >
                <thead style={{background: "#8bc6f0"}} className="mf-order-book-star">
                    <tr role="row">
                        {/* <!-- <th className="control sorting_disabled" rowspan="1" colspan="1" style="width: 0px; display: none;" aria-label="">
                    </th> --> */}
                        <th className="text-left max-desktop sorting_asc" data-priority="1" 
                        // tabindex="0"
                            aria-controls="SchemeComissionDetailsSIP" 
                            // rowspan="1" colspan="1"
                             aria-label="Scheme : activate to sort column descending"
                            aria-sort="ascending">
                            Scheme
                        </th>

                        <th className="text-center_order_book sorting"
                        //  tabIndex="0"
                            aria-controls="SchemeComissionDetailsSIP" 
                            // rowSpan="1" colspan="1"
                         
                            aria-label="SIP Duration: activate to sort column ascending">
                            SIP Duration
                        </th>
                        <th className="text-center_order_book sorting"
                        //  tabIndex="0"
                            aria-controls="SchemeComissionDetailsSIP"
                            //  rowspan="1" colspan="1"
                         aria-label="Start Date: activate to sort column ascending">
                            SIP Date
                        </th>
                        <th className="text-right_max-desktop sorting_disabled" data-priority="1"
                        //  rowspan="1"colspan="1" 
                              aria-label="Amount (Rupee)">
                            Amount
                             (  <i className="fa-rupee-sign" aria-hidden="true">
                                       <FaRupeeSign/></i>)
                             
                        </th>
                        <th className="text-center_order_book sorting"
                        //  tabindex="0"
                            aria-controls="SchemeComissionDetailsSIP"
                            //  rowspan="1" colspan="1"

                            aria-label="First Order Date: activate to sort column ascending">
                            Place First Order
                            <input type="checkbox" id="mf-fund" name="mf-fund" checked value="fundList" style={{marginLeft: "4px"}}/>
                        </th>
                        {/* <div className='filter-form-group'>
                                                    <input type="checkbox" className='fmf-unck'/> 
                                                    <span className='filter-span'>Aditya Birla Sun Life Mutual Fund </span> 
                                                </div> */}
                    </tr>
                </thead>
                <tbody>
                    <tr id="SIPCart_1" role="row" className="odd-book-order">
                        <td className="text-left sorting_1">
                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title=""
                                data-original-title="IIFL Focused Equity Fund (G)" className='text-left-order-book'>
                                Invest4Edu Equity Fund (G)
                            </a>
                        </td>

                        <td className="text-center_order_book">
                            <select name="form-control font-weight-bold" className=' font-weight-bold new-order-book' id='study_user'>
                                <option value="0" selected>Continue untill cancelled</option>
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                            </select>
                            </td>
                       
                        <td className="text-center_order_book start_date">
                            <select name="form-control select_only_date" className=' font-weight-bold new-order-book'
                                id="ddlSIPDates">
                                <option value="0" selected>Select SIP Date</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select></td>
                        <td className="text-right-basket-book">
                            10,000
                        </td>
                        <td className="text-center_order_book">
                            <input type="checkbox" id="mf-fund1" name="mf-fund1" checked value="fundList1"/>
                        </td>
                    </tr>
                    <tr id="SIPCart_2" role="row" className="odd-book-order">
                        <td className="text-left sorting_1 ">
                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title=""
                                data-original-title="IIFL Focused Equity Fund (G)" className='text-left-order-book' >
                                Invest4Edu Equity Fund (G)
                            </a>
                        </td>

                        <td className="text-center_order_book">
                            <select name="form-control font-weight-bold" className=' font-weight-bold new-order-book'>
                                <option value="0" selected>Continue untill cancelled</option>
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                            </select></td>
                        <td className="text-center_order_book start_date">
                            <select name="form-control " className=' font-weight-bold new-order-book'
                                id="ddlSIPDates">
                                <option value="0" selected>Select SIP Date</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select></td>
                        <td className="text-right">
                            10,000
                        </td>
                        <td className="text-center_order_book">
                            <input type="checkbox" id="mf-fund1" name="mf-fund1" checked value="fundList1"/>
                        </td>
                    </tr>
                    <tr id="SIPCart_3" role="row" className="odd-book-order " >
                        <td className="text-left sorting_1 extra-remove-line">
                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title=""
                                data-original-title="IIFL Focused Equity Fund (G)" className='text-left-order-book'>
                                Invest4Edu Equity Fund (G)
                            </a>
                        </td>

                        <td className="text-center_order_book">
                            <select name="form-control font-weight-bold" className=' font-weight-bold new-order-book'>
                                <option value="0" selected>Continue untill cancelled</option>
                                <option value="1">1 Year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                            </select></td>
                        <td className="text-center_order_book start_date">
                            <select name="form-control "className=' font-weight-bold new-order-book'
                                id="ddlSIPDates">
                                <option value="0" selected>Select SIP Date</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select></td>
                        <td className="text-right-basket-book">
                            10,000
                        </td>
                        <td className="text-center_order_book">
                            <input type="checkbox" id="mf-fund1" name="mf-fund1" checked value="fundList1"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="my-4  text-center_order_book">
            <button type="button" className="btn btn-blue-proceed mf-order-bookbtn" 
            // onClick=""
            > Confirm SIP</button>
        </div>
       
        {/* <!--------------- content ends --------------------> */}
    </div>
</div>
</div>

</section>
      </div>
    )
  }
}

export default MfBasketCartOrderBook
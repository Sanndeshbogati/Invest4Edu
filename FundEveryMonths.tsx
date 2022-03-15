import React, { Component } from 'react'
import graph from "../images/graph.png"

 class FundEveryMonths extends Component {
  render() {
    return (
      <div>
      <section className='section'>
     <div className='container'>
     <div className="row align-items-center"
      style={{padding: "3% 7% 3% 7%", marginBottom: "5%", justifyContent:"center"}}>


                                       <div className="graph-top">
                            <form>
                            <span className="">₹</span>
                            {/* <input type="text" value="1000"> invested in this fund every */}
                            <input type="text" value={1000} className=''/> 
                   <span className=''> invested in this fund every</span>
                    <select name="study_user" id="study_user" className="">
                       <option value="">month</option>
                       <option value="">date</option>
                       <option value="">years</option>
                     </select>
                     <input type="text" value={"36"}/> 
                   <span className=''>  months ago would now be)</span>
                   <br />
                   <span className="orange">53,190( XIRR 28.21% )</span> 
                    
                             </form>
                        </div>

                <div className="graph-image">
                   
                        <img src={graph} className="img-responsive img-fluid w-100" alt="" />
                </div>
                <table className="graph-table w-100"
                   style={{fontSize: '12px', marginLeft: '1.5%', textAlign: "center"}}>
                    <tbody>
                        <tr style={{background: "#e6f0f2"}}>
                        <th>CALENDER YEAR</th>
                        <th>2011</th>
                        <th>2012</th>
                        <th>2013</th>
                        <th>2014</th>
                        <th>2015</th>
                        <th>2016</th>
                        <th>2017</th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>2020</th>
                        <th>YTD</th>
                    </tr>
                    <tr>
                        <td>FUND</td>
                        <td>-22.55%</td>
                        <td>31.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>23.55%</td>
                        <td>42.55%</td>
                        <td>12.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                    </tr>
                    <tr>
                        <td>CATEGORY</td>
                        <td>-22.55%</td>
                        <td>31.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>23.55%</td>
                        <td>42.55%</td>
                        <td>12.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                    </tr>
                    <tr>
                        <td>S&amp;P BSE 100 INDIA TR INR</td>
                        <td>-22.55%</td>
                        <td>31.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>23.55%</td>
                        <td>42.55%</td>
                        <td>12.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                        <td>22.55%</td>
                    </tr>
                    </tbody></table>

            </div>
          </div>
    </section>


</div>
    )
  }
}

export default FundEveryMonths
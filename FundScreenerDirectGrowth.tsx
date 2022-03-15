import { any } from '@amcharts/amcharts5/.internal/core/util/Array'
import React, { Component } from 'react'
import { FaPlusSquare, FaShareAlt } from 'react-icons/fa'


 class FundScreenerDirectGrowth extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            basicActive:"lumpsum",
            
        };
      }

      handleBasicClick = (value: string) => {
        if (value ===  this.state.basicActive) {
          return;
        }
    
       this.setState({basicActive:value})
        
      };
    

    
  render() {
    return (
      <div>
       <section className='section'>
          <div className='container'>
          <div className="row align-items-center" style={{padding: "3% 7% 3% 7%", marginBottom:"5%"}}>


            <div className="col-md-7 col-xs-12 justify-content-center sa ndeshbobo" style={{backgroundColor:"#eef6fe", borderRadius: "20px", 
            
            paddingTop:"3%", paddingBottom:"5%"}}>


                <ul className="watchlist list-group-horizontal " style={{position: "relative", float:'right' , display:"flex"}}>

                    <li className="list-group-item" style={{display: "inline-block", backgroundColor: "#eef6fe", border: "none"}}>

                        <i className="fa fa-plus-square" style={{fontSize: "25px", color: "#6d6d6d"}} aria-hidden="true"> <FaPlusSquare/></i>

                    </li>


                    <li className="list-group-item" style={{display:"inlineBlock", backgroundColor: "#eef6fe", border: "none"}}>

                        <i className="fa fa-share-alt" style={{fontSize: "25px", color: "#6d6d6d"}} aria-hidden="true"><FaShareAlt/>
                         </i>

                    </li>

                </ul>


                <div className="col-auto" style={{marginTop: "10%"}}>
                <h2  className=" fund-full-screen" style={{fontSize: "20px", textAlign:"center", color: "#2e7eed",fontWeight: "bold",marginBottom: "5%"}}>ICICI Prudential Technology Direct Plan Growth</h2>

                    <table className="table table-responsive" style={{marginRight:"15%",textAlign:"center"}}>
                        <tbody>

                        <tr>
                            <td><strong>Category</strong></td>
                            <td>LARGE</td>
                        </tr>
                        <tr>
                            <td><strong>AMC</strong></td>
                            <td>ICICI Asset Management Company Ltd.</td>
                        </tr>
                        <tr>
                       <td>
                           <strong>Rating</strong></td>
                            <td>4-star</td>
                        </tr>
                        <tr>
                        <td><strong>Risk</strong></td>
                            <td>Very High</td>
                        </tr>
                        <tr>
                            <td><strong>NAV</strong></td>
                            <td>xyz on dd/mm/yy</td>
                        </tr>
                        <tr>
                        <td><strong>AUM</strong></td>
                        <td>xyz Cr.</td>
                       </tr>
                        <tr>
                        <td><strong>Fund Manager</strong></td>
                        <td>xxxxxxxxxx</td>
                        </tr>
                         <tr>
                        <td><strong>Benchmark</strong></td>
                        <td>xxxxxxxxxxx</td>
                        </tr>
                        <tr>
                        <td><strong>Launch Date</strong></td>
                        <td>xxxxxxxxxx</td>
                        </tr>
                       </tbody>
                       </table>
                      </div>
                      </div>

         
                   <div className="col-md-5 order-2 order-md-2 text-center mum1" id="lumpsum_sip">
                   <div className="growth-tabs growth-class-direct-fund" style={{padding: "2% 5%", borderRadius: "20px"}}>
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tab mumpar" role="tablist" style={{justifyContent: "center", marginTop: "5%"}}>

                        <li className="nav-item mumcom" style={{backgroundColor: "#eef6fe", borderRadius: "20px 0 0 20px", paddingLeft: "10%"}}>
                            
                            <a className={this.state.basicActive=="sip"?"nav-link active":"nav-link"} style={{fontWeight: "bold", color: "#2e7eed"}} onClick={()=> this.handleBasicClick("sip")} >LUMPSUM</a>
                        </li>

                        <li className="nav-item mumcom" style={{backgroundColor:"#eef6fe", borderRadius: "0 20px 20px 0", paddingRight:"10%",
                         paddingLeft:"10%", borderLeft: "2px solid #fff"}}>

                            <a className={this.state.basicActive=="lumpsum"?"nav-link active":"nav-link"} style={{fontWeight: "bold", color: "#2e7eed", backgroundColor:"#eef6fe"}} onClick= {()=> this.handleBasicClick("lumpsum")}>SIP</a>
                        </li>

                    </ul>

                    {/* <!-- Tab panes --> */}
                
                    <div className="tab-content" style={{textAlign:"left"}}>

                    {this.state.basicActive=="lumpsum"?<> <div id="home" className="container tab-pane active">
                          <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sip-amount-h4">
                                        <h4>SIP Amount</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sip-amount">
                                        <input type="number" placeholder="0"/>
                                        <span>₹</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sip-amount-h4">
                                        <h4>Monthly SIP Date</h4>
                                    </div>
                                </div>

                        
                                <div className="col-md-6">
                                    <div className="sip-amount">
                                        <input type="date" placeholder="0"/>

                                    </div>
                                </div>
                            </div>

                            <div className="instalment">
                                <p className='instalment-fund-screener'>Next SIP instalment on</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="add-to-cart">
                                            <a href="#">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="start-sip">
                                            <a href="#">START SIP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>:<></>}
                       
                        {this.state.basicActive=="sip"?<><div id="menu1" className="">
                          <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="sip-amount">
                                        <h4>Lumpsum Amount</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sip-amount">
                                        <input type="number" placeholder="0"/>
                                        <span>₹</span>
                                    </div>
                                </div>
                            </div>

                            <div className="instalment">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="add-to-cart">
                                            <a href="#">ADD TO CART</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="start-sip">
                                            <a href="#">INVEST</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>:<></>}
                         <div>
                         </div>

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

export default FundScreenerDirectGrowth






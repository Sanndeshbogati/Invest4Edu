import React, { Component } from 'react'
import "../components/css/investcalc.css"
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export class InvestCalc extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
          activeClasses:[false],
          animate:true,
          value:4000,
        };
        this.addActiveClass = this.addActiveClass.bind(this);
    }
    addActiveClass(index: any){
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
    }
  render() {
    return (
<div>
   <section className="edu-invest-planner" >

        <div className="container invst-planner-cont cont1">
         <div className="row invst-planner-wrapper" style={{justifyContent:" center"}}>

   {/* <!-------left column form ----------> */}
   <div className="col-md-6 col-lg-6 col-12">

       <h5 className="modal-title" id="exampleModalCenterTitle"
           style={{color: "#00305b", fontWeight:" bold", marginBottom: "10%" ,paddingBottom: "4%", textAlign: "center", marginTop:"5%"}}>
           Add details :
           </h5>
       <div className="row row-investcals-top">
           <div className="col-md-6 col-lg-6 col-12">
               <div className="form-group-invest-calc form-field-wrap">
                   <select name="study_user" id="study_user" className="form-control-invest-calc">
                       <option value="">Select user</option>
                       <option value="">Daughter</option>
                       <option value="">Son</option>
                       <option value="">Self</option>
                       <option value="">Spouse</option>
                       <option value="">Other</option>
                   </select>
               </div>
           </div>
           <div className="col-md-6 col-lg-6 col-12 call-down-cals ">
               <div className="form-group-invest-calc">
                   <input type="text" className="form-control-invest-calc " id="user_fullname" placeholder="Enter your fullname"/>
                   {/* <div className="field-placeholder"><span>Enter your fullname</span></div> */}
               </div>
           </div>
       </div>

       <div className="form-group-invest-calc form-field-wrap">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Date of birth</legend>
               <input type="date" className="form-control-invest-calc" value="2022-02-03" min="1950-01-01" max="2040-12-31"
                   style={{width:"50%"}}/>
           </fieldset>
       </div>
       <div className="row">
           <div className="col-md-6 col-lg-6 col-12">
               <div className="form-group-invest-calc">
                   <fieldset className="p-2 mr-auto">
                       <legend className="mumLabel" style={{fontSize: "14px"}}>Existing Investment for current Goal</legend>
                       <input type="text" className="form-control-invest-calc" id="amount" placeholder="" value="₹ 50,000"/>
                   </fieldset>
               </div>
           </div>
           <div className="col-md-6 col-lg-6 col-12">
               <div className="form-group-invest-calc">
                   <fieldset className="p-2 mr-auto">
                       <legend className="mumLabel" style={{fontSize: "14px"}}>Existing Investment growing at %</legend>
                       <input type="text" className="form-control-invest-calc" id="amount" placeholder="" value="3%"/>
                   </fieldset>
               </div>
           </div>
       </div>

   </div>
   {/* <!-------right column form ----------&gt; */}
   <div className="col-md-4 col-lg-4 col-12">


       <h5 className="modal-title" id="exampleModalCenterTitle"
           style={{color: "#00305b", fontWeight: "bold", marginBottom: "10%", textAlign: "center",marginTop: "6%"}}>
           Edit details :</h5>


       <div className="form-group-invest-calc">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Amount</legend>
               <input type="text" className="form-control-invest-calc" id="amount" placeholder="" value="₹ 50,00,000"/>
           </fieldset>
       </div>
       <div className="form-group-invest-calc">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Destination</legend>
               <select name="study_destination" id="study_destination" className="form-control-invest-calc">
                   <option value="">India</option>
                   <option value="" 
                   // selected=""
                   >Canada</option>
                   <option value="">UK</option>
                   <option value="">Australia</option>
                   <option value="">New zealand</option>
               </select>
           </fieldset>
       </div>
       <div className="form-group-invest-calc">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Education Level</legend>
               <select name="eduLevel" id="eduLevel" className="form-control-invest-calc">
                   <option value="">Graduation</option>
                   <option value="">PG</option>
                   <option value="" 
                   // selected=""
                   >Master</option>
                   <option value="">Doctoral</option>
               </select>
           </fieldset>
       </div>
       <div className="form-group-invest-calc">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Course of Interest</legend>
               <select name="courseInterest" id="courseInterest" className="form-control-invest-calc">
                   <option value="">Technology</option>
                   <option value="">Science</option>
                   <option value=""
                   //  selected=""
                    >Medical</option>
                   <option value="">Business</option>
                   <option value="">Finance</option>
               </select>
           </fieldset>
       </div>
       <div className="form-group-invest-calc">
           <fieldset className="p-2 mr-auto">
               <legend className="mumLabel">Planning to begin in</legend>
               <select name="planningYear" id="planningYear" className="form-control-invest-calc">
                   <option value="">2021</option>
                   <option value="">2022</option>
                   <option value=""
                   //  selected="" 
                   >2023</option>
                   <option value="">2024</option>
                   <option value="">2025</option>
               </select>
           </fieldset>
       </div>
   </div>
   <div className="text-center mt-4 mb-4 col-12">
       <button className="back-btn-planner btn" 
       // onClick="location.href='edu_abacus_result.html'"
       >Back</button>
       <button type="button"
       //  onClick="SaveGoal()"
         id="btnsavegoal"
           className="btn btn-planner-blue ml-2 invest-planner-next-form calc-btn-hmevt" onClick={()=>this.addActiveClass(0)}>Calulate</button>
   </div>
</div>

 {this.state.activeClasses[0]?    <div className="row sip-row-amt sip-dummy-use">
   <div className="col-12 col-lg-12">
       <div className="col-12 mt-4 mb-4 text-center">
           <label className="month-invest-need">Monthly Investment Needed(SIP)</label><sup>*</sup>
           <div className="month-invst-input">
           
               <i className="fa-rupee-sign" aria-hidden="true">
               <FaRupeeSign/>
               </i>
               <input type="text" value={this.state.value} onChange={(e)=> this.setState({value:e.target.value})}id="inputMonthlyGoal"/>
               <span className="input-label input-txt"></span>
           </div>
           <p className=" growing-note-calc" style={{textAlign: "center", fontSize:"12px", marginTop: "20px",fontWeight: "500"}}>Note:
               Assuming Investment growing at 10% - 12% CAGR. <sup>*</sup></p>
       </div>
       <div className="text-center mt-4 mb-4 col-12">

            {/* <button className="btn access-invest-skyblue"
               // onClick="location.href='mf-category-fund-list.html'"
                
                >Invest Your Own</button>  */}
             <Nav.Link as={Link} to="/Mf_basket_post_login" className="btn access-invest-skyblue">Invest Your Own</Nav.Link> 



           <button type="button"
           //  onClick="location.href='mf-baskets-post-login.html'" id=""
               className="btn access-invest-skyblue ml-2 invest-calc-btn2" >Invest-via Suggested Basket</button>

       </div>
   </div>
   </div>:<></>}     
 
     </div>
   </section>


     
 </div>
    )
  }
}

export default InvestCalc
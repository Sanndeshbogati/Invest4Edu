import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import "../components/css/mf_basket.css"
import minus from "../images/minus.png"
import {  BiSearch} from "react-icons/bi";
import {IoIosArrowDropdownCircle} from "react-icons/io";

export class Mf_basket_post_login extends Component <any, any> {

  constructor(props:any){
  super(props);
  this.state = {
    activeClasses:[false,false,false],
    activeClasses1:[true,true,true],
    animate:true,
    innerWidth:window.innerWidth,
    value:3000,
  };
  this.addActiveClass = this.addActiveClass.bind(this);
  this.addActiveClass1 = this.addActiveClass1.bind(this);

}
componentDidMount(){
  window.addEventListener("resize", this.resize.bind(this))
  this.resize()
  console.log(this.state.innerWidth);
}

  resize(){
    this.setState({innerWidth:window.innerWidth})
    {this.state.innerWidth>767?
      this.setState({activeClasses1:[true,true,true]})
      :
      this.setState({activeClasses1:[false,false,false]})
      }
  }

addActiveClass(index: any){
  const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
  // const activeClasses1 = activeClasses
  this.setState({activeClasses});
  console.log("Active class ",activeClasses);
  //  console.log(index.target.className);
  
} 

addActiveClass1(index: any){
  const activeClasses1 = [...this.state.activeClasses1.slice(0, index), !this.state.activeClasses1[index], this.state.activeClasses1.slice(index + 1)].flat();
  // const activeClasses1 = activeClasses
  this.setState({activeClasses1});
  console.log("Active class ",activeClasses1);
  //  console.log(index.target.className);
}



render() { 
    
    //   const addActiveClass=this.state.addActiveClass.slice();
    // const activeClasses = this.state.activeClasses.slice();
    return (
      <div>
        <div className="container">
        <Row className="mf-basket-post-login-row">
          <Col className="col-lg-4 col-md-4 MF_POST">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Omega</h2> 
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                <button className='main-basket-minus-btn' style={this.state.innerWidth>767?{display:"none"}:{display:"initial"}} onClick={()=> this.addActiveClass1(0)}>  
                <p className='basket-p-main'> < IoIosArrowDropdownCircle/></p>
                     </button>
            

                {this.state.activeClasses1[0]? <>
                <div className='sub-main-updown'>
                 <input type="number" className="list-fund-basket" value={this.state.value} onChange={(e)=> this.setState({value:e.target.value})} placeholder="enter amount"></input>
              
              
                 <h5 className='list-fund-basket-h5'>List of Funds</h5>
                 <div className='fund-list-tpopup  fundlist-popup-dummy'>
                
                   <div>
                     <div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     
                     <button className='add-funds-btn add-funds-btn-basket'onClick={() => this.addActiveClass(0)}
                     >Add</button>
                     </div>
                     
                    {this.state.activeClasses[0]?
                     <div className='search-box-fund search-box '>
                       <input type="text" placeholder="Search..." className='search-input-basket' />
                        <i className='search-icone-basket'> < BiSearch/></i>
                     </div> : <></>}
                     

                     <ul className='search-ul search-fund-ul search-dummy-ul  ' style={{display:"none"}}>
                       <li className='search-li'>fund list 1</li>
                       <li className='search-li'>fund list 2</li>
                       <li className='search-li'>fund list 3</li>
                     </ul>
                   </div>
                   </div>
            
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>1st year : xxxxxxxx</li>
                  <li>3rd year : xxxxxxxx</li>
                  <li>5th year : xxxxxxxx</li>
                </ul>
                
                
                <a
                  href=""
                  className="btn btn-rounded-icon btn-comm"
                  data-toggle="modal"
                  data-target="#login-form"
                >
                  <i className="ti-mouse"></i>
                  Invest now
                </a>
                </div>
                </>:<></> }
                
              </div>
            </div>
          </Col>

          <Col className="col-lg-4 col-md-4 MF_POST">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Sigma</h2> 
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                <button className='main-basket-minus-btn mf-basket-button-main-top' style={this.state.innerWidth>767?{display:"none"}:{display:"initial"}} onClick={()=> this.addActiveClass1(1)}>  
                            <p className='basket-p-main'> < IoIosArrowDropdownCircle/></p>
                     </button>
                
                
                   {this.state.activeClasses1[1]? <><div className='sub-main-updown'>
                <input type="number" className="list-fund-basket"  placeholder="enter amount"></input>
                
                

                 <h5 className='list-fund-basket-h5'>List of Funds</h5>
                 <div className='fund-list-tpopup  fundlist-popup-dummy'>
                
                   <div>
                     <div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     
                     <button className='add-funds-btn add-funds-btn-basket' onClick={() => this.addActiveClass(1)}>
                      Add</button>
                     </div>
                     
                     {this.state.activeClasses[1]?  <><div className='search-box-fund search-box'>
                       <input type="text" placeholder="Search..." className='search-input-basket' />
                        <i className='search-icone-basket'> < BiSearch/></i>
                     </div></>:<></>} 
                     

                     <ul className='search-ul search-fund-ul search-dummy-ul  ' style={{display:"none"}}>
                       <li className='search-li'>fund list 1</li>
                       <li className='search-li'>fund list 2</li>
                       <li className='search-li'>fund list 3</li>
                     </ul>
                   </div>
                   </div>
                   
                   
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>3rd year : xxxxxxxx</li>
                  <li>5th year : xxxxxxxx</li>
                  <li>7th year : xxxxxxxx</li>
                </ul>
            
                <a
                  href=""
                  className="btn btn-rounded-icon btn-comm"
                  data-toggle="modal"
                  data-target="#login-form"
                  >
                  <i className="ti-mouse"></i>
                  Invest now
                </a>
                </div></>:<></>}
                 
              </div>
            </div>
          </Col>
          {/* <!-- Feature 02--> */}
          <Col className="col-lg-4 col-md-4 MF_POST ">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Alpha</h2> 
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                
                <button className='main-basket-minus-btn' style={this.state.innerWidth>767? {display:"none"}:{display:"initial"}} onClick={()=> this.addActiveClass1(2)}>  
                <p className='basket-p-main'> < IoIosArrowDropdownCircle/></p>
                     </button>
            
               {this.state.activeClasses1[2]? <><div className='sub-main-updown'>  
                <input type="number" className="list-fund-basket"  placeholder="enter amount" ></input>
              
              
                 <h5 className='list-fund-basket-h5'>List of Funds</h5>
                 <div className='fund-list-tpopup  fundlist-popup-dummy'>
                
                   <div>
                     <div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     <div className='fund-list-amts'>list of fund : 
                     <span>10000</span>
                     <button className='basket-minus-btn'>
                     <img className="basket-minus-img" src={minus}/>
                     </button>
                     </div>
                     
                     <button className='add-funds-btn add-funds-btn-basket' onClick={() => this.addActiveClass(2)}>
                     
                       Add</button>
                     </div>
                     
                     {this.state.activeClasses[2]? <> <div className='search-box-fund search-box'>
                       <input type="text" placeholder="Search..." className='search-input-basket' />
                        <i className='search-icone-basket'> < BiSearch/></i>
                     </div></>:<></>    }
                    
                     <ul className='search-ul search-fund-ul search-dummy-ul' style={{display:"none"}}>
                       <li className='search-li'>fund list 1</li>
                       <li className='search-li'>fund list 2</li>
                       <li className='search-li'>fund list 3</li>
                     </ul>
                   </div>
                   </div>
            
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>5th year : xxxxxxxx</li>
                  <li>7th year : xxxxxxxx</li>
                  <li>10th year : xxxxxxxx</li>
                </ul>
                

                <a
                  href=""
                  className="ti btn btn-rounded-icon btn-comm"
                  data-toggle="modal"
                  data-target="#login-form"
                >
                  <i className="ti-mouse"></i>
                  Invest now
                </a>
                </div></>:<></>}
               
              </div>
            </div>
          </Col>
          {/* <!-- Feature 02--> */}
          
        </Row>
      </div>
      </div>
    )
  }
}

export default Mf_basket_post_login
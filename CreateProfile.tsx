import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../component-css/createprofile.css"
import {TiSocialGooglePlus} from "@react-icons/all-files/ti/TiSocialGooglePlus"
import {ImMobile} from "@react-icons/all-files/im/ImMobile"
import Products from "./Products";
import Footer from "./Footer";
import Copyright from "./Copyright";

class CreatePtofile extends Component<any,any> {
    constructor(props:any){
		super(props);
		this.state = {
      checkBox :false,
		};

	}

    checked(){
        this.setState((currentState:any) => ({
            checked: !currentState.checked, 
        }))
    }

  render() {
    return (
      <div>
        <section className="section-title">
          <div className="cont1 container">
            <Row className="align-items-center">
              <div className="User_profile_background col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}
                <h2>Create profile for you & your kid's future</h2>
                <h3>Did we mention, it's FREE to join?</h3>
                <a
                  type="submit"
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  <TiSocialGooglePlus style={{marginRight : "20px"}} size={30}/>
                  CONTINUE WITH GMAIL
                </a>
                <div className="OR">
                OR

                </div>
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <ImMobile/>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control textfield suresh_input"
                      id="user_mobile"
                      placeholder="Enter your Mobile No."
                    />
                  </div>

                  <div className="check-box">
                    <input
                      className="form-check-input"
                      type={"checkbox"}
                      id="switchChecked"
                      // onClick={() => this.checked()}
                    />
                    <label className="form-check-label" htmlFor="switchChecked">
                      Receive updates on WhatsApp
                    </label>
                  </div>

                  <a
                    type="submit"
                    href="verifyMobile"
                    className="btn btn-rounded-icon btn-eduabacus"
                  >
                    SUBMIT
                  </a>
                </form>
                <div className="tc">
                    <div>
                    <span>
                    By submitting, you agree to <a className="tc_link">Terms & Conditions</a>
                    </span>
                    </div>
                    <span>
                    Already a Member? <a className="CP_login_lonk">Login here</a>
                    </span>
                </div>

                {/* <!--------------- content ends --------------------> */}
              </div>
            </Row>
          </div>
        </section>
        <Products/>
        <Footer></Footer>
        <Copyright/>

      </div>
    );
  }
}
export default CreatePtofile;

import React, { Component } from "react";
import AppInfo from "./AppInfo";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Products from "./Products";

class VerifyMobile extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="cont1 container">
            <div className="row align-items-center">
              <div className="User_profile_background col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}

                <h2>Verify Mobile Number</h2>
                <h3>Enter your mobile number & sent OTP for verification</h3>

                <div className="verifyForm form-group d-flex justify-content-center field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Enter mobile number"
                    maxLength={10}
                  />

                  {/* <div className="field-placeholder">
                    <span>Enter mobile number</span>
                  </div> */}
                </div>

                <a
                  type="submit"
                  href="OTPverify"
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  SEND OTP
                </a>

                {/* <!--------------- content ends --------------------> */}
              </div>
            </div>
          </div>
        </section>
        <Products></Products>
        <Footer></Footer>
        <Copyright/>
      </div>
    );
  }
}
export default VerifyMobile;



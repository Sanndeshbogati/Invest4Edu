import React, { Component } from "react";
import "../component-css/createprofile.css"


class EmailOTP extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="cont1 container">
            <div className="row align-items-center">
              <div className="User_profile_background Email_verification col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}

                <h2>Verify email</h2>
                <h3>Enter your email & mailed OTP for verification</h3>
                <div className="form-group field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Enter E-mail "
                  />    
                </div>

                <a
                  type="submit"
                  href="EmailOtpverification"
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  SEND OTP
                </a>

                {/* <!--------------- content ends --------------------> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EmailOTP;

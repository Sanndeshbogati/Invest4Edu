import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class OTP_verification extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="cont1 container">
            <div className="row align-items-center">
              <div className="User_profile_background OTP_verification col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}

                <h2>Verify E-mail Address</h2>
                <h3>
                Enter the OTP sent to sureshkotak@gmail.com
                <div>
                  <a href=""> ( Change E-mail )</a>
                  
                </div>
                </h3>
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-6"
                >
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    maxLength={1}
                  />
                </div>

                <a
                  type="submit"
                  // href="StepForGoal"
                  href="VerifyBank"
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  VERIFY
                </a>
                <div className="resend_OTP">

                <span>
                  Didn't receive OTP? <a href="">Resend in 60 Seconds</a>
                </span>
                  <div>

                <span>
                  Already a Member? <a href="">Login here</a>
                </span>
                  </div>

                </div>
                {/* <!--------------- content ends --------------------> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default OTP_verification;

import React, { Component } from "react";
import "../component-css/createprofile.css"


export default class Verifybank extends Component {
  render() {
      return (
          <div>
        <section className="section">
          <div className="cont1 container">
            <div className="row align-items-center">
              <div className="User_profile_background col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}

                <h2>Verify Bank Account</h2>
                <h3>Verify your bank details here</h3>

          <div className="">
                <div className="verifyBank form-group field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Bank name"
                  />
                </div>

                <div className="verifyBank form-group field-wrapper">
                <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Bank Account No."
                  />
                </div>

                <div className="verifyBank form-group field-wrapper">
                  <input
                    type="password"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Re-confirm Bank Account No."
                  />
                </div>

                <div className="verifyBank form-group field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="IFSC Code"
                  />
                </div>
                
                <div className="verifyBank form-group field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="MICR Code"
                  />
                </div>
                <div className="verifyBank form-group field-wrapper">
                  <input
                    type="text"
                    className="form-control textfield"
                    id="user_fullname"
                    placeholder="Branch Address"
                  />
                </div>

</div>
                <a
                  type="submit"
                  href="UploadDocument"
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  SUBMIT
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

import React, { Component } from "react";
import "../component-css/createprofile.css"

class AddAadhar extends Component {
  render() {
    return (
      <div>
        <section className="section-title">
          <div className="cont1 container">
            <div className="row align-items-center">
              <div className="User_profile_background col-md-12 text-center justify-content-center">
                {/* <!--------------- content starts -----------------> */}

                <h2>Add Aadhaar e-Sign</h2>
                <h3>Review &amp; add e-signature here</h3>

                <div className="form-group">
                  <fieldset className="p-2 mr-auto">
                    <legend className="Review mumLabel">
                      Review your application here : <a className="link" href="">Click here</a>
                    </legend>

                    
                  </fieldset>
                </div>

                <div className="form-check form-switch mt-2 d-flex justify-content-center align-items-center">
                  <input className="" type={"checkbox"} id="switchChecked" />
                  <label className="addAdhar-form-check-lable form-check-label" htmlFor="switchChecked">
                    I authorize Invest4edu to complete....
                  </label>
                </div>
					<div>
                    <a className="link" href="">read more</a>

					</div>

                <a
                  type="submit"
                  href=""
                  className="btn btn-rounded-icon btn-eduabacus"
                >
                  Proceed to e-Sign
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

export default AddAadhar;

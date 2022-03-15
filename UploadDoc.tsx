import React, { Component } from "react";
import { Row } from "react-bootstrap";

class UploadDoc extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="cont1 container">
                        <div className="align-items-center">
                            <div className="User_profile_background uploadDoc col-md-12 text-center justify-content-center">
                                {/* <!--------------- content starts -----------------> */}

                                <h2>Upload document</h2>
                                <h3>Add needed documents scanned file(s) as jpg/pdf here</h3>

                                <form>
                                    <div className="uploadDoc form-group">
                                        <div>
                                            <label htmlFor="exampleFormControlFile1">
                                                Browse &amp; upload : Signature image
                                            </label>
                                        </div>
                                        <div className="uploadDoc-file">
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                id="exampleFormControlFile1"
                
                                            />
                                        </div>
                                    </div>
                                </form>

                                <a
                                    type="submit"
                                    href="addAadhar"
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
export default UploadDoc;

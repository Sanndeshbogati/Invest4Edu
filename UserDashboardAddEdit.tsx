import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { color } from "@amcharts/amcharts5";
import { any } from "@amcharts/amcharts5/.internal/core/util/Array";
import { Modal } from "react-bootstrap";

class UserDashboardAddEdit extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  isShowModal = (status: any) => {
    this.handleClose();
    this.setState({ showModal: status });
  };

  handleClose = () => {
    this.props.onPopupClose(false);
  };

  render() {
    console.log(this.state.showUserEduGoal);

    return (
      <div>
         {/* {this.state.showUserEduGoal?<>true</>:<>false</>} */}
        <Modal show={this.props.showModalPopup} onHide={this.handleClose} className="user-edit-popup">
          <div
            className="modal fade show"
            id="edu-goals-add-detail-form"
            aria-labelledby="exampleModalCenterTitle"
            style={{ display: "block" }}
            aria-modal="true"
            role="dialog"
          >
            <div className=" modal-dialog-centered add-edit-main" role="document">
              <div className="content1">
                <div className="modal-header main-nav-add-edit">
                  <h5 className="modal-title model-titl-row-edit" id="exampleModalCenterTitle">
                    Add education goal details
                  </h5>
                  <button
                    type="button"
                    className="close close-add-edit"
                    onClick={() => this.isShowModal(true)}
                    aria-label="Close"
                    style={{ color: "#00305b" }}   >
               
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body model-body-add-edit">
                  <form id="edu_abacus_form_parent">
                    <div className="row add_details">
                      {/* <!-------left column form ----------> */}

                      <div className="col-md-6 col-lg-6 col-12 edit-add-call">
                        <h5
                          className="modal-title add_model_title"
                          id="exampleModalCenterTitle"
                        >
                          Add details
                        </h5>

                        <div className='form-group-add-deatils'>
            <Form.Select className="ag-form-control" >
            <option>Select user</option>
            <option value="01">Daughter</option>
            <option value="02">Son</option>
            <option value="03">Self</option>
            <option value="04">Spouse</option>
            <option value="05">Other</option>
            </Form.Select>
            
            </div>

                        <div className="form-group-add-deatils">
                          <input
                            type="text"
                            className="User-db-input"
                            id="user_fullname"
                            placeholder="Enter Your Fullname "/>
                         
                        </div>

                        <div className="new-date-edit-add"> <p>Date of birth</p>
                          <input type="date" className="mumLabel-pan-lebel"/>
                        </div>
                      </div>

                      {/* <!----------right column form --------> */}

                      <div className="col-md-6 col-lg-6 col-12  user-edit-detals">
                        <h5
                          className="model-title-edit-add"
                          id="exampleModalCenterTitle"
                          style={{
                            color: "#00305b",
                            fontWeight: "bold",
                            marginBottom: "10%",
                            paddingBottom: "4%",
                            textAlign: "center",
                            marginTop: "5%",
                          }}
                        >
                          Edit details :
                        </h5>

                        <div className="form-group-edit-details-1">
                          <fieldset className="p-2 mr-auto edit-p-3-auto-sec">
                            <legend className="mumLabel edit-auto">Amount</legend>

                            <input
                              type="text"
                              className="edit-form-control"
                              id="amount"
                              placeholder=""
                              value="₹ 50,00,000"
                            />
                          </fieldset>
                        </div>

                        <div className='form-group-edit-details-2'>
                              <fieldset className='edit-auto-dest'>
                              <legend className='edit-auto'>Destination</legend>
                              <Form.Select className="destination-control ag-form-control" aria-label="Default select example" >
                              <option>canada</option>
                              <option value="01">India</option>
                              <option value="02">Canada</option>
                              <option value="03">UK</option>
                              <option value="04">Austrila</option>
                              <option value="05">New Zealand</option>
                              </Form.Select>
                              </fieldset>
                              </div>

                        <div className="form-group-edit-details-3">
                          <fieldset className="p-2 mr-auto edit-p-3-auto">
                            <legend className="mumLabel edit-auto ">
                              Planning to begin in
                            </legend>

                            <Form.Select className="ag-form-control" aria-label="Default select example" >
                           
                              <option value="">2021</option>
                              <option value="">2022</option>
                              <option value="">2023</option>
                              <option value="">2024</option>
                              <option value="">2025</option>
                              </Form.Select>
                          </fieldset>
                        </div>
                      </div>
                    </div>
 



                    {/* <!-------row ends here -------> */}

                    <div className="form-button add-edit-main-form-button">
                      <a
                        type="submit"
                        href="edu_abacus_result.html"
                        className="btn btn-rounded-icon edit-add-form-butto"
                        style={{
                          border: "1px solid #00305b",
                          padding: "13px 50px",
                          borderRadius: "100px",
                          marginTop: "10%",
                          color: "#00305b",
                        }}
                      >
                        <i className="ti-new-window add-edit-icone">  <MdOpenInNew/>    </i>
                                        UPDATE DETAILS{" "}
                      </a>
                    </div>

                    <div
                      className="form-group form-group-edit-details"
                      style={{
                        textAlign: "center",
                        marginTop: "5%",
                        color: "#00305b",
                      }}
                    >
                      <span>
                        <a href="#">Need help?</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default UserDashboardAddEdit;

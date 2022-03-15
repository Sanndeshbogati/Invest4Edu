import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";

// import { BsFillMouseFill  } from "@react-icons/all-files/fa/BsFillMouseFill";
class Compare_mf extends Component {
  render() {
    return (
      <div>
        <section className="compare-mf section page-title">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 m-auto">
                {/* <!-- Page Title --> */}
                <h1>Still confused on selection ?</h1>
                {/* <!-- Page Description --> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Unde, beatae atque dolorum impedit provident veritatis
                  inventore similique deserunt suscipit quae.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="compare_funds_search_div col-lg-12 col-md-12 main_section">
          <BiSearchAlt className="compare_search"></BiSearchAlt>
          <input
            type="text"
            placeholder="Search Mutual Fund"
            className="search_mfund"
            />
        </div>

        <div className="compare container">
          <Row className="compare_funds_grp">
            <div className="compare_funds col-md-6">
              <p>COMPARE FUNDS - TO FINALIZE YOUR CHOICE</p>
            </div>

            <div className="compare_funds col-md-6">
              <a
                href="compare-funds.html"
                className="btn btn-rounded-icon btn-comm"
                >
                {/* <BsFillMouseFill/> */}
                COMPARE FUNDS NOW
              </a>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
export default Compare_mf;

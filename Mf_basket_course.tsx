import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Mf_basket_course extends Component {
  render() {
    return (
      <div className="container">
        <Row className="">
          <Col className="col-lg-4 col-md-4">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Omega</h2> <br />
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                <br />
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>1st year : xxxxxxxx</li>
                  <li>3rd year : xxxxxxxx</li>
                  <li>5th year : xxxxxxxx</li>
                </ul>
                <br />
                <br />
                <h5>Reason of choosing</h5>
                <ul>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxxxx</li>
                </ul>
                <br />
                <br />
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
            </div>
          </Col>

          <div className="col-lg-4 col-md-4">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Sigma</h2> <br />
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                <br />
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>3rd year : xxxxxxxx</li>
                  <li>5th year : xxxxxxxx</li>
                  <li>7th year : xxxxxxxx</li>
                </ul>
                <br />
                <br />
                <h5>Reason of choosing</h5>
                <ul>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxxxx</li>
                </ul>
                <br />
                <br />
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
            </div>
          </div>
          {/* <!-- Feature 02--> */}
          <div className="col-lg-4 col-md-4">
            <div className="content text-center">
              <div className="app-feature text-center">
                {/* <!-- Heading --> */}
                <h2>Edu Alpha</h2> <br />
                {/* <!-- Description --> */}
                <p>
                  Pellentesque in ipsum id orci porta dapibus. Nulla porttitor
                  accumsan tincidunt. Nulla porttitor accumsan tincidunt.
                </p>
                <br />
                <h5>Avg. Basket Return</h5>
                <ul>
                  <li>5th year : xxxxxxxx</li>
                  <li>7th year : xxxxxxxx</li>
                  <li>10th year : xxxxxxxx</li>
                </ul>
                <br />
                <br />
                <h5>Reason of choosing</h5>
                <ul>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxxxx</li>
                  <li>xxxx xxxxxx123</li>
                </ul>
                <br />
                <a
                  href=""
                  className="ti btn btn-rounded-icon btn-comm"
                  data-toggle="modal"
                  data-target="#login-form"
                >
                  <i className="ti-mouse"></i>
                  Invest now
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Feature 02--> */}
        </Row>
      </div>
    );
  }
}

export default Mf_basket_course;



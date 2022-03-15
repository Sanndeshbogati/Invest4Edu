import { Switch } from "@mui/material";
import React from "react";
import { Accordion, Col, Nav, Row, Tab } from "react-bootstrap";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Redeem_popup from "./Redeem_popup";


export default function MutualFund() {
  return (
    <section>
      <div className="container">

 
      <Tab.Container id="left-tabs-example" defaultActiveKey="one">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="one">
                  TAX SAVING 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="two">
                  SECTORIAL 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="three">
                HIGH RANKING
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="four">
                  HIGH PERFORMANCE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="five">
                  BATTER THEN FDs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-button" eventKey="six">
                  HIGH ALPHA
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="one">
                <div id="London" className="tabcontent">
                  <Tab.Content>
                    <Tab.Pane eventKey="first"></Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                  </Tab.Content>

                  <Accordion>
                      
  <Accordion.Item eventKey="0">
    <Accordion.Header>
        <Col className="col-md-7">
                <div className="plan">
                    <img src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1" width={15}/>
                  <div className="plan-body-heading">
                    <h2 className="mflist-wrapper"><a className="i4e" href="fund-screener-child-page.html">ICICIOOO Prudential Technology Direct Plan Growth <BsBoxArrowInUpRight/></a>
                    <span className="down-icon" data-toggle="collapse" data-target="#demo">
                      </span></h2>
                      <p>Very High Risk <span>|</span> <span> Equity </span>  <span>|</span> <span> 5 * </span></p>
                    <div className="container">
                    </div>
                  </div>

                </div>
          </Col>
        <div className="col-md-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="plan-body">
                      <h2>0.39%</h2>
                      <p>1Y</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan-body">
                      <h2>97.12%</h2>
                      <p>3Y</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan-body">
                      <h2>44.78%</h2>
                      <p>5Y</p>
                    </div>
                  </div>
                </div>
          </div>
     
    </Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1"> 
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
            </Accordion>

                  <div className="row pills-body">
                    <Col className="col-md-7">
                      <div className="plan">
                        <img
                          src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1"
                          width={15}
                        />
                        <div className="plan-body">
                          <h2 className="mflist-wrapper">
                            <a
                              className="i4e"
                              href="fund-screener-child-page.html"
                            >
                              ICICIOOO Prudential Technology Direct Plan Growth
                            </a>
                            <span
                              className="down-icon"
                              data-toggle="collapse"
                              data-target="#demo"
                            >
                              {/*  */}
                            </span>
                          </h2>
                          <p>
                            Very High Risk <span>|</span> <span> Equity </span>{" "}
                            <span>|</span> <span> 5 * </span>
                          </p>
                          <div className="container"></div>
                        </div>
                      </div>
                    </Col>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>0.39%</h2>
                            <p>1Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>97.12%</h2>
                            <p>3Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>44.78%</h2>
                            <p>5Y</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="two">
              <div className="row pills-body">
                    <Col className="col-md-7">
                      <div className="plan">
                        <img
                          src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1"
                          width={15}
                        />
                        <div className="plan-body">
                          <h2 className="mflist-wrapper">
                            <a
                              className="i4e"
                              href="fund-screener-child-page.html"
                            >
                              ICICIOOO Prudential Technology Direct Plan Growth
                            </a>
                            <span
                              className="down-icon"
                              data-toggle="collapse"
                              data-target="#demo"
                            >
                              {/*  */}
                            </span>
                          </h2>
                          <p>
                            Very High Risk <span>|</span> <span> Equity </span>{" "}
                            <span>|</span> <span> 5 * </span>
                          </p>
                          <div className="container"></div>
                        </div>
                      </div>
                    </Col>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>0.39%</h2>
                            <p>1Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>97.12%</h2>
                            <p>3Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>44.78%</h2>
                            <p>5Y</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="three">
              <div className="row pills-body">
                    <Col className="col-md-7">
                      <div className="plan">
                        <img
                          src="https://th.bing.com/th/id/OIP.2rE2w0P_As2KSxu3VT2bowHaIQ?pid=ImgDet&rs=1"
                          width={15}
                        />
                        <div className="plan-body">
                          <h2 className="mflist-wrapper">
                            <a
                              className="i4e"
                              href="fund-screener-child-page.html"
                            >
                              ICICIOOO Prudential Technology Direct Plan Growth
                            </a>
                            <span
                              className="down-icon"
                              data-toggle="collapse"
                              data-target="#demo"
                            >
                              {/*  */}
                            </span>
                          </h2>
                          <p>
                            Very High Risk <span>|</span> <span> Equity </span>{" "}
                            <span>|</span> <span> 5 * </span>
                          </p>
                          <div className="container"></div>
                        </div>
                      </div>
                    </Col>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>0.39%</h2>
                            <p>1Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>97.12%</h2>
                            <p>3Y</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="plan-body text-center">
                            <h2>44.78%</h2>
                            <p>5Y</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </section>
  );
}

import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Community extends Component {
  render() {
    return <div className='container'>
                <Col className="col-12">
                            {/* <!-- Call to action Community --> */}
                            <div className="cta-community shadow">
                                <Row className="align-items-center">
                                    <Col className="col-lg-9 text-center text-lg-left font-weight-light">
                                        <div className="community_content">
                                            {/* <!-- Title --> */}
                                            <h2 className='community_heading'>Ready To Join Our Community?</h2>
                                            {/* <!-- Description --> */}
                                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. </p>
                                        </div>
                                    </Col>
                                    <Col className="col-lg-3 text-center text-lg-right mt-4 mt-lg-0">
                                        <div className="community_action-button">
                                            {/* <!-- Call Button --> */}
                                            <a href="contact.html" className="community_btn btn-main-sm text-white">JOIN NOW</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
    </div>;
  }
}

export default Community
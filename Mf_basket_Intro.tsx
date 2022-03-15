import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Mf_basket_Intro extends Component {
  render() {
    return <div>
        <section className="compare-mf mf_section page-title">
			<div className="container">
				<Row className="">
					<Col className="compare-mf mf_section__h1 col-sm-8 m-auto">
						{/* <!-- Page Title --> */}
						<h1>Mutual Fund Baskets</h1>
						{/* <!-- Page Description --> */}
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, beatae atque dolorum impedit provident veritatis inventore similique deserunt suscipit quae.</p>
					</Col>
				</Row>
			</div>
		</section>
    </div>;
  }
}

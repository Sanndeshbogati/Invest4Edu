import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import blogImg  from "../images/blog-1.jpg";
import UserAvatar from "./UserAvatar";
import profileImage from '../images/testimonial/feature-testimonial-thumb.jpg';
import BlogMainContains from "./BlogMainContains"

class BlogIntro extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
        <div>
            <div className='Blog_intro'>
                <div className="container">
                    <Row className="">
                        <Col className="Blog_intro col-sm-8 m-auto">
                            {/* <!-- Page Title --> */}
                            <h1>Blog</h1>
                            {/* <!-- Page Description --> */}
                            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
                        </Col>
                    </Row>
                </div>
            </div> 

        <div className=" container">
            <Row className="">
                <Col className="col-md-12">
                    <article className="blog_container featured">
                        {/* <!-- Image --> */}
                        <div className="Blog_info_image">
                            <a href="blog-single-1.html"><img className="img-fluid" src={blogImg} alt="featured-article"/></a>
                        </div>
                        {/* <!-- written-content --> */}
                        <div className="Blog_intro_content">
                            {/* <!-- Post Title --> */}
                            <h2><a href="blog-single-1.html">Thinking of IITs for your child ?</a></h2>
                            {/* <!-- Tags --> */}
                            <ul className="list-inline post-tag">
                                <UserAvatar src={profileImage} designation="Rozy Efzal September 26, 2021 &amp; CEO"></UserAvatar>
                            </ul>
                            {/* <!-- Post Body --> */}
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed,convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis</p>
                            <a className="blog_intro_btn btn btn-main-sm" href="blog-single-1.html">READ MORE</a>
                        </div>
                    </article>
                </Col>
            </Row>
        </div>
        
        </div>
        );
    }
}


export default BlogIntro
import React, { Component } from 'react';
import post_01 from "../images/blog/post-01.jpg";
import post_02 from "../images/blog/post-02.jpg";
import post_03 from "../images/blog/post-03.jpg";
import post_04 from "../images/blog/post-body-image.jpg";
import post_05 from "../images/blog/single-blog-feature-image.jpg";
import UserAvatar from "./UserAvatar";
import profileImage from '../images/testimonial/feature-testimonial-thumb.jpg';
import { Col, Row } from 'react-bootstrap';
import Community from './Community';
import AppInfo from './AppInfo';
import Footer from './Footer';
import BlogPost from './BlogPost';

class BlogMainContains extends Component {
  render() {
    return(
        <div>    
            <div className="BlogMainContains container">
                <Row className="">
                    <Col className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_01} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                            <ul className="list-inline post-tag">
                                <UserAvatar src={profileImage} designation="Rozy Efzal  &amp; CEO"></UserAvatar> <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </Col>
                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_02} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                                <ul className="list-inline post-tag">
                                <UserAvatar src={profileImage} designation="Rozy Efzal &amp; CEO"></UserAvatar>                                    <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_03} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                                <ul className="list-inline post-tag">
                                <UserAvatar src={profileImage} designation="Rozy Efzal &amp; CEO"></UserAvatar>
                                    <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_01} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                                <ul className="list-inline post-tag">
                                    <UserAvatar src={profileImage} designation="Rozy Efzal &amp; CEO"></UserAvatar>
                                    <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_02} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                                <ul className="list-inline post-tag">
                                    <UserAvatar src={profileImage} designation="Rozy Efzal &amp; CEO"></UserAvatar>
                                    <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/* <!-- Post --> */}
                        <article className="post-sm">
                            {/* <!-- Post Image --> */}
                            <div className="post-thumb">
                                <a href="blog-single-1.html"><img className="w-100" src={post_03} alt="Post-Image"/></a>
                            </div>
                            {/* <!-- Post Title --> */}
                            <div className="post-title">
                                <h3><a href="blog-single-1.html">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></h3>
                            </div>
                            {/* <!-- Post Meta --> */}
                            <div className="post-meta">
                                <ul className="list-inline post-tag">
                                    <UserAvatar src={profileImage} designation="Rozy Efzal &amp; CEO"></UserAvatar>
                                    <li className="blog_list-inline-item">
                                        September 26, 2021
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Post Details --> */}
                            <div className="post-details">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
                        </article>
                    </div>
                </Row>
                
            </div>
            
        </div>
    );
  }
}

export default BlogMainContains
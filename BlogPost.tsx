import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import UserAvatar from "./UserAvatar";
import post_01 from "../images/blog/post-01.jpg";
import post_02 from "../images/blog/post-02.jpg";
import post_03 from "../images/blog/post-03.jpg";
import profileImage from "../images/testimonial/feature-testimonial-thumb.jpg";
import { FaAngleRight  } from "@react-icons/all-files/fa/FaAngleRight";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

class BlogPost extends Component {
  render() {
    return (
      <div>
          <div className="container">
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
                                <UserAvatar src={profileImage} designation="Rozy Efzal  &amp; CEO"></UserAvatar><li className="blog_list-inline-item">
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
                </Row>
            </div>
        <Col className="col-12">
          {/* <!-- Pagination --> */}
          <nav className="pagination-nav">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </nav>
          {/* <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack> */}
        </Col>
      </div>
    );
  }
}

export default BlogPost;

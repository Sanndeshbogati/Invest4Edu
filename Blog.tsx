import React, { Component } from "react";
import BlogIntro from "./BlogIntro";
import BlogMainContains from "./BlogMainContains";
import Community from "./Community";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import BlogPost from "./BlogPost";
import "../component-css/blog.css"


class Blog extends Component {
  render() {
    return (
      <div>
        <BlogIntro></BlogIntro>
        <BlogMainContains></BlogMainContains>
        <Community></Community>
        <BlogPost></BlogPost>
        <AppInfo></AppInfo>
        <Footer></Footer>
      </div>
    );
  }
}

export default Blog;

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";

export default class BlogList extends Component {
  state = { posts: [] };
  componentDidMount = async () => {
    // console.log(process.env.REACT_APP_LOCAL_BE);
    const res = await fetch(process.env.REACT_APP_LOCAL_BE + "/blogPosts");
    const posts = await res.json();
    // console.log(posts);
    this.setState({ posts });
  };

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post._id} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}

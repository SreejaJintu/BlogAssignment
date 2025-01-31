import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs"); 
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ background: "linear-gradient(135deg, #fdfbfb, #ebedee)", minHeight: "100vh", paddingTop: "4rem" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          My Blogs
        </h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center">No blogs found. Create your first blog!</p>
        ) : (
          <Row className="g-4">
            {blogs.map((blog) => (
              <Col key={blog._id} md={4}>
                <Card style={{ borderRadius: "1rem", backgroundColor: "#ffffff", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "600", color: "#333" }}>{blog.title}</Card.Title>
                    <Card.Text style={{ color: "#666" }}>
                      {blog.content.length > 100 ? blog.content.substring(0, 100) + "..." : blog.content}
                    </Card.Text>
                    <Button variant="primary" size="sm" href={`/posts/${blog._id}`}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MyBlogs;

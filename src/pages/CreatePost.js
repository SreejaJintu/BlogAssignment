import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };

    try {
      setLoading(true);
      const response = await axios.post("https://blogbackend-zj70.onrender.com/api/posts", newPost); 
      alert(`Post created successfully! Post ID: ${response.data._id}`);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
        minHeight: "100vh",
        paddingTop: "4rem",
        color: "#fff",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "1.5rem" }}>
              <Card.Body>
                <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                  Create a New Blog Post
                </h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the title of your post"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Write your post content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" size="lg" disabled={loading}>
                      {loading ? "Publishing..." : "Publish Post"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreatePost;

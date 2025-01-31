import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)",
        minHeight: "100vh",
        paddingTop: "5rem",
        color: "#333",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={cardStyle} className="p-4">
              <Card.Body>
                <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                  About This Blog
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                  Welcome to my little corner of the web! This blog is a
                  creative space where thoughts, dreams, and stories come to
                  life. Whether you're here for inspiration, entertainment, or
                  knowledge, my goal is to make each post meaningful.
                </p>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                  I believe in the power of words and their ability to connect
                  us across time and space. Here, I write about everything
                  close to my heart — ideas that shape who we are, dreams that
                  push us forward, and stories that remind us to stay true to
                  ourselves.
                </p>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    "The future belongs to those who believe in the beauty of
                    their dreams."
                  </p>
                  <footer className="blockquote-footer">
                    Eleanor Roosevelt
                  </footer>
                </blockquote>
                <p className="text-center mt-4">
                  Thank you for being part of this journey. Let’s dream, create
                  and grow together.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

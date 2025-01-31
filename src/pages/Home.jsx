import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const backgroundStyle = {
    background: "linear-gradient(135deg, rgba(0, 136, 255, 0.8), rgba(0, 255, 136, 0.8))",
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
  };

  const quotes = [
    "Writing is the painting of the voice.",
    "Dream big, write boldly, and let your words inspire.",
    "A blog is where dreams take shape and thoughts find a home.",
    "Your words have the power to change the world — share them freely."
  ];

  return (
    <div style={backgroundStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "2rem" }}>
              <Card.Body className="text-center p-5">
                <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>Welcome to My Blog</h1>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                  {quotes[Math.floor(Math.random() * quotes.length)]}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

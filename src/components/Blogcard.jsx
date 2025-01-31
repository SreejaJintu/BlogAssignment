import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = ({ title, content }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content.substring(0, 100)}...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;

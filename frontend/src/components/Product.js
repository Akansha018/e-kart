import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";
const Product = ({product}) => {
    const {_id , image , name ,rating , numReviews,price} = product;
  return (
    <Card className="my-3 p-3 rounded">
      <LinkContainer to={`/product/${_id}`} className="pointer">
        <Card.Img src={image} variant="top" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/product/${_id}`} className="pointer">
          <Card.Title as = "div">
            <strong>{name}</strong>
          </Card.Title>
        </LinkContainer>
        <Card.Text as = "div">
          <Rating value={rating} />
        </Card.Text>
        <Card.Text as = "div">
          {`${numReviews} reviews`}
        </Card.Text>
  
        <Card.Text as = "h5">
        $ {price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default Product;

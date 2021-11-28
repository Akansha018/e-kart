import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Image, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <>
      <Link className="btn btn-danger my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Card>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="rounded"
            />
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6>{product.name}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} />
              </ListGroup.Item>
              <ListGroup.Item>{`${product.numReviews} reviews`}</ListGroup.Item>
              <ListGroup.Item>Brand : {product.brand}</ListGroup.Item>
              <ListGroup.Item>Category : {product.category}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price </Col>
                  <Col>$ {product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>STATUS</Col>
                  <Col>
                    {product.countInStock > 0
                      ? "Product Available"
                      : "Not Available"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="Button" className="btn btn-danger">
                  <i
                    className="fas fa-shopping-cart"
                    disabled={product.countInStock === 0}
                  ></i>{" "}
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

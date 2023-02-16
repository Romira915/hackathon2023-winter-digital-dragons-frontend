import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import "./Card.css";

const Card = () => {
    return (
    <div>
        <Container>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
            <Row className="row article-card my-2">
                <Col className="col-4 my-4">
                    <Image src="../../public/logo512.png" className="article-img" />
                </Col>
                <Col className="list-article col-8 my-4">
                    <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam perspiciatis aut ipsa necessitatibus possimus exercitationem aliquid ea assumenda ducimus?</p>
                    <p>6分前</p>
                    <p>株式会社</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Card;

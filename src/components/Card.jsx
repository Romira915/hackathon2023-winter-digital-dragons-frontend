import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import "./Card.css";
import axios from "axios";

const Card = () => {

    const [posts, setPosts] = useState([])
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios('http://localhost/api/releases?limit=10')
        .then(res =>{
            console.log(res.data)
            setPosts(res.data)
        })
    }, [])

    useEffect(() => {
        setContent(posts.map(post => (
            <Row className="col-5 article-card mx-2">
                <Col className="list-article col-8">
                    <p className="title font-weight-bold">{post.title}</p>
                    <p className="mt-2">6分前</p>
                    <p>{post.company_name}</p>
                </Col>
                <Col className="col-4">
                    <Image src={post.main_image} className="article-img" />
                </Col>
            </Row>
        )));
    }, [posts])




    return (
    <div>
        <Container className="my-4">
            <Row className="row">
                {content}
            </Row>
        </Container>
    </div>
    );
};

export default Card;

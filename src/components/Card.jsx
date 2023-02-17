import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import "./Card.css";
import axios from "axios";
import moment from "moment";
import { EmptyRelease } from "./EmptyRelease";

const Card = ({cat, conditions}) => {

    const [posts, setPosts] = useState([])
    const [content, setContent] = useState([]);

    useEffect(() => {
        const limit = conditions['limit'] ? `?limit=${conditions['limit']}` : '' 
        const startDate = conditions['startDate'] ? `&start_date=${conditions['startDate']}` : '' 
        const endDate = conditions['endDate'] ? `&end_date=${conditions['endDate']}` : '' 
        const prefecture = conditions['prefecture'] ? `&prefecture=${conditions['prefecture']}` : ''

        console.log(`http://localhost/api/search${limit}${startDate}${endDate}${prefecture}`)
        axios(`http://localhost/api/search${limit}${startDate}${endDate}${prefecture}`)
        .then(res =>{
            // console.log(res.data)
            setPosts(res.data)
        })
    }, [conditions])

    useEffect(() => {
        setContent(posts.map(post => (
            <Row className="col-5 article-card mx-2">
                <Col className="list-article col-8">
                    <p className="title font-weight-bold">{post.title}</p>
                    <p className="mt-2">{moment(post['created_at']).fromNow()}</p>
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
                { posts.length !== 0 ? content : <EmptyRelease/>}
            </Row>
        </Container>
    </div>
    );
};

export default Card;

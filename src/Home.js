import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'
import Card from './components/Card'

const Home = () => {
    const { cat } = useParams();
    
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab />
                    </Col>
                    <Col md={7}>
                        <Card />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'

const Home = () => {
    const { cat } = useParams();
    
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab />
                    </Col>
                    <Col>
                        Hello
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
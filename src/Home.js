import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'
import Card from './components/Card'

const Home = () => {
    const { cat } = useParams();
    const [conditions, setConditions] = useState({
        'limit': 10,
        'prefecture': '',
        'startDate': '',
        'endDate': '',
    })

    console.log(conditions)

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab cat={cat} setConditions={setConditions}/>
                    </Col>
                    <Col md={7}>
                        <Card cat={cat} conditions={conditions}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
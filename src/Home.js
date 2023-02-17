import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'
import Card from './components/Card'
import SearchSelect from './components/SearchSelect'

const Home = () => {
    const { cat } = useParams();
    const [conditions, setConditions] = useState({
        'limit': 42,
        'prefecture': '',
        'startDate': '',
        'endDate': '',
    })

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab cat={cat} setConditions={setConditions}/>
                        <SearchSelect cat={cat} setConditions={setConditions}/>
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
import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import Prefectures from './Prefectures'

const SearchTab = ({cat, setConditions}) => {
    
    const onPrefectureSelected = (e) => setConditions((prevState) => ({ ...prevState, "prefecture": e.target.value }))
    const onStartDateChanged = (e) => setConditions((prevState) => ({ ...prevState, "startDate": e.target.value }))
    const onEndDateChanged = (e) => setConditions((prevState) => ({ ...prevState, "endDate": e.target.value }))

    return (
        <Form className="bg-warning p-3 mt-4">
            <Row className="justify-content-center">
                {/* 都道府県 */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Select">都道府県</Form.Label>
                    <Form.Select id="Select" onChange={onPrefectureSelected}>
                        <Prefectures />
                    </Form.Select>
                </Form.Group>
                {/* 期間 */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">開始日</Form.Label>
                    <Form.Control type="date" placeholder="開始日" onChange={onStartDateChanged}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">終了日</Form.Label>
                    <Form.Control type="date" placeholder="終了日" onChange={onEndDateChanged} />
                </Form.Group>
            </Row>
        </Form>
    )
}

export default SearchTab
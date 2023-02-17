import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import Prefectures from './Prefectures'
import axios from 'axios'

const SearchTab = ({cat, setConditions}) => {
    
    const onPrefectureSelected = (e) => setConditions((prevState) => ({ ...prevState, "prefecture": e.target.value }))
    const onStartDateChanged = (e) => setConditions((prevState) => ({ ...prevState, "startDate": e.target.value }))
    const onEndDateChanged = (e) => setConditions((prevState) => ({ ...prevState, "endDate": e.target.value }))

    const onButtonClicked = () => {
        // まだ何も
    }

    return (
        <Form className="bg-warning p-3 mt-4">
            <Row className="justify-content-center">
                {/* キーワード */}
                <Form.Group className="mb-3">
                    <Form.Control type="input" placeholder="キーワードで検索" />
                </Form.Group>
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
                <Button variant="primary" type="submit" onClick={onButtonClicked}>
                    検索
                </Button>
            </Row>
        </Form>
    )
}

export default SearchTab
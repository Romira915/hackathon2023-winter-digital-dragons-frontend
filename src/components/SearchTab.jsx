import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import Prefectures from './Prefectures'

const SearchTab = () => {
    return (
        <Form className="bg-warning p-3">
            <Row className="justify-content-center">
                {/* キーワード */}
                <Form.Group className="mb-3">
                    <Form.Control type="input" placeholder="キーワードで検索" />
                </Form.Group>
                {/* 都道府県 */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Select">都道府県</Form.Label>
                    <Form.Select id="Select">
                        <Prefectures />
                    </Form.Select>
                </Form.Group>
                {/* 期間 */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">開始日</Form.Label>
                    <Form.Control type="date" placeholder="開始日" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">終了日</Form.Label>
                    <Form.Control type="date" placeholder="終了日" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    検索
                </Button>
            </Row>
        </Form>
    )
}

export default SearchTab
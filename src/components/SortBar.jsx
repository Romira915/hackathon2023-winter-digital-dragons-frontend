import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import { SortTarget } from './SortTarget'

export const SortBar = ({cat, setConditions}) => {
    const onSortSelected = (e) => setConditions((prevState) => ({ ...prevState, "sort_value": e.target.value }))
    return (
        <Form>
            <Row className="justify-content-center">
                {/* 並び替え */}
                <Form.Group>
                    <Form.Label htmlFor="Select"></Form.Label>
                    <Form.Select id="Select" onChange={onSortSelected}>
                        <SortTarget/>
                    </Form.Select>
                </Form.Group>
            </Row>
        </Form>
    )
}
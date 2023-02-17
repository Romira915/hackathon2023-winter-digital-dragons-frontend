import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Category from "./Category";
import axios from "axios";

const SearchSelect = ({ cat }) => {
  const onButtonClicked = () => {
    // まだ何も
  };

  return (
    <Form className="bg-light p-3 mt-4">
      <p>絞り込み検索</p>
      <hr />
      <Row className="justify-content-center">
        <Category />
        <Button
          variant="primary"
          type="submit"
          onClick={onButtonClicked}
          class="btn btn-secondary dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          絞り込み検索
        </Button>
      </Row>
    </Form>
  );
};

export default SearchSelect;

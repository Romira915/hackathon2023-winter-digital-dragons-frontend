import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const bigCatList = [
    {"id" : 0, "cat":"総合",'name':'all' }, 
    {"id" : 1, "cat":"テクノロジー", 'name':'tech'},
    {"id" : 2, "cat": "モバイル", 'name': "mobile"},
    {"id" : 3, "cat": "アプリ", 'name': "app"},
    {"id" : 4, "cat":"エンタメ", "name": "entertainment"},
    {"id" : 5, "cat":"ビューティー", "name": "beauty"},
    {"id" : 6, "cat":"ファッション", "name": "fashion"},
    {"id" : 7, "cat:":"ライフスタイル", "name": "lifestyle"}
  ]

  const selectedStyle = { "font-weight": "bold" }

  const content = bigCatList.map(item => (
    <Col>
      <Link to={`/${item["id"]}`} className="text-decoration-none text-dark" style={decodeURIComponent(location.pathname).includes(item["cat"]) ? selectedStyle: {}}>
        <nobr>
          {item["cat"]}
        </nobr>
      </Link>
    </Col>
  ))
  return (
    <header style={{ position: "sticky", top: 0}}>
      <Navbar expand="lg" style={{ background: "#294C7A" }}>
        <Container>
          <Link to={"/all"} className="text-white text-decoration-none fs-2">PRTIMES</Link>
        </Container>
      </Navbar>
      <Navbar className="mb-5 bg-white" style={{ height: "2rem", borderBottom: "1px solid", fontSize: "1em" }}>
        <Container className="justify-content-center">
          <Row>
            {content}
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

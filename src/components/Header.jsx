import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Header = () => {
  const bigCatList = ["総合", "テクノロジー", "モバイル", "アプリ", "エンタメ", "ビューティー", "ファッション", "ライフスタイル"]
  const content = bigCatList.map(cat => (
    <Col>
      <Link to={`/${cat}`} className="text-decoration-none text-dark">
        <nobr>
          {cat}
        </nobr>
      </Link>
    </Col>
  ))
  return (
    <header style={{ position: "sticky", top: 0}}>
      <Navbar expand="lg" style={{ background: "#294C7A" }}>
        <Container>
          <Link to={"/"} className="text-white text-decoration-none fs-2">PRTIMES</Link>
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
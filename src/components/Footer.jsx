import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="footer-bs bg-light p-5 mt-5">
        <Container>
          <Row className="justify-content-center fs-6" >
            <Col>
              <p className="fw-bold">ニュースリリース配信サービス</p>
              <p>PR TIMESとは</p>
              <p>料金・プラン</p>
              <p>プレスリリースを受信したい方へ</p>
              <p>プレスリリースを配信したい方へ</p>
              <p>ログイン</p>
              <p>hackathon2023-winter-digital-dragons</p>
            </Col>
            <Col>
              <p className="fw-bold">レコメンドサービス</p>
              <p>PR TIMES STORY</p>
              <p>無料FAQならTayori</p>
              <p>無料メールフォームならTayori</p>
              <p>タスク・プロジェクト管理ツールのJooto</p>
              <p>PR TIMES TV</p>
              <p>PR TIMES LIVE</p>
              <p>PR TIMES MAGAZINE</p>
            </Col>
            <Col>
              <p></p>
              <p>クリッピング</p>
              <p>広告ならPR EDGE</p>
              <p>無料占い・今週の運勢ならisuta</p>
              <p>無料恋愛占いならisuta</p>
            </Col>
            <Col>
              <p className="fw-bold">PR TIMES公式SNS</p>
              <p>公式Facebookページ</p>
              <p>Facebookカテゴリ</p>
              <p>公式Twitterページ</p>
              <p>Twitterカテゴリ</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <p class="copyright">&copy; PRTIMES HACKATHON 2023 WINTER DIGITAL DRAGONS </p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
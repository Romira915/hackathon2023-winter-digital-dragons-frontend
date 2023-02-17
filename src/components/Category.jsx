import React from "react";
import Form from "react-bootstrap/Form";

const Category = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="Select">カテゴリー</Form.Label>
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"パソコン・周辺機器"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"パソコンソフトウェア"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"プロバイダ・回線接続"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ネットサービス"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"スマートフォンアプリ"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "サーバ・周辺機器 ネットワーク・ネットワーク機器 アプリケーション・セキュリティ システム・Webサイト・アプリ開発 百貨店・スーパー・コンビニ・ストア EC・通販"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"卸売・問屋"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"映画・演劇・DVD"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"テレビ・CM"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"スポーツ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"アウトドア・登山"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"雑誌・本・出版物"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"漫画・アニメ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"アート・カルチャー"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"コンシューマーゲーム"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"スマートフォンゲーム"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"アーケードゲーム"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"おもちゃ・遊具・人形"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"モバイル端末"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"カメラ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"AV 機器"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"調理・生活家電"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"健康・美容家電"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"インテリア・家具・収納"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"日用品・生活雑貨"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ガーデン・DIY"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"自動車・カー用品"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"バイク・バイク用品"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"レディースファッション メンズファッション"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"シューズ・バッグ"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "ジュエリー・アクセサリー キッズ・ベビー・マタニティ 食品・お菓子"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "ソフトドリンク・アルコール飲料 レストラン・ファストフード・居酒屋 中食・宅配"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "スキンケア・化粧品・ヘア用品 ダイエット・健康食品・サプリメント 医療・病院"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"医薬・製薬"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"福祉・介護・リハビリ 経営・コンサルティング"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"シンクタンク"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"財務・経理"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "法務・特許・知的財産 銀行・信用金庫・信用組合 クレジットカード・ローン 証券・FX・投資信託"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"生命保険・損害保険"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"広告・宣伝・PR"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"マーケティング・リサーチ"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "セールス・営業 就職・転職・人材派遣・アルバイト 資格・留学・語学"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"学校・大学"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"学習塾・予備校・通信教育"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"保育・幼児教育"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ホテル・旅館"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"旅行・観光"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"テーマパーク・遊園地"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"住宅・マンション"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"商業施設・オフィスビル 建築・空間デザイン"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"建設・土木"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"鉄鋼・金属・ガラス・土石・ゴム"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"化学"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"電気・ガス・資源・エネルギー 交通・運送・引越し"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"物流・倉庫・貨物"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"自然・天気"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"環境・エコ・リサイクル ペット・ペット用品"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"ギフト・花"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"恋愛・結婚"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"出産・育児"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"葬儀"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={
                "政治・官公庁・地方自治体 財団法人・社団法人・宗教法人 ボランティア"
              }
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"国際情報・国際サービス"}
            />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"農林・水産"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check type={type} id={`type`} label={"その他"} />
          </div>
        ))}
        {["checkbox"].map((type) => (
          <div key={`type`} className="mb-3">
            <Form.Check
              type={type}
              id={`type`}
              label={"フィットネス・ヘルスケア 電子部品・半導体・電気機器"}
            />
          </div>
        ))}
      </Form.Group>
    </>
  );
};

export default Category;

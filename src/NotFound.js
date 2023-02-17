import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>お探しのページは見つかりませんでした．</h1>
      <div>
        <Link to={`/all/`}>ホームに戻る</Link>
        <dev>{process.env.NODE_ENV}</dev>
      </div>
    </>
  );
};

export default NotFound;

import "../css/App.css";
import { useParams } from "react-router-dom";

type DetailProps = {
  todos: [
    {
      createdAt: string;
      isDone: boolean;
      title: string;
    }
  ];
};

interface RouteParams {
  id: string;
}

const Detail = (props: DetailProps): JSX.Element => {
  const params = useParams<RouteParams>();
  const idString = params.id;
  const id = parseInt(idString);

  return (
    <div className="container">
      <p>進捗：{props.todos[id].isDone ? "完了" : "未完了"}</p>
      <p>タスク名：{props.todos[id].title}</p>
      <a href="/">
        <button>戻る</button>
      </a>
    </div>
  );
};

export { Detail };

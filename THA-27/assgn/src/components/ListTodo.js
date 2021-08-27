import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {todos.map((todo, index) => {
          return (
            <div>
              <p style={{ display: "inline-block" }}>{todo.title}</p>
              <button onClick={() => dispatch(removeItem(index))}>Del</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListTodo;

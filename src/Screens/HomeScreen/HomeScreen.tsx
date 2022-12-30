import { FC, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import AddToDo from "../../Components/AddToDo/AddToDo";
import DisplayToDo from "../../Components/DisplayToDo/DisplayToDo";
import { fetchTodos } from "../../Redux/features/todos/ToDoSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store/hooks";
import style from "./HomeScreenStyles";

const HomeScreen: FC = () => {
  const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (todo.loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (todo.error) {
    return <p>{todo.error}</p>;
  }
  return (
    <div className="container-fluid" style={style.container}>
      <AddToDo />
      <DisplayToDo />
    </div>
  );
};

export default HomeScreen;

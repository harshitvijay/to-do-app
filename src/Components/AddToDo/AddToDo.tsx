import React, { FC, useState, ChangeEvent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addItem } from "../../Redux/features/todos/ToDoSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store/hooks";
import style from "./AddToDoStyles";

const AddToDo: FC = () => {
  const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<string>("");

  const onHandleChange = (e: ChangeEvent<any>) => {
    setTask(e.target.value);
  };
  return (
    <Container
      className="shadow bg-light border border-light"
      style={style.toDoContainer}
    >
      <div className="text-center m-2">
        <h1 className="text-info">To Do App</h1>
      </div>
      <div className="d-flex mt-5">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Add Task"
          onChange={(e) => onHandleChange(e)}
          value={task}
        />
        <Button
          className="ms-2"
          onClick={() => {
            dispatch(
              addItem({
                userId: 1,
                id: todo.todos.length + 1,
                completed: false,
                title: task,
              })
            );
            setTask("");
          }}
        >
          Createe
        </Button>
      </div>
    </Container>
  );
};

export default AddToDo;

import React, { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import style from "./AddToDoStyles";

const AddToDo: FC = () => {
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
          onChange={() => {}}
        />
        <Button className="ms-2" onClick={() => {}}>
          Create
        </Button>
      </div>
    </Container>
  );
};

export default AddToDo;

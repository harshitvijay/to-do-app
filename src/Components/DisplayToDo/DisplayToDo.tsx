import React, { FC } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../Redux/store/hooks";

const DisplayToDo: FC = () => {
  const todo = useAppSelector((state) => state.todo);
  return (
    <div>
      <div className="text-center m-4">
        <h1 className="text-info">Today's Action Items</h1>
      </div>
      <Table className="container" striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input position-static"
                    type="checkbox"
                    // value={"option"}
                    defaultChecked={item.completed}
                    onSelect={() => {}}
                    aria-label="..."
                  />
                </div>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayToDo;

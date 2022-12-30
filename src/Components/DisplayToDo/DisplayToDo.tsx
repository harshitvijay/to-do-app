import React, { FC } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { deleteItem } from "../../Redux/features/todos/ToDoSlice";
import { useAppSelector, useAppDispatch } from "../../Redux/store/hooks";

const DisplayToDo: FC = () => {
  const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
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
          {todo.todos.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input position-static"
                    type="checkbox"
                    defaultChecked={item.completed}
                    onSelect={() => {}}
                    aria-label="..."
                  />
                </div>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteItem(item.id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayToDo;

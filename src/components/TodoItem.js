import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import "./TodoItem.css";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view" style={{display: 'flex', alignItems: 'center'}}>
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle" 
            value="on"
            checked={todo.completed}
          />
          <label style={{ fontSize: "18px" }}>{todo.title}</label>
          <label
            style={{
              display: "inline-block",
              textAlign: "center",
              padding: "5px 8px",
              borderRadius: "14px",
              fontSize: "12px",
              backgroundColor: "rgb(109, 174, 219)",
              color: "rgb(255, 255, 255)"
            }}
          >
            {todo.type}
          </label>
          <label style={{ fontSize: "12px" }}>{todo.time}</label>
          <button
          style={{display: "inline-block"}}
            className="destroy"
            onClick={() => todoStore.setDelete(todo.id)}
          />
        </div>
      </li>
    );
  }
}
export default TodoItem;

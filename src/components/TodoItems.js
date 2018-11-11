import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {todoStore.visibleTodos.map((todo, key) => {
            return <TodoItem todo={todo} key={key} />;
          })}
        </ul>
        <div style={{ display: "flex", flexWrap: "Wrap" }}>
          <label
            style={{ cursor: "pointer", padding: "10px 20px" }}
            onClick={() => todoStore.setFilterKey()}
          >
            Clear Completed
          </label>
          <lable
            style={{
              cursor: "pointer",
              padding: "10px 20px",
              backgroundColor: !todoStore.category ? "#e6e6ff" : "initial"
            }}
            onClick={() => todoStore.setAll()}
          >
            All
          </lable>
          {todoStore.categories.map((categ, key) => {
            return (
              <lable
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    todoStore.category === categ ? "#e6e6ff" : "initial"
                }}
                onClick={() => todoStore.setCategFilter(categ)}
              >
                {categ.charAt(0).toUpperCase() + categ.slice(1)}
              </lable>
            );
          })}
        </div>
        <footer className="footer" />
      </section>
    );
  }
}
export default TodoItems;

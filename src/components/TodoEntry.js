import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

let input;
class TodoEntry extends Component {
  state = {
    value: "",
    type: "",
    categ: ""
  };
  addCateg = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todoStore.categories.push(event.target.value);
    this.setState({
      categ: ""
    });
  };

  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    if (this.state.value) {
      var time = new Date();

      event.preventDefault();

      todoStore.addTodo(
        this.state.value,
        this.refs.imageType.value,
        time.toLocaleString()
      );
      this.setState({
        value: ""
      });
    }
  };
  render() {
    return (
      <header className="header">
        <h1>Todo</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="styled-select yellow rounded">
            <select
              ref="imageType"
              onChange={event =>
                this.setState({ type: this.refs.imageType.value })
              }
            >
              {todoStore.categories.map((categ, key) => {
                return (
                  <option value={categ} key={key}>
                    {categ.charAt(0).toUpperCase() + categ.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            style={{ paddingLeft: "3px", borderRadius: "4px" }}
            value={this.state.categ}
            onChange={event => this.setState({ categ: event.target.value })}
            onKeyDown={event => this.addCateg(event)}
            type="text"
            // className="new-todo"
            placeholder="new category?"
          />
        </div>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="what needs?"
        />
      </header>
    );
  }
}
export default TodoEntry;

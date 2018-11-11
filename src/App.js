import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./components/TodoEntry"
import TodoItems from "./components/TodoItems"



class App extends Component {

  
  render() {
    return (
      <div id="todoapp" className="todoapp" >
        <TodoEntry/>
        <TodoItems/>

        {/* <section className="main">
        <ul className="todo-list">
        <li>
          <div className="view">
          <input type="checkbox" className="toggle" value="on" checked={false}/>
          <label >new work</label>
          <button className="destry"></button>
          </div>
        </li>
        <li className="completed">
        <div className="view">
        <input type="checkbox" className="toggle" value="on" checked={true}/>
        <label >old work</label>
        </div>
        </li>
        </ul>
        </section> */}
      </div>
    );
  }
}

export default App;

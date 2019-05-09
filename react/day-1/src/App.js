import React, { Component } from "react";
import students from "./students";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newStudent: "",
      students: students
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ newStudent: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.handleChange} value={this.state.newStudent} />
          <button
            onClick={event => {
              this.setState({
                students: [...this.state.students, this.state.newStudent],
                newStudent: ""
              });
            }}
          >
            Add
          </button>
          <ul>
            {this.state.students.map(function(element) {
              return <Student name={element} />;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

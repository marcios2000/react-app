import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ''

    }
    this.updateInputText = this.updateInputText.bind(this)
  }

  updateInputText (e) {
    this.setState({inputText: e.target.value })
  }
  render() {
    console.log(this.state.inputText)
    return (
      <main>
        <Welcome updateInputText={this.updateInputText}/>
        {/* <input onChange={e => this.setState({inputText: e.target.value})}
        /> */}
        <h1>Welcome to the club {this.state.inputText}</h1>
        
      </main>
      
    
    );
  }
  
}

export default App;

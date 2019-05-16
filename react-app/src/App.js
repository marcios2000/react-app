import React, { Component } from 'react';
import './App.css';

import data from "./data"
import Component2 from './component2';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
      }
      
    }
    next = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };

    previous = () => {
      this.setState(({ count }) => ({
        count: count - 1
      }));
    };

  render() {
  return (
    <div className="black">
      <div> 
        <header className="header">Home</header>
      </div>
        <Component2 data={data} {...this.state}/>
        <button onClick={this.previous}className="previous">Previous</button>
        <button onClick={this.next}className="next">Next</button>
    </div>
  );
}
}

export default App;

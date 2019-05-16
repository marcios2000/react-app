import React, {Component} from 'react'




class Component2 extends Component {
    render() {
    return (
        <div className="middle">
          <div className="white">
          <div className="position">{this.props.data[this.props.count].id}/25</div>
            <div className="from"><h1><strong>{this.props.data[this.props.count].name.first} {this.props.data[this.props.count].name.last} </strong></h1>
            <div><strong>From: </strong>{this.props.data[this.props.count].city}, {this.props.data[this.props.count].country}</div>
            <div><strong>Job Title:  </strong>{this.props.data[this.props.count].title}</div>
            <div><strong>Employer: </strong>{this.props.data[this.props.count].employer}</div>
            </div>
            <div className="favorite" ><strong >Favorite Movies:</strong>
              <ol>1. {this.props.data[this.props.count].favoriteMovies[0]}</ol>
              <ol>2. {this.props.data[this.props.count].favoriteMovies[1]}</ol>
              <ol>3. {this.props.data[this.props.count].favoriteMovies[2]} </ol>
            </div>
  
  
  
            
          </div>
        </div>
    );
  }
  }
  
  export default Component2;
  
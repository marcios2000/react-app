import React, { Component} from "react";

class Student extends Cmponent {
    render (){
        console.log(this.props);
        return <li>{this.props.name}</li>;

    }
}
export default Student;
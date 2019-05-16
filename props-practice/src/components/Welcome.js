import React, { Component } from 'react'
import { tsPropertySignature } from '@babel/types';

class Welcome extends Component  {
    render() {
        return (
            <input
            onChange={this.props.updateInputText}
            
            />
        )
    }
}



export default Welcome;
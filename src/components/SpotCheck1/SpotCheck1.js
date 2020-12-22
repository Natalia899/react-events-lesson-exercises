import React, { Component } from 'react';

class SpotCheck1 extends Component {
    //add another method called logHover, 
    //which prints "I was hovered!" when the *mouse enters* the button
    logHover(){
        console.log('hovered');
      }
    logClick() {
        console.log("I was clicked!")
    }
    render() {
        return (<div>
            <button id="logger" onClick={this.logClick}>Click me</button>
            <button id="hover" onMouseEnter={this.logHover}>Hover me</button> 
        </div>
            
        );
    }
}

export default SpotCheck1;

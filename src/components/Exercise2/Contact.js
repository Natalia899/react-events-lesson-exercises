import React, { Component } from 'react';

class Contact extends Component {
displayConvo = ()=>
this.props.displayConvo(this.props.contactName)

  render() {
    return (
      <div >
        <div className="name">{this.props.contactName}</div>
        <button onClick={this.displayConvo}>Display conversation</button>
      </div>
    );
  }
}

export default Contact;

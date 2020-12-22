import React, { Component } from 'react';

class Conversation extends Component {
  displayConv = () => {
    this.props.displayConvo(null)
  }
  render() {
    console.log(this.props)

    return (
      <div >
        {this.props.convo.map(con => {
          console.log(con)
          return (
            <div>
              <span className='sender'>sender: {con.sender === 'self' ? 'me' : this.props.sender}</span>
              <div className='massage'>{con.text} </div>
            </div>
          )
        })}
        <button onClick={this.displayConv} className='back'>Back</button>
      </div>
    );
  }
}

export default Conversation;

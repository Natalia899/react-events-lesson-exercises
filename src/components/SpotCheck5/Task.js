import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)
  }

  render() {
    let t = this.props.task
    return (
      <div>
        <p>{t.text}</p>
        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}

export default Task;

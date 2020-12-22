import React, { Component } from 'react';
import Contact from './Contact'

class List extends Component {

  render() {
    return (
      <div >
        {this.props.contact.map(con => {
         return <Contact contactName={con} displayConvo = {this.props.displayConvo} />
        })}
      </div>
    );
  }
}

export default List;

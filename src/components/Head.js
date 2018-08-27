import React from 'react';
import Nav from './Nav';
import '../App.css';

class Head extends React.Component {
  render() {
    return (
      <div className="Head">
        <h1>Team Falcon</h1>
        <Nav />
      </div>
    );
  }
}

export default Head;

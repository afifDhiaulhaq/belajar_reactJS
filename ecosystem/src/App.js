import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    let button = (
      <button onClick={() => this.setState({ liked: true })}>Like</button>
    );

    if (this.state.liked) {
      button = "You liked this.";
    }

    return (
      <>
        <div className="App">
          <h2>Add React in One Minute</h2>
          <p>This page demonstrates using React with no build tooling.</p>
          <p>React is loaded as a script tag.</p>
          {button}
        </div>
      </>
    );
  }
}

export default App;

//asd

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicked: false
  }

  getStyle = () => {
    if (this.state.clicked) {
      return 'box clicked'
    } else {
      return 'box unclicked'
    }
  }

  toggle = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div id="box"
        className={this.getStyle()}
        onClick={this.toggle}>
        <p>ClassName: {this.getStyle()}</p>
      </div>
    );
  }
}

export default App;

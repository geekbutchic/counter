import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {//INHERIT PROPERTIES
    super(props);

    this.state = {
      count: 0,
    };
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log(this.addCount);
    return (
      //RETURNING JSX
      <React.Fragment>
        <h1 style={{ textAlign: "center", background: 'red', width: "100%", height: '100px', fontSize: '50px', padding: '10px'}}>React Counter</h1>
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <div style={{ fontSize: '30px', marginBottom: '20px'}}>Counter : {this.state.count}</div>
          <button
            onClick={this.minusCount}
            style={{
              borderRadius: "5px",
              borderWidth: "thin",
              width: "50px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            -
          </button>
          <button
            onClick={this.addCount}
            style={{ width: "50px", borderRadius: "5px", borderWidth: "thin" }}
          >
            +
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react'

// smart componenet 

class App extends Component {

  state = {
    count: 0
  }

  handle1 = () => {
    this.setState({ count: this.state.count + 1})
  }
  handle2 = () => {
    this.setState({ count: this.state.count + 2})
  }
  handle3 = () => {
    this.setState({ count: this.state.count + 3})
  }
  handle4 = () => {
    this.setState({ count: this.state.count + 4})
  }
  handle5 = () => {
    this.setState({ count: this.state.count + 5})
  }
  handleReset = () => {
    this.setState({ count: 0})
  }


  render () {
    return (
      <>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handle1}>Add 1</button>
      <button onClick={this.handle2}>Add 2</button>
      <button onClick={this.handle3}>Add 3</button>
      <button onClick={this.handle4}>Add 4</button>
      <button onClick={this.handle5}>Add 5</button>
      <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}


export default App;

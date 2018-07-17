import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    joke: []
  }
  
  componentDidMount = () => {
    axios.get(`http://api.icndb.com/jokes/random`)
      .then(res => {
        const joke = res.data.value;
        this.setState({ joke })
        console.log(this.state.joke)
      })
  }

  randomJoke = () => {
    return this.setState.joke  
    }

  render() {

    return (
      <div style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>

        <h1>Random Chuck Quote</h1>
        <h4> {this.state.joke} </h4>
        <button onClick={''}>Random</button>

      </div>
    )
  }
}

export default App;
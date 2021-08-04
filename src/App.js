import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: 'Type date',
    error: 'Error in state init',
    inputValue: 'Input is empty'
  }

  handleDateChange = () => {
    const inputValue = this.refs.number.value;

    this.setState({
      inputValue
    })

    fetch(`http://numbersapi.com/${inputValue}/year?json`)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error('Something in wrong.')
      })
      .then(response => response.json())
      .then(data =>
        this.setState({
          text: data.text
        })
      )
      .catch(err => console.error(err))

  }

  render() {
    return (
      <>
        <input onChange={this.handleDateChange} type="text" ref='number' />
        <p >In this year: {this.state.text}</p>
      </>
    );
  }
}

export default App;

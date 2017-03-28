import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Chart from './components/Chart'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form  />
        <p className="App-intro">
          Your Chart 
        </p>
        <Chart />
        <Footer />
      </div>
    );
  }
}

export default App
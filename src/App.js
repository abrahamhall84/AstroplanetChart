import React, { Component } from 'react'
import $ from 'jquery'
import Header from './components/Header'
import Form from './components/Form'
import Chart from './components/Chart'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }
  //https://api.nasa.gov/planetary/apod?api_key=
  getPlanets() {
    let API_Key = '6MUDWc4dNMDS8kukwgQLrduYTX40UHWYqYVAFZNM';
    $.ajax({
      url: "https://api.nasa.gov/planetary/apod?api_key=" + API_Key,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({planets: data}, function() {
          console.log(this.state);
        })
      }.bind(this), 
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }
  componentDidMount() {
    this.getPlanets();
  }
  handleAddPlanets(planet) {
    let planets = this.state.planets;
    planets.push(planet);
    this.setState({planets: planets});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form  addPlanets={this.handleAddPlanets.bind(this)} />
        <h2 className="App-intro">
          Your Chart 
        </h2>
        <Chart planets={this.state.planets} />
        <Footer />
      </div>
    );
  }
}

export default App
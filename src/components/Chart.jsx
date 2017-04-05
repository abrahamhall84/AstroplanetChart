import React, { Component } from 'react';
import './styles/Chart.css';

class Chart extends Component {
  render() {
    return (
      <div className="Chart">
        <div id="Sun"></div>
        <div id="Mercury-Orbit">
          <div id="Mercury"></div>
        </div>
        <div id="Venus-Orbit">
          <div id="Venus"></div>
        </div>
        <div id="Earth-Orbit">
          <div id="Earth">
            <div id="Moon-Orbit">
              <div id="Moon"></div>
            </div>
          </div>
        </div>
        <div id="Mars-Orbit">
          <div id="Mars"></div>
        </div>
        { //<div id="Asteroid-Belt-Orbit"></div> 
        }
        <div id="Vesta-Orbit">
          <div id="Vesta"></div>
        </div>
        <div id="Ceres-Orbit">
          <div id="Ceres"></div>
        </div>
        <div id="Juno-Orbit">
          <div id="Juno"></div>
        </div>
        <div id="Pallas-Athena-Orbit">
          <div id="Pallas-Athena"></div>
        </div>
        <div id="Jupiter-Orbit">
          <div id="Jupiter">
            <div id="Jupiter-Eye"></div>
          </div>
        </div>
        <div id="Saturn-Orbit">
          <div id="Saturn">
            <div id="Saturn-Ring"></div>
          </div>
        </div>
        <div id="Chiron-Orbit">
          <div id="Chiron">
            <div id="Chiron-Ring"></div>
          </div>
        </div>
        <div id="Uranus-Orbit">
          <div id="Uranus">
            <div id="Uranus-Ring"></div>
          </div>
        </div>
        <div id="Neptune-Orbit">
          <div id="Neptune"></div>
        </div>
        <div id="Pluto-Orbit">
          <div id="Pluto"></div>
        </div>
        <div id="Zodiac">
          <div id="Constellations">
            <div className="Aries"></div>
            <div className="Taurus"></div>
            <div className="Gemini"></div>
            <div className="Cancer"></div>
            <div className="Leo"></div>
            <div className="Virgo"></div>
            <div className="Libra"></div>
            <div className="Scorpio"></div>
            <div className="Sagittarius"></div>
            <div className="Capricorn"></div>
            <div className="Aquarius"></div>
            <div className="Pisces"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
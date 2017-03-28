import React, { Component } from 'react';
import './styles/Footer.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      newChart: {}
    }
  }
  static defaultProps = {
    months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
  handleSubmit(e) {
    if(this.refs.month.value === '') {
      alert('Month is Required');
    } else {
      this.setState({newChart: {
        month: this.refs.month.value
      }}, function() {
        console.log(this.state);
        // this.props.addPlanets(this.state.newChart)
      });
    }
    e.preventDefault();
  }
  render() {
    let monthOptions = this.props.months.map(month => {
      return <option key={month} value={month}>{month}</option>
    });
    return (
      <div className="Form">
        <h2><u>The Form</u></h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>What is your birtdate?</h4>
          <div>
            <label>Month</label><br />
            <select ref="month">{monthOptions}</select>
          </div>
          
        </form>
      </div>
    );
  }
}

export default Form;

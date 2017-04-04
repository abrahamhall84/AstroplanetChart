import React, { Component } from 'react';
import './styles/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      newChart: {}
    }
  }
  static defaultProps = {
    months: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days: ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    years: ['', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
  }
  handleSubmit(e) {
    if((this.refs.month.value && this.refs.day.value && this.year.month.value) === '' ) {
      alert('Date is Required');
    } else if((this.refs.month.value && this.refs.day.value) === '') {
      alert('Month and Day are Required');
    } else if((this.refs.month.value && this.refs.year.value) === '') {
      alert('Month and Year are Required');
    } else if((this.refs.day.value && this.refs.year.value) === '') {
      alert('Day and Year are Required');
    } else if(this.refs.month.value === '') {
      alert('Month is Required');
    } else if(this.refs.day.value === '') {
      alert('Day is Required');
    } else if(this.refs.year.value === '') {
      alert('Year is Required');
    } else {
      this.setState({newChart: {
        month: this.refs.month.value,
        day: this.refs.day.value,
        year: this.refs.year.value
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
    let dayOptions = this.props.days.map(day => {
      return <option key={day} value={day}>{day}</option>
    });
    let yearOptions = this.props.years.map(year => {
      return <option key={year} value={year}>{year}</option>
    });
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>What is your birtdate?</h3>
          <div className="Month">
            <label>Month</label><br />
            <select ref="month">{monthOptions}</select>
          </div>
          <div className="Day">
            <label>Day</label><br />
            <select ref="day">{dayOptions}</select>
          </div>
          <div className="Year">
            <label>Year</label><br />
            <select ref="year">{yearOptions}</select>
          </div>
          <br />
          <div className="Submit"><input type="submit" value="Submit" /></div>
        </form>
      </div>
    );
  }
}

export default Form;

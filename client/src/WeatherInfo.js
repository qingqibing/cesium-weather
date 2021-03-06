import React, { Component } from 'react';


class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFiled: ""
    };
    this.pStyle = {
      wordWrap: "break-word"
    };
  }
  
  onSearch() {
    this.props.onSearch(this.state.inputField);
  }

  onChange(event) {
    this.setState({inputField: event.target.value});
  }

  render() {
    
    return (
      <div>
        <input type="text" id="search" placeholder="Enter A City" onChange={this.onChange.bind(this)}/>
        <button type="button" onClick={this.onSearch.bind(this)}>Search</button>
        <p style={this.pStyle}>{this.props.result}</p>
      </div>
    );
  }
}

export default WeatherInfo;

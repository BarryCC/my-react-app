/**** 状态提升 ***/ 
/** 类似于组件 触发 上一层包含组件 方法（可传递参数） **/

import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water would boil</p>
  }
  return <p>the water would not boil</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperatura, convert) {
  const input = parseFloat(temperatura);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperaturaInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    // 关键点
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperatura = this.props.temperatura;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperatura in {scaleNames[scale]}:</legend>
        <input value={temperatura} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class components extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      scale: 'c',
      temperatura: ''
    }
  }

  handleCelsiusChange(temperatura){
    this.setState({scale: 'c', temperatura});
  }

  handleFahrenheitChange(temperatura) {
    this.setState({scale: 'f', temperatura});
  }

  render() {
    const scale = this.state.scale;
    const temperatura = this.state.temperatura;
    const celsius = scale === 'f' ? tryConvert(temperatura, toCelsius) : temperatura;
    const fahrenheit = scale === 'c' ? tryConvert(temperatura, toFahrenheit) : temperatura;
    
    return (
      <div className="example2">
        <TemperaturaInput 
          scale="c" 
          temperatura={celsius} 
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperaturaInput 
          scale="f" 
          temperatura={fahrenheit} 
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default components;
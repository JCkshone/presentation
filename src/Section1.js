import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SliderComponent from './SliderComponent/SliderComponent'

class Section1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttons:[]
    }

  }

  componentDidMount(){
    this.state.buttons = this.props.listButtons
    this.setState(this.state)
  }
  render() {
      
    return (
        <SliderComponent
        content={this.props.data}
        ></SliderComponent>
    );
  }
}

export default Section1;

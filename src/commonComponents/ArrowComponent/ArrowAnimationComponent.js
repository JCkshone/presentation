import React, { Component } from 'react';
import './style.css';

class ArrowAnimationComponent extends Component {
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
        <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#" style={{color:'#ffffff'}}></a>
        </div>
    );
  }
}

export default ArrowAnimationComponent;

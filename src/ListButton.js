import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListButton extends Component {
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
      <div >
        {
          this.state.buttons.map((e, key)=>{
            return(
              <button
                key={key}
              >{
                e.name
              }</button>
            )
          })
        }
      </div>
    );
  }
}

export default ListButton;

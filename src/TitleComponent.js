import React, { Component } from 'react';
import Anime from 'react-anime';
import Typist from 'react-typist';
import './style.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class TitleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttons:[]
    }

  }

  state = {
    renderMsg: false,
    renderDate: false
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  onButtonTyped = () => {
    this.setState({ renderDate: true });
  }

  


  componentWillReceiveProps(){
  
  }

  componentDidUpdate(){
    let parentElement = document.getElementsByClassName("TypistExample")[0].parentElement.style;
    parentElement.position= 'static'
    parentElement.height= '90%'
    parentElement.transition = 'height 1s'
  }
  render() {
    const docs = '//github.com/jstejada/react-typist';
    return (
        <div className="TypistExample">
            <Typist
                className="TypistExample-header"
                startDelay={200}
                cursor={{ hideWhenDone: true, element: '', }}
            >
                <p>METODOLOGÍA TSP</p>
            </Typist>
            <div className="TypistExample-content">
                <Typist
                    className="TypistExample-titles-name"
                    cursor={{ show: true,
                        blink: true,
                        element: '',
                        hideWhenDone: false}}
                    startDelay={1000}
                    onTypingDone={this.onHeaderTyped}
                >
                <p>Presentado por</p>
                </Typist>
            {this.state.renderMsg ? (
                <Typist
                className="TypistExample-message"
                cursor={{ hideWhenDone: true }}
                onTypingDone={this.onButtonTyped}
                >
                * Diana Andrea Aponte Sanabria
                <Typist.Delay ms={2000} />
                <br />
                * Milton Javier Camelo Arango
                <Typist.Delay ms={2000} />
                <br />
                * Juan Camilo Navarro Alvira
                <Typist.Delay ms={2000} />
                <br />
                * Douglas David Solano Galarza
                <Typist.Delay ms={2000} />
                <br />
                {''}
                </Typist>
            ) : null }
            </div>
            {
                this.state.renderDate?(
                    <Typist
                        className="TypistExample-date"
                        cursor={{ show: true,
                            blink: true,
                            element: '',
                            hideWhenDone: false}}
                        startDelay={1000}
                        onTypingDone={this.onButtonTyped}
                    >
                        <p>2019</p>
                    </Typist>
                ) : null
            }
           
      </div>
    );
  }
}

export default TitleComponent;

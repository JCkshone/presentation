import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles-slider.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ImageLoader from 'react-load-image';

class SliderComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }

  }

  componentDidMount(){
    this.state.buttons = this.props.listButtons
    this.setState(this.state)
  }
  render() {
    return (
        <div style={{height: '100%'}}>
          <Slider className="slider-wrapper">
            {this.props.content.map((item, index) => {
              return (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url(${require('../img/background.jpeg')}) no-repeat center center` }}
                >
                  <div className="inner">
                    <h1 style={{fontFamily: 'Vidaloka, serif', position: 'relative', top: '-1em'}}>{item.title}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em'}}>

                      {
                        item.description.length > 0 ?
                          (<div style={{display: 'flex', flex: '1', color: '#ffffff', textAlign: 'start', marginLeft: '3em', marginTop: '2em', fontSize: '20px', fontFamily: 'Philosopher, sans-serif'}}>
                            {
                              ReactHtmlParser(item.description.replace(/\n/g, "<br />"))
                            }
                          </div>)
                          :
                          <div></div>
                      }

                      <div style={{display: 'flex', flex: '1', justifyContent: 'center'}}>  
                        {
                          item.description.length > 0 ? 
                          <img src={require(`../img/${item.image}`)} style={{borderRadius: '16px', height: '25em', width: '25em'}}></img> 
                          :
                          <img src={require(`../img/${item.image}`)} style={{borderRadius: '16px', height: '25em', width: '45em'}}></img> 
                        }
                      </div>
                        
                    </div>
                  
        
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
    );
  }
}

export default SliderComponent;

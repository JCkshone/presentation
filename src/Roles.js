import React, { Component } from 'react';
import logo from './logo.svg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'react-vertical-timeline-component/style.min.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class RolesComponent extends Component {
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
      debugger
    return (
      <div >
        <VerticalTimeline>

            {
                this.props.data.map((e, key)=>{

                    return (
                        <VerticalTimelineElement
                            key={key}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingTop: '10px' }}
                            icon={<MaterialIcon icon="view_agenda" size='large' />}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title">{e.title}</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                                
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <p style={{textAlign: 'start'}}>
                                        {
                                            ReactHtmlParser(e.description.replace(/\n/g, "<br />"))
                                        }
                                    </p>
                                    
                                    {
                                       /* <img src={require('./img/image8.jpg')} style={{width:'14em', height: '13em'}}></img>
                                    */}
                                </div>
                                

                            </div>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
      </div>
    );
  }
}

export default RolesComponent;

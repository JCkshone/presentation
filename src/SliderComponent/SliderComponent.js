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
      content: [
        {
            title: '¿QUE ES TSP?',
            description:'*Es una metodología para administrar, guiar ingenieros en creación y mantenimiento de equipos de desarrollo de software, que consta de entre 3 y 20 ingenieros de software.'
            +'\n*Busca  dar una visión total del ciclo de vida del software.'+
            '\n\n* Metodología para administrar el trabajo de mejora y desarrollo de los procesos de software además de garantizar un entorno de trabajo agradable y natural para los equipos.' 
            +'\n\n*Brinda un conjunto de pasos bien estructurados que indican qué hacer en cada fase del desarrollo del proyecto y muestra cómo conectar cada fase para construir un producto completo, además brinda una ayuda acerca de como conformar equipos para el desarrollo de software de calidad.'
            +'\n\n*Es una solución basada en procesos para resolver problemas de negocio, tales como: predictibilidad de costo y tiempo, mejora de productividad y ciclos de desarrollo y mejora de calidad de productos.',
            image: 'image1.jpg',
        },
        {
            title: 'ESTRUCTURA DE TSP',
            description: `
            \nPSP: Planes personales, Método, planeación, Valor agregado, Métricas calidad, Procesos definidos.
            \nTSP Creación de Equipo: Compromiso, Planes agresivos, Calidad propia, Objetivos proyecto.
            \nTSP Trabajo en equipo: Prioridad en calidad, Costo de calidad, Seguir el proceso, Revisión de status y calidad.
            `,
            image: 'image2.png',
        },
        {
            title: 'Process elements',
            description:'',
            image: 'image3.png'
        },
        {
            title: 'Lauch process team',
            description: `
            Una vez que se lanza el equipo de TSP, la necesidad principal es garantizar que todos los miembros del equipo sigan
            El plan. Esto incluye los siguientes temas principales:\n
            • Liderando el equipo
            • proceso de disciplina
            • Seguimiento de problemas
            • comunicación
            • Informes de gestión
            • Mantener el plan.
            • Estimación de la finalización del proyecto.
            • Rebalanceo de la carga de trabajo del equipo.
            • Relanzamiento del proyecto.
            • Gestión de calidad TSP
            
            `,
            image: 'image4.png',
        },
        {
            title: 'TSP PROCESS FLOW',
            description: ``,
            image: 'image5.png',
        },
        {
            title: 'CICLOS DE VIDA.',
            description: `
              En las fases del Ciclo TSP se planea el número de ciclos. Dentro de cada ciclo se realiza:\n
              •Lanzamiento
              •Estrategia
              •Plan
              •Requisitos
              •Diseño
              •Implementación
              •Pruebas
              •Postmortem
            `,
            image: 'image6.png',
        }
      ]
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
            {this.state.content.map((item, index) => {
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

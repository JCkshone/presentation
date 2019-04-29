import React, { Component } from 'react';
import logo from './logo.svg';
import ListButton  from './ListButton'
import './App.css';
import ReactPageScroller from "react-page-scroller";
import Section1 from './Section1'
import TitleComponent from './TitleComponent'
import RolesComponent from './Roles'
import ArrowAnimationComponent from "./commonComponents/ArrowComponent/ArrowAnimationComponent";

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      roleInfo: [
        {
          title: 'RESPONSABILIDADES LÍDER DEL EQUIPO.',
          description: `
          •Motivar a los miembros del equipo.
          •Manejo de problemas de los clientes.
          •Interacción con la dirección.
          •Dirección día a día del trabajo.
          •Proteger los recursos del equipo.
          •Resolver problemas de equipo.
          •Realización de reuniones de equipo.
          •Informar sobre el estado del trabajo
          `,
          img: ''
        },{
          title: 'GERENTE DE DESARROLLO.',
          description: `
            •Lidera y guía al equipo en el diseño y desarrollando el producto
            •Liderar el equipo en la producción del desarrollo.
            •La estrategia y el diseño conceptual del producto.
            •Liderar el equipo en la producción del diseño.
            •Liderar al equipo en la implementación del producto.
          
          `,
          img: ''
        },{
          title: 'GERENTE DE PLANIFICACIÓN.',
          description: `
            •Apoya y guía al equipo planificando y siguiendo su trabajo.
            •Liderar al equipo en la elaboración del plan de tareas y horario para cada ciclo de desarrollo.
            •Liderar el equipo en la producción del equilibrado.
            •Seguimiento del progreso del equipo contra su plan.
          `,
          img: ''
        },{
          title: 'GERENTE DE CALIDAD / PROCESOS.',
          description: `
            •Apoya al equipo en la definición de sus necesidades de proceso, en la elaboración del plan de calidad y en el seguimiento del proceso y la calidad del producto.
            •Lidera el equipo en la producción y seguimiento de su plan de calidad.
            •Identifica donde el desempeño de calidad no alcanza los objetivos.
            •Lidera el equipo para definir, documentar y mantener sus procesos y estándares de desarrollo.
            •Actúa como moderador y dirigir todas las revisiones e inspecciones del equipo.
            
          
          `,
          img: ''
        },{
          title: 'GERENTE DE SOPORTE.',
          description: `
            •Ayuda al equipo a determinar, obtener y administrar las herramientas necesarias para satisfacer sus necesidades tecnológicas y de soporte administrativo.
            •Lidera el equipo para determinar sus necesidades de apoyo y obtener las herramientas e instalaciones necesarias.
            •Lidera el desarrollo y gestión del Sistema de Gestión de Cambios / Configuraciones.
            •Maneja el sistema de seguimiento de riesgos y problemas del equipo.
            •Actúa como defensor de la reutilización del equipo.
          `,
          img: ''
        },
      ]
    }

  }

  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
      <ReactPageScroller ref={c => this.reactPageScroller = c}>
        <TitleComponent elements={null}></TitleComponent>
        <Section1></Section1>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontFamily: 'Vidaloka, serif', flexDirection: 'column', height: '100%', fontSize: '1.5em', background: '#0083c7'
        }}>
          <h1>ROLES FUNDAMENTALES</h1>
          <p style={{fontSize: '1m',fontFamily: 'Philosopher, sans-serif',display: 'flex',
            width: '100%',paddingLeft: '38em',textAlign: 'start'}}>
              *Líder de proyecto<br></br>
              *Gerente de desarrollo.<br></br>
              *Gerente de planeación.<br></br>
              *Gerente de Calidad / Procesos<br></br>
              *Gerente de Soporte.<br></br>
              *Es necesario tener especialistas en:<br></br>
              *Calidad<br></br>
              *Procesos<br></br>
              *Admón. de Configuración<br></br>
              *Herramientas<br></br>
              *Almacenamiento de la información. (Bibliotecario)

          </p>
          <ArrowAnimationComponent></ArrowAnimationComponent>
        </div>
        <RolesComponent 
          data={this.state.roleInfo}
        ></RolesComponent>
        {
          this.state.roleInfo.map((e,key)=><div></div>)
        }
      </ReactPageScroller>
      </div>
    );
  }
}

export default App;

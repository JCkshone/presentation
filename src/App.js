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
      ],
      contentSlide: [
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
      ],

      tools:[
        {
            title: '',
            description: ``,
            image: 'pgina01.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina02.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina03.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina04.jpg',
          },
        {
          title: '',
          description: ``,
          image: 'pgina05.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina06.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina07.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina08.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina09.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina10.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina11.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina12.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina13.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina14.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina15.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina16.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina17.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina18.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina19.jpg',
        },
        {
          title: '',
          description: ``,
          image: 'pgina20.jpg',
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
        <Section1
          data={this.state.contentSlide}
        ></Section1>
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
        <div></div>

        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontFamily: 'Vidaloka, serif', flexDirection: 'column', height: '100%', fontSize: '1.5em', background: '#0083c7'
          }}>
            <h1>FORMATOS</h1>
            <ArrowAnimationComponent></ArrowAnimationComponent>
        </div>
        <Section1
          data={this.state.tools}
        ></Section1>
      </ReactPageScroller>
      </div>
    );
  }
}

export default App;

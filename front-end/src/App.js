import React, { Component } from 'react';
import RoutesApp from './RoutesApp';
import api from './Api'
import './App.css';

class App extends Component {

  state = {
    projects: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data)

    this.setState({ projects: response.data })
  }

  render() {

    // const { projects } = this.state;

    return (
      // <div>
      //   <h1>Listas projetos</h1>

      //   {projects.map(project => (
      //     <li key={project.name}>
      //       <p>{project.name}</p>
      //     </li>
      //   ))}
      // </div>
      <RoutesApp />
    );
  };
};

export default App;

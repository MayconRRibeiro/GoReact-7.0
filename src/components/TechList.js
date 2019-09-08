import React, { Component, Fragment } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  //static defaultProps = {
  //  tech: "Oculto"
  //};

  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    // por padrão a funcionalidade padrão de um formulário após um submit é
    // atualizar a tela, e com e.preventDefault, vamos prevenir o comportamento
    // padrão desse form, evitando refresh
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          // Como boa prática, deve ser definido a property value também no input
          // para garantir que caso o nosso estado newTech for alterado por algum
          // meio diferente do onChange o mesmo seja atualizado também.
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

import React, { Component, Fragment } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  //static defaultProps = {
  //  tech: "Oculto"
  //};

  state = {
    newTech: "",
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  // prevProps, prevState { Valores anteriores das Props e State }
  // utilizado _ no primeiro parâmetro para indicar que não vamos utilizar
  // prevProps
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  //componentWillUnmount() {}

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

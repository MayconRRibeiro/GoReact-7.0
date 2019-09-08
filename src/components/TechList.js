import React, { Component, Fragment } from "react";

class TechList extends Component {
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
            <li key={tech}>
              {tech}
              {/* 
                Não pode ser definido somente this.handleDelete(tech) pois precisamos
                passar uma tecnología como parâmetro e se passarmos a função com "()" ao
                invés de passarmos a função no evento onClick, estamos chamando a função
                nesse ponto. Por isso deve ser definido "() => this.method()" para que
                a função seja executada somente na hora de clicar. Referênciamos que 
                estamos criando a função e não chamando ela.
              */}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remover
              </button>
            </li>
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

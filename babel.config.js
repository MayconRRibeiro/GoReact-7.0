module.exports = {
  // quais presets do babel vão ser utilizados
  presets: [
    // Responsavel por alterar funcionalidades do JS que o browser não entende
    "@babel/preset-env",
    // Responsável por transformar as coisas que o navegador não entende do react
    "@babel/preset-react"
  ]
};

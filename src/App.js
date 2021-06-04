import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';
import {validarCPF, validarSenha} from './models/cadasstro'
import ValidacoesCadastro from './contexts/validacoesCadastro';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Container component="article" maxWidth="sm">
         <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>

         <ValidacoesCadastro.Provider value={{  cpf:validarCPF, 
                                                senha:validarSenha, 
                                                nome:validarSenha}}>
            <FormularioCadastro aoEnviar={aoEnviarFormulario} />
         </ValidacoesCadastro.Provider>
        
        </Container>
      </div>
    );
  }
}

function aoEnviarFormulario(dados) {
  console.log(dados)
}


// 
// 


export default App;

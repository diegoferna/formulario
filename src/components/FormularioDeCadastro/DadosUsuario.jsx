import React, { useState, useContext } from 'react'
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core'
import validacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../hooks/useErros';


function DadosUsuario({aoEnviar}) {

    const [email, setEmail]  = useState("")
    const [senha, setSenha]  = useState("");
    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos,possoEnviar] = useErros(validacoes)

    

    

    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
            
        }}>
            <TextField
                value={email}
                name="email"
                onChange={(event) => {setEmail(event.target.value)}}
                id="email" 
                label="email" 
                type="email" 
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />

            <TextField 
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.text}
                value={senha}
                name="senha"
                onChange={(event)=> { setSenha(event.target.value)}}
                id="senha" 
                label="senha" 
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />

            <Button
                type="submit"
                color="primary"
                variant="contained"
                >PRÓXIMO
            </Button>
        </form>
    );
}

export default DadosUsuario;
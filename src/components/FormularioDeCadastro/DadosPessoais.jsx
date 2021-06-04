import React, { useState, useContext } from 'react';
import {Button, TextField, FormControlLabel, Switch} from '@material-ui/core'
import validacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../hooks/useErros';

function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(validacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    

   

    return(
        <form onSubmit={(event)=> {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades, erros})
                }
            }}
                >
            <TextField 
                value={nome}
                onBlur={validarCampos}
                erros={!erros.nome.valido}
                helperText={erros.nome.valido}
                name="nome"
                id="nome" 
                label={"Nome" }
                variant="outlined" 
                margin="normal" 
                required
                fullWidth
                onChange={(event)=> {setNome(event.target.value)}}
            />

            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                name="sobrenome"
                fullWidth
                required
                onChange={
                    (event)=> {
                        setSobrenome(event.target.value)
                    }}
            />

            <TextField
                onBlur={validarCampos}
                name="cpf"
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.text}
                id="CPF" 
                label="CPF" 
                variant="outlined" 
                margin="normal" 
                required
                fullWidth
                onChange={(event)=> {setCPF(event.target.value)}}
            />

            <FormControlLabel 
                control={<Switch 
                            color="primary"
                            defaultChecked={promocoes}
                            onChange={(event)=> {
                                    setPromocoes(event.target.checked)
                                }}
                        />} 
                label="Promoções" 
                name="promocoes"
            />

            <FormControlLabel 
                control={<Switch 
                            color="primary"
                            defaultChecked={novidades} 
                            onChange={(event)=> {
                                setNovidades(event.target.checked)
                            }}
                            />} 
                name="novidades"
                label="Novidades" 
            />
                
            <Button 
                type="submit"
                variant="contained" 
                color="primary">PRÓXIMO
            </Button>
        </form>
    );
}

export default DadosPessoais;
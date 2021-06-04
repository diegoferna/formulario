import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'

function DadosEntrega ({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");


    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField 
                value={cep}
                name="cep"
                onChange={(event)=>{setCep(event.target.value)}}
                id="CEP" 
                label="CEP" 
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField  
                value={endereco}
                name="endereco"
                onChange={(event)=> {setEndereco(event.target.value)}}
                id="Endereco" 
                label="Endereço" 
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField 
                value={numero}
                name="numero"
                onChange={(event) => setNumero(event.target.value)}
                id="numero" 
                label="Numero" 
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={estado}
                name="estado"
                onChange={(event)=> {setEstado(event.target.value)}} 
                id="Estado" 
                label="Estado" 
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField 
                value={cidade}
                name="cidade"
                onChange={(event) => { setCidade(event.target.value)}}
                id="Cidade" 
                label="Cidade" 
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                >Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;
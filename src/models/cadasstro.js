function validarCPF(num) {
    if(num.length !== 11){ 
      return { 
               valido:false, 
               text:"CPF deve ter 11 digitos."
             }
    }else {
      return {valido:true, text:""}
    }
   }

   function validarSenha(senha) {
    if(senha.length <= 4 || senha.length > 72){ 
      return { 
               valido:false, 
               text:"Senha deve ter entre 4 e 72 digitos."
             }
    }else {
      return {valido:true, text:""}
    }
   }

   export {validarCPF, validarSenha};
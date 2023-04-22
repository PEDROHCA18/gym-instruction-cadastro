function validarSenha(){ 
senha = document.getElementsByName('senha').value; 
senha2 = document.getElementsByName('senha2').value; 
if(senha!= senha2) { 	
senha2.setCustomValidity("Senhas diferentes!"); 	
} else { 	
senha2.setCustomValidity(''); 
} 
senha.onchange = validatePassword; 
senha2.onkeyup = validatePassword;

function validate(){
  const error = document.getElementById("error");
  const email = document.getElementById("email");
  var errors = [];

  if ( email.value.indexOf('@')==-1
     || email.value.indexOf('.')==-1 )
	{
      errors.push("Por favor, informe um e-mail válido!");
	};


if (errors.length !== 0) {
    error.innerHTML = errors;
return false;
};
};

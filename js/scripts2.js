function validar(){

	var name, lastname, email, address, phone, pass, repeat;
     name=document.getElementById('nombre').value;
	 lastname=document.getElementById('apellido').value;
	 email=document.getElementById('correo').value;
	 address=document.getElementById('direccion').value;
	 phone=document.getElementById('telefono').value;
	 pass=document.getElementById('contra').value;
	 repeat=document.getElementById('repcontra').value;

expresion = /\w+@\w+\.+[a-z]/;
/*texto123@hotmail.com*/


if (name === "" || lastname === "" || email === "" || address === "" || phone === "" || pass === "" || repeat === "" ) {

  swal("Error!","Todos los campos son obligatorios!","warning");
  
  return false;

  }
  else if (name.length>10){

  	alert("El nombre es muy largo");
  return false;

  }else if(lastname.length>10){

  	alert("El apellido es muy largo");
  	return false;

  }else if(email.length>30){

  	alert("El email es muy largo");
  	return false;

  }else if (!expresion.test(email)) {

    alert("El email no es valido");
  	return false;

  }else if(address.length>30){

  	alert("La direcció es muy larga");
  	return false;

  }else if(phone.length>10){

  	alert("El telefono es muy largo");
  	return false;

  }else if(isNaN(phone)){

  	alert("El numero ingresado no es valido, solo se permite numeros");
  	return false;

  }else if(pass.length>15){

  	alert("la contraseña es muy larga");
  	return false;

  }else if (pass.length<5) {

    alert("la contraseña es muy debil");
    return false;

  }else if(repeat.length>15){

  	alert("la contraseña es muy larga");
  	return false;

  } else{

    alert("Han sido cambiados sus datos!");
  }

}


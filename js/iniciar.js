$('#btn-login').click(function() {
    var correo = $('#correo').val(),
        contrasena = $('#contrasena').val();

    if (correo == "" || contrasena == "") {
        swal('Digita todos los datos', '', 'error');
    } else if (correo == "daniel" && contrasena == "daniel") {
        alert('hi');
       window.navigate("../mecanico.html");  // mecanico
    } else if (correo == "nicolas" && contrasena == "nicolas") {
        /*$('#form-login').attr('action', 'Administrador.html');*/ // admin
    } else {
        swal('Digitaste algo mal', '', 'error');
    }
});
$('#btn-login').click(function() {
    var correo = $('#correo').val(),
        contrasena = $('#contrasena').val();

    if (correo == "daniel" && contrasena == "daniel") {
        $('#form-login').attr('action', 'mecanico.html'); // mecanico
    } else if (correo == "nicolas" && contrasena == "nicolas") {
        $('#form-login').attr('action', 'Administrador.html'); // admin
    } else {
        swal('Digitaste algo mal', '', 'error');
    }
});
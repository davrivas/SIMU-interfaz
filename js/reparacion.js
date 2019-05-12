$('#historial-placa').click(function(e) {
    var placa = $('#placa').val();
    if (placa == "") {
        swal('Debe digitar su numero de placa', '', 'error');
        e.stopPropagation();
    } else {
        $('#placa-ingresada').html(placa)
        placa = "";
    }
});

$('#agendar-dos').click(function() {
    if ($('#placa-agenda').val() == "" || $('#tipo-servicio').val() == "seleccione" || !($('#fecha-agenda').val()) || !($('#hora-agenda').val())) {
        swal('Debe digitar todos los campos', '', 'error');
    } else {
        swal('Cita agendada', '', 'success');
    }
});
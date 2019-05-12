(function() {
    var slider1 = document.getElementById('slider1'),
        slider2 = document.getElementById('slider2'),
        slider3 = document.getElementById('slider3'),
        encabezado = document.getElementById('encabezado')

        cambiarSlider1 = function() {
            encabezado.style.backgroundImage = "url(./images/motos/bajaj-ejemplo.jpg)";
        },

        cambiarSlider2 = function() {
            encabezado.style.backgroundImage = "url(./images/motos/honda-ejemplo.jpg)";
        }

        cambiarSlider3 = function() {
            encabezado.style.backgroundImage = "url(./images/motos/yamaha-ejemplo.jpg)";
            /*encabezado.css("background-image: url(../images/motos/yamaha-ejemplo.jpg);");*/
        };

    slider1.addEventListener("click", cambiarSlider1);
    slider2.addEventListener("click", cambiarSlider2);
    slider3.addEventListener("click", cambiarSlider3);
})();
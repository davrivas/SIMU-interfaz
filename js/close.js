(function() {
    var chat = document.getElementById('chat'),
        closeChat = document.getElementById('cerrar-chat'),
        cerrarChat = function() {
            chat.style.display = 'none';
        },

        califica = document.getElementById('califica-simu'),
        closeCalifica = document.getElementById('cerrar-califica'),
        cerrarCalifica = function() {
            califica.style.display = 'none';
        };

    closeChat.addEventListener("click", cerrarChat);
    closeCalifica.addEventListener("click", cerrarCalifica)
})();
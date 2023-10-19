// Buena suerte ! Espero que se te encianda la "bombilla"!

// obtengo el elemento de la ombilla


var bulb = document.getElementById('bulb');

//Agrego un evento clic al elemento de la bombilla

bulb.addEventListener('click', function() {


    //alterno entre las classes 'on' y 'off'
if (bulb.classList.contains('bulb-on')) {
    bulb.classList.remove('bulb-on');
    bulb.classList.add('bulb-off');
}
else {
    bulb.classList.remove('bulb-off');
    bulb.classList.add('bulb-on');
}

});
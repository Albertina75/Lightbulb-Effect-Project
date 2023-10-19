// Buena suerte ! Espero que se te encianda la "bombilla"!

// obtengo el elemento de la bombilla


var bulb = document.getElementById('bulb');

//Agrego un evento mouseover al elemento de la bombilla para apagarla

bulb.addEventListener("mouseover", function() {
    bulb.classList.remove("bulb-off");
    bulb.classList.add("bulb-on");
});


//Agrego un evento mouseover al elemento de la bombilla para encenderla

bulb.addEventListener('mouseout', function() {

    bulb.classList.remove('bulb-on');
    bulb.classList.add('bulb-off');


});
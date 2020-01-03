// Deteccion de resolucion de pantalla con tiempo de 3s.

var ancho = window.screen.width; 
var alto = window.screen.height;
setTimeout(detectar_resolucion, 3000);

function detectar_resolucion(){
    if (ancho < "800"){
        window.open("pop_up/index_low.html", "popup", "toolbar=no, location=no, resizable=no, width=800, height=400");
    }else if (ancho >= "800" && ancho <= "1200"){
        window.open("pop_up/index_medium.html", "popup", "toolbar=no, location=no, resizable=no, width=800, height=400");  
    } else {
        window.open("pop_up/index_high.html", "popup", "toolbar=no, location=no, resizable=no, width=800, height=400");
    }
}
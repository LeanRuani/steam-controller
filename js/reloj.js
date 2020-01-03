// Calcula fecha y horario para el build mas contador

function fecha_horario (){

    var hora, minutos, segundos, año, mes, dia, meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    var fecha_hora = new Date();
    hora = fecha_hora.getHours();
    minutos = fecha_hora.getMinutes();
    segundos = fecha_hora.getSeconds();
    año = fecha_hora.getFullYear();
    mes = fecha_hora.getMonth();
    dia = fecha_hora.getDate();

    var fecha_display = document.getElementById ('fecha');
    fecha_display.textContent = ` A dia ${dia} ${meses[mes]} del año ${año} a las ${hora}:${minutos}:${segundos} sigue la produccion a`;    

}

var producidos = 1583102;

function contador_producido(){
    var p = document.getElementById ('producido');
    producidos++;
    p.textContent = `${producidos}`;
}

setInterval (fecha_horario, 1000);
setInterval (contador_producido, 5000);
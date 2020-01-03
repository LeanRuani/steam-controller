// Validacion del formulario

function validar_formulario(){
    var nombre = document.getElementById("formulario").elements[0].value;
    var email = document.getElementById("formulario").elements[1].value;
    var texto = document.getElementById("formulario").elements[2].value;
    if  (nombre == "" || nombre.length == 3 || /^\s+$/.test(nombre)){
        alert ("Revisar campos marcados. Tienen que estar todos completos");
        marcar_error(0);
        return false;
    }else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))){
        alert ("Revisar campos marcados. Tienen que estar todos completos");
        marcar_error(1);
        return false;
    }else if (texto.length < 20){
        alert ("Revisar campos marcados. Al menos debe tener 20 caracteres");
        marcar_error(2);
        return false;
    }else{
        alert ("Datos enviados correctamente");
        return true;
    }
}

function marcar_error(i){
        var x = document.getElementById("formulario").elements[i];
        x.style.border="1px solid red";
}
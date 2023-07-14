"use strict";
var forma = document.getElementById("forma");
forma.addEventListener("submit", proceso, false);
function proceso(){
    var campo = forma["nombre"];
    var salida = document.getElementById("salidaNombre");
    var campo1= forma["secreto"];
    var salida1=document.getElementById("salidaSecreto");
    var campo2=forma["navegador"];
    var salida2=document.getElementById("salidaNavegador"); 
    var campo3= forma["email"];
    var salida3=document.getElementById("salidaEmail");
    var campo4=forma["usuario"];
    var salida4=document.getElementById("salidaUsuario");
    var campo5=forma["url"];
    var salida5=document.getElementById("salidaUrl");
    var campo6=forma["telefono"];
    var salida6=document.getElementById("salidaTelefono");
    var campo7=forma["verso"];
    var salida7=document.getElementById("salidaVerso");
salida.value=campo.value, salida1.value=campo1.value, salida2.value=campo2.value, salida3.value=campo3.value, 
salida4.value=campo4.value, salida5.value=campo5.value, salida6.value=campo6.value, salida7.value=campo7.value
}
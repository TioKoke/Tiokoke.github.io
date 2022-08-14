function encriptar() {
    var msg = document.getElementById("cuadroTexto").value.toLowerCase();
    var msgEncriptado = msg.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");
    document.getElementById("cuadroTextoEncriptado").innerHTML = msgEncriptado;
    document.getElementById("cuadroTexto").innerHTML = "";
  }
  
  function desencriptar() {
    var msg = document.getElementById("cuadroTexto").value.toLowerCase();
    var msgDesencriptado = msg.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");
    document.getElementById("cuadroTextoEncriptado").innerHTML = msgDesencriptado;
    document.getElementById("cuadroTexto").innerHTML = "";
  }
  
  function copiar() {
    var cont = document.querySelector("#cuadroTextoEncriptado");
    cont.select();
    document.execCommand('copy');
  }
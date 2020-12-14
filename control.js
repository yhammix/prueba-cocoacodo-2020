function validar() {
    var p1 = document.getElementById("usuario").value;
    var p2 = document.getElementById("pw").value;
    if (p1.length == ' ' || p2.length == ' ' || p1.indexOf("@") < 0) {
        alert("Los datos son invalidos");
        alert("La direccion de mail debe contener el simbolo @");
        location.reload();
    }
    else{
        alert("Binevenido " + p1);
    }
}
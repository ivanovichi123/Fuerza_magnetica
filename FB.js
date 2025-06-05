const iniciar = document.querySelector("#boton");

alert(iniciar);
iniciar.addEventListener("click", function() {
    let corriente1 = parseFloat(prompt("Ingresa el valor de la corriente 1 (A)"));
    let corriente2 = parseFloat(prompt("Ingresa el valor de la corriente 2 (A)"));
    let largo = parseFloat(prompt("Ingresa el largo de los conductores (m)"));
    let separacion = parseFloat(prompt("Ingresa la separación entre los alambres (m)"));

    let miu = 4 * Math.PI * 1e-7; 
    let feurza_T = (miu * corriente1 * corriente2) / (2 * Math.PI * separacion);
    let fuerzaTotal = fuerza_T * largo;

    alert("Fuerza total entre los conductores: " + fuerzaTotal + " N");
});

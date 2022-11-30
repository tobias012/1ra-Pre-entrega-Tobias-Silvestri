function pago(enc1, enc2, enc3, enc4, enc5){
    let pago = (enc1 + enc2 + enc3 + enc4 + enc5)/5;
    let mensaje = `El pago de la gente que ingreso a la web es de: ${pago}`;
}


let enc1 = parseInt(prompt("ingrese su edad"));
if (enc1 > 17){
    alert("eres mayor de edad, continua con la encuenta")
}else{
    alert("eres menor de edad, recomendamos que llame a un adulto para seguir")
}

let enc2 = parseInt(prompt("ingrese su DNI"));
if (enc2 > 0){
    alert("gracias, seguiremos con la encuesta")
}else{
    alert("si no sabes tu DNI, recomendamos tener su domento a mano para seguir")
}

let enc3 = parseInt(prompt("ingrese su direccion"));
if (enc3 > 0){
    alert("gracias, seguiremos con la encuesta")
}else{
    alert("gracias, seguiremos con la encuesta")
}

let enc4 = parseInt(prompt("ingrese su numero de tarjeta"));
if (enc4 > 0){
    alert("gracias, seguiremos con la encuesta")
}else{
    alert("si no sabes los datos de tu tarjeta, recomendamos tener su tarjeta a mano para seguir")
}

let enc5 = parseInt(prompt("ingrese su CUIL/CUIT"));
if (enc5 > 0){
    alert("gracias, seguiremos con la encuesta")
}else{
    alert("si no sabes tu CUIL/CUIT, recomendamos tener su domento a mano para seguir")
}

pago(enc1, enc2, enc3, enc4, enc5);
alert ("los datos fueron completados exitosamente")










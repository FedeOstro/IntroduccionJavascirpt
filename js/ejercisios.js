function ej1(){
  const nombre = prompt("Por favor, ingresa tu nombre:");
  const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato 'YYYY-MM-DD':");
  const edad = calcularEdad(fechaNacimiento);
  const mensaje = document.getElementById('mensaje1')
  mensaje.innerHTML = "Hola " + nombre + ", tienes " + edad + " años!"
}   
  
function ej2(){
  const frutaElegida = prompt("Ingrese la fruta:")
  const resultado = arrayFrutas(frutaElegida);
  const mensaje = document.getElementById('mensaje2')
  if(resultado == true){
    mensaje.innerHTML = "Si, tenemos " + frutaElegida
  }else{
    mensaje.innerHTML = "No, no tenemos " + frutaElegida
  }
} 

function ej3(){
  const num1 = 10
  const num2 = '10'
  let result1 = false
  let result2 = false
  if(num1 == num2){
    result1 = true
  }
  if(num1 === num2){
    result2 = true
  }
  const mensaje = document.getElementById('mensaje3')
  mensaje.innerHTML = "10 == '10' es " + result1 + " y 10 === '10' es " + result2 + "<br>10.6 es de tipo number" + "<br>True == 1 porque false significa 0"
}

function ej4(){
  const ciudad = {
    nombre: "Buenos Aires",
    fechaFundacion: "1856",
    poblacion: "7863501",
    extencion: "45654m²"
  } 
  const mensaje = document.getElementById('mensaje4')
  mensaje.innerHTML = " El nombre de la ciudad es " + ciudad.nombre + "<br>Su fecha de fundacion es " + ciudad.fechaFundacion + "<br>Su poblacion es " + ciudad.poblacion + "<br>Su extencion es " + ciudad.extencion
}

function ej5(){
  const numeros = [14, 2 ,15, 20, 3]
  const numerosx2 = multiplicarnums(numeros)
  const mensaje = document.getElementById('mensaje5')
  mensaje.innerHTML = numerosx2
}

function ej6(){
  const piramide1 = ["*", "**", "***", "****", "*****"]
  const piramide2 = ["----*----", "---***---", "--*****--", "-*******-", "*********"]
  for(const string of piramide1){
    console.log(string)
  }
  for(const string of piramide2){
    console.log(string1)
  }
}

function ej7(){
  const nombreñ = prompt("Ingrese una lista de nombres separados por coma")
  let nombres = nombreñ.split(',')
  let nombresconA = empiezacona(nombres)
  console.log(nombresconA)
  const mensaje = document.getElementById('mensaje7')
  mensaje.innerHTML = nombresconA 
}

function ej8(){
  const cadena = prompt("Ingrese una oracion")
  const palabraRemplasar = prompt("Ingrese una palabra de la oracion anterior que quieras remplazar")
  const palabraRemplazo = prompt("Ingrese una palabra para usar de remplazo")
  const cadena2 = cadena.replace(palabraRemplasar, palabraRemplazo)
  const mensaje = document.getElementById('mensaje8')
  mensaje.innerHTML = cadena2
}

function ej9(){
  const cadena = prompt("Ingrese una oracion")
  const numero = prompt("Ingrese un numero para cortar la oracion anterior")
  const cadena2 = cadena.slice(numero)
  const mensaje = document.getElementById('mensaje9')
  mensaje.innerHTML = cadena2
}

function ej10(){
  const cadena = prompt("Ingese una lista de cosas separadas por coma")
  const cadena2 = cadena.replaceAll(',', '-')
  const mensaje = document.getElementById('mensaje10')
  mensaje.innerHTML = cadena2
}

function ej11(){
  const valores = prompt("Ingrese una lista de objetos con sus respectivos valores: Total y separados por coma")
  total = calcularRecaudacion(valores);
  const mensaje = document.getElementById('mensaje11');
  mensaje.innerHTML = total
}
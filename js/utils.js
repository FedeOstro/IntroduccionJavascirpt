function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNacimientoArray = fechaNacimiento.split("-");
    const añoNacimiento = parseInt(fechaNacimientoArray[0]);
    const mesNacimiento = parseInt(fechaNacimientoArray[1]) - 1; 
    const diaNacimiento = parseInt(fechaNacimientoArray[2]);
    
    let edad = fechaActual.getFullYear() - añoNacimiento;
    if (fechaActual.getMonth() < mesNacimiento || (fechaActual.getMonth() === mesNacimiento && fechaActual.getDate() < diaNacimiento)) {
      edad--;
    }
    return edad;
}

function arrayFrutas(frutaElegida){
  const frutas = ["manzana", "banana", "naranja", "mandarina", "pomelo", "sandia", "kiwi", "uva", "melon", "frutilla"]
  let resultado = false;
  frutas.forEach(String => {
    if(String == frutaElegida){
      resultado = true
    }
  });
  return resultado;
}

function multiplicarnums(numeros){
  let numerosx2 = []
  numeros.forEach(numero => {
    numerosx2.push(numero * 2)
  })
  return numerosx2
}

function empiezacona(nombres){
  let nombrescona = []  
  nombres.forEach(n => {
    if (n.startsWith("A")) { 
      nombrescona.push(n); 
    }
  })
  return nombrescona;
}

function calcularRecaudacion(valores) {
  var pedidos = valores.split(', ');
  var totalRecaudado = 0;
  for (var i = 0; i < pedidos.length; i++) {
    var pedido = pedidos[i].split(':');
    var total = parseFloat(pedido[1]);
    totalRecaudado += total;
  }
  return totalRecaudado
}
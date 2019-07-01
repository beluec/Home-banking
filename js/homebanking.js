//Declaración de variables
let nombreUsuario= "Belén López";
let saldoCuenta = 10000;
let limiteExtraccion = 1000;

let valorServicioagua=350;
let ValorServiciotelefono =425;
let ValorServicioluz = 210;
let ValorServiciointerntet = 570;

let cuentaAmiga1 =1234567;
let cuentaAmiga2 =7654321;
let codigoDeSeguridad = 1234;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion ();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar //
function cambiarLimiteDeExtraccion() {
    let nuevolimite = parseFloat(prompt("Ingrese nuevo valor de limite de extracción"));
   
        if (nuevolimite !== null && !isNaN(nuevolimite)){
              alert("Su nuevo limite de extraccion es: $" + nuevolimite);
              actualizarLimiteEnPantalla(limiteExtraccion = nuevolimite);
            } else { alert ("Ingrese un número válido");
}
}
function extraerDinero() {
    let saldoAnterior = saldoCuenta;
    let dineroARetirar = parseFloat(prompt("¿Cúanto dinero desea retirar?"));
   
     if (dineroARetirar ==null || isNaN(dineroARetirar)){
        alert ("Ingrese un número válido")
    } else if (dineroARetirar>saldoCuenta) {
        alert ("No se puede realizar esta operación, no dispone de fondos suficientes"); return saldoCuenta = saldoCuenta;
        } else if (dineroARetirar>limiteExtraccion){
            alert ("Su límite de extracción no permite esta transacción"); return saldoCuenta=saldoCuenta;
            } else if (dineroARetirar % 100 !==0){
                alert ("Solo puedes extraer billetes de $100"); return saldoCuenta = saldoCuenta;
            }      else { 
                    actualizarSaldoCuenta(saldoCuenta - dineroARetirar);
                    alertarCambioEnSaldo(`Has retirado: $${dineroARetirar}`,saldoAnterior,saldoAnterior);
    }
}

function depositarDinero() {
    let saldoAnterior = saldoCuenta;
    let dineroADepositar = parseFloat(prompt("¿Cúanto dinero desea depositar?"));
        if (dineroADepositar == null || isNaN (dineroADepositar)){
            alert ("Ingrese un monton válido");
         } else{
    actualizarSaldoCuenta(saldoCuenta + dineroADepositar);
    alertarCambioEnSaldo(`Has depositado: $${dineroADepositaar}`, saldoAnterior);
}
}
function alertarCambioEnSaldo(mensaje, saldoAnterior) {
    alert(`${mensaje}\n
Saldo anterior: $${saldoAnterior}\n
Saldo actual: $${saldoCuenta}`)
 }

function pagarServicio() {

    var ServiciosAPagar= prompt("Ingrese el numero que corresponda al servicio que desea pagar: \n 1 agua\n 2 luz \n 3 telefono \n 4 Internet" );
     ServiciosAPagar=Number(ServiciosAPagar); 

        if (ServiciosAPagar == null || isNaN(ServiciosAPagar)) {
            alert("Ingrese un número válido");
            }    else{
        switch (ServiciosAPagar) {
        case 1: 
            ServiciosCobrados (valorServicioagua, "servicio de agua ");
            break;
        case 2:
            ServiciosCobrados (ValorServicioluz, "servicio de luz ");
            break;
        case 3:
            ServiciosCobrados(ValorServiciotelefono, "servicio de teléfono ");
            break;
        case 4:
            ServiciosCobrados(ValorServiciointerntet, "servicio de Internet ");
            break;
        default: ("No existe el servicio seleccionado");
            break;
    }
}
}
function ServiciosCobrados(valor, nombreServicio) {
   alert ("Ha decidido pagar el "+ nombreServicio + "$ " + valor + "\n" + "Saldo actual: $ " + (saldoCuenta-valor) + "\n" + "Saldo anterior: $ " + (saldoCuenta));
   actualizarSaldoCuenta (saldoCuenta -valor);

   }

function transferirDinero() {
    let transferencia = parseFloat(prompt("Ingrese el valor que desea transferir"));
     if (transferencia == null || isNaN(transferencia)) {
         alert ("Ingrese un monto válido"); return saldoCuenta = saldoCuenta;
     } else if  (transferencia>saldoCuenta) {
            alert ("No se puede realizar esta transacción"); return saldoCuenta = saldoCuenta;
      } else if (transferencia<saldoCuenta){
           let cuenta =prompt ("Ingrese el número de cuenta");
           if (cuenta ==cuentaAmiga1 || cuenta ==cuentaAmiga2){
               alert ("Usted ha transferido $ "+ transferencia + "\n" +  "Cuenta destino: " + cuenta);
            } else { alert("Esta no es una cuenta amiga");return saldoCuenta=saldoCuenta;}
    }

    actualizarSaldoCuenta (saldoCuenta-transferencia);
}
    
function iniciarSesion(){
    
    let codigo = parseInt(prompt ("Ingrese el código de su cuenta"));

 if (codigo ==codigoDeSeguridad) {
     alert ("Bienvenida/o " + nombreUsuario + " ya puedes empezar a realizar operaciones");
     } else if (codigo != codigoDeSeguridad)
         { alert ("Tu código es incorrecto.  Tu dinero ha sido retenido por cuestiones de seguridad")
          return saldoCuenta = 0, limiteExtraccion = 0}
    }  



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoCuenta(nuevoValor) {
    saldoCuenta = nuevoValor;
    actualizarSaldoEnPantalla();
}

 function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta; 
 }

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



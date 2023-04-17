let tipoDeHabitacion
let tipoDeComodidad
let reserva
let reserva1
let comodidad
let comodidad1
let dia = 0
let precio = 0

const carrito = []

//Info sobre las habitaciones
class Habitacion{
    constructor (tipo, capacidad, comodidades, precio){
        this.tipo = tipo
        this.capacidad = capacidad
        this.comodidades = comodidades
        this.precio = precio
    }
}
const habitacion1 = new Habitacion ("Habitación Single", "1 Personas" , "TV Cable, Aire Acondicionado, Wifi, Ropa de Cama, Toallas", 1200 )
const habitacion2 = new Habitacion ("Habitación Doble", "2 Personas" , "TV Cable, Aire Acondicionado, Wifi, Ropa de Cama, Toallas", 3200)
const habitacion3 = new Habitacion ("Habitación Triple", "3 Personas" , "TV Cable, Aire Acondicionado, Wifi, Ropa de Cama, Toallas", 6000 )

//Info sobre Comodidades
class Comodidades{
    constructor (comodidades, precio){
        this.comodidades = comodidades
        this.precio = precio
    }
}
const comodidades1 = new Comodidades ("Desayuno Mediterraneo", 600 )
const comodidades2 = new Comodidades ("Dia de Spa", "2 Personas", 1100)
const comodidades3 = new Comodidades ("Transporte Aeropuerto", 1300 )

//Funcion Ingrese su nombre

let nombre = prompt("Por favor ingrese su nombre")

//Funcion Seleccionar Tipo de Habitacion
const seleccionarHabitacion = () => {
    do{
        tipoDeHabitacion = (prompt ("¿Qué tipo de habitación desea? \n1- Habitación Single \n2- Habitación Doble \n3- Habitación Triple"))

        if (tipoDeHabitacion == "1"){
            detalleDeHabitacion(habitacion1)
            carrito.push(habitacion1)

        }else if (tipoDeHabitacion == "2"){
            detalleDeHabitacion(habitacion2)
            carrito.push(habitacion2)

        }else if (tipoDeHabitacion == "3"){
            detalleDeHabitacion(habitacion3)
            carrito.push(habitacion2)

        }else{
            alert("Por favor ingrese una habitacion")
            precio = 0
        }

    }while (tipoDeHabitacion != "1" && tipoDeHabitacion != "2" && tipoDeHabitacion != "3")

}
//alert ("Usted ha seleccionado" + tipoDeHabitacion)

//Funcion agregar comodidades

/*
const seleccionarComodidades = () => {
    do{
        tipoDeComodidad = parseInt(prompt ("Comodidades: \n1- Desayuno Continental = $300 extra x dia \n2- Media Pensión = $600 extra x dia \n3- Pensión Completa = $1000 extra x día  "))

        if(tipoDeComodidad == "1"){
                carrito.push(comodidades1)

            }else if (tipoDeComodidad == "2"){
                carrito.push(comodidades2)

            }else if (tipoDeComodidad == "3"){
                carrito.push(comodidades3)
            }else{
            alert ("Muchas gracias procedemos al resumen de compra")
        }

    }while (tipoDeComodidad != "1" && tipoDeComodidad != "2" && tipoDeComodidad != "3")

}

*/

const seleccionarComodidades = () => {

    do{
        comodidad = prompt (nombre + "\nDesea agregar Desayuno Continental, Media Pensión o Pensión Completa? \nsi \nno ")
        comodidad1 = comodidad.toUpperCase ()
        if (comodidad1 == "SI"){

            do{
                tipoDeComodidad = parseInt(prompt ("Comodidades: \n1- Desayuno Continental = $300 extra x dia \n2- Media Pensión = $600 extra x dia \n3- Pensión Completa = $1000 extra x día  "))
        
                if(tipoDeComodidad == "1"){
                        carrito.push(comodidades1)
        
                    }else if (tipoDeComodidad == "2"){
                        carrito.push(comodidades2)
        
                    }else if (tipoDeComodidad == "3"){
                        carrito.push(comodidades3)
                    }else{
                    alert ("Por favor ingrese una de las opciones")
                }
        
            }while (tipoDeComodidad != "1" && tipoDeComodidad != "2" && tipoDeComodidad != "3")

        }else if(comodidad1 == "NO"){
            alert ("Muchas gracias procedemos")
        }
    }while (comodidad1 != "SI" && comodidad1 != "NO") 

}


//Funcion Seleccionar Cantidad de Dias

const seleccionarCantDias = () => {
    do{
        dia = parseInt(prompt ("Cuantos dias desea hospedarse?"))
    
        if (dia >= 1){
            return dia    
        }else {
            alert ("debe ingresar 1 o mas dias")
        }
    }while (isNaN(dia) || dia == 0)
    
}
console.log (dia)

const detalleDeHabitacion = (hab) => {
    alert(hab.tipo + "\n" + hab.comodidades + "\n" + "\n" + "$ " + hab.precio)
}
const resumenReserva = () => {
    const total = carrito.reduce((total,habitacion)=> total + habitacion.precio,0)
    const reservaTotal = parseInt (total)
    alert("CARRITO:" + "\n" + "El costo TOTAL de su reserva es de: $" + reservaTotal * dia)
}
const confirmacion = () => { 
    alert("Su reserva ha sido realizada con éxito. Muchas gracias, te esperamos!")
}


//Inicializando
do{
    reserva1 = prompt (nombre + "\nBienvenido a nuestro sitio \nDesea realizar una reserva? \nsi \nno ")
    reserva = reserva1.toUpperCase ()
    if (reserva == "SI"){
        seleccionarHabitacion()
        seleccionarComodidades ()
        seleccionarCantDias ()
        resumenReserva ()
        confirmacion ()

    }else if(reserva == "NO"){
        alert ("Muchas gracias por visitar nuestro sitio")
    }
}while (reserva != "SI" && reserva != "NO") 


console.log(carrito)
























    let volumen=0;
    
//Se comienza el proceso de produccion de la harina de pescado ingresando la materia prima
//que en este caso sería el residuo de pescado, una vez que ingresa, se puede trasnferir
//al cocinador para cocinar el mismo

    const pileta = {
        materiaPrima: "Pescado",
        capacidad: 10000,
        volumenActual: 0,
        ingresoPescado: function(volumen){
            if (volumen <= this.capacidad && volumen <= (this.capacidad-this.volumenActual)){
            this.volumenActual += volumen
            console.log(`Se ingresan ${volumen} kilos de pescado`)
            }else{
            console.log(`Se alcanzo la capacidad maxima de pescado en la pileta`)
            }
        },
        transferirPescado: function(volumen){
            if (this.volumenActual > 0 && volumen <= this.volumenActual && volumen <= (cocinador.capacidad-cocinador.volumenCrudo)){
                this.volumenActual -= volumen
                cocinador.volumenCrudo += volumen
                console.log(`Se transfirieron ${volumen} kilos de pescado al cocinador`)
            }else if(this.volumenActual == 0){
                console.log(`No se puede transferir porque no hay pescado en pileta`)
            }else if(volumen >= this.volumenActual){
                console.log(`Se quieren trasnferir ${volumen} kilos de pescado, pero solo hay disponibles ${this.volumenActual}`)
            }else{
                console.log(`La cantidad de pescado que quiere transferir supera la capacidad maxima del cocinador`)
            }
        },
    }

//El cocinador recibe pescado crudo y lo cocina antes de ser trasnferido a la prensa

    const cocinador = {
        materiaPrima: "Pescado",
        capacidad: 10000,
        volumenCrudo: 0,
        volumenCocinado: 0,
        temperaturaOptima: 0,
        velocidadRodamiento: 0,
        tiempoCoccion: 0,
        cocinarPescado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenCrudo){
                this.volumenCrudo -= volumen
                this.volumenCocinado += volumen
                console.log(`Se cocinaron ${volumen} de pescado crudo`)
            }else if(volumen == 0){
                console.log(`No hay pescado crudo para cocinar`)
            }else{
                console.log(`Se quieren cocinar ${volumen} kilos de pescado pero solo hay disponible ${this.volumenCrudo}`)
            }
        },
        transferirPescado: function(volumen){
            if (this.volumenCocinado > 0 && volumen <= this.volumenCocinado && volumen <= (prensa.capacidad-prensa.volumenActual)){
                this.volumenCocinado -= volumen
                prensa.volumenActual += volumen
                console.log(`Se transfieren ${volumen} de pescado cocinado a la prensa`)
            }else{
                if (this.volumenCocinado == 0){
                    console.log(`No se puede transferir porque no hay pescado cocinado`)
                }else if (volumen > this.volumenCocinado){
                    console.log(`Usted quiso transferir ${volumen} kilos de pescado pero solo hay disponible ${this.volumenCocinado}`)
                }else{
                    console.log(`La cantidad de pescado cocinado que quiere transferir supera la capacidad maxima de la prensa`)
                }
            }
        },
    }

//La prensa se encarga de prensar el pescado cocinado para extrarle la mayor cantidad de agua posible
//antes de transferirlo al rotadisco secarlo

    const prensa = {
        materiaPrima: "Prensado",
        capacidad: 10000,
        volumenActual: 0,
        volumenPrensado: 0,
        temperatura: 0,
        rodamiento: 0,
        prensarPescado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenActual){
                this.volumenActual -= volumen
                this.volumenPrensado += volumen
                console.log(`Se prensan ${volumen} de pescado previamente cocinado`)
            }else if(volumen == 0){
                console.log("No hay pescado para prensar")
            }else{
                console.log("Se deja de ingresar pescado por equipo sobrecargado")
            }
        },
        transferirPrensado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenPrensado && volumen <= (rtd.capacidad-rtd.volumenActual)){
                this.volumenPrensado -= volumen
                rtd.volumenActual += volumen
                console.log(`Se transfieren ${volumen} kilos de prensado al rotadisco`)
            }else if(volumen == 0){
                console.log(`No hay pescado prensado`)
            }else if(volumen > this.volumenPrensado){
                console.log(`Se quieren transferir ${volumen} kilos de prensado pero solo hay ${this.volumenPrensado} disponibles`)
            }else{
                console.log(`La cantidad de prensado que quiere transferir supera la capacidad maxima del rotadisco`)
            }
        },
    }

//El rotadisco se encarga de secar la harina para que salga con los parametros requerido
//por los mercados para que pueda ser comercializada, se transfiere al silo

    const rtd = {
        materiaPrima: "Harina de Pescado",
        capacidad: 10000,
        volumenActual: 0,
        volumenSecado: 0,
        temperatura: 0,
        amperaje: 0,
        secarPrensado: function(volumen){
            if (volumen > 0 && volumen <= this.volumenActual){
                this.volumenActual -= volumen
                this.volumenSecado += volumen
                console.log(`Se secan ${volumen} kilos del prensado ingresado al rotadisco`)
            }else if(volumen == 0){
                console.log("El rotadisco se encuentra vacio")
            }else{
                console.log("Se deja de ingresar prensado por equipo sobrecargado")
            }
        },
        trasnferirHarina: function(volumen){
            if(volumen > 0 && volumen <= this.volumenSecado && volumen <= (silo.capacidad - silo.volumenActual)){
                this.volumenSecado -= volumen
                silo.volumenActual += volumen
                console.log(`Se transfieren ${volumen} kilos de harina al silo`)
            }else if(volumen == 0){
                colsole.log(`El silo se encuentra vacio`)
            }else if(volumen > this.volumenSecado){
                console.log(`Se quieren transferir ${volumen} kilos de harina pero solo hay ${this.volumenSecado} disponibles`)
            }else{
                console.log(`La cantidad de prensado que quiere transferir supera la capacidad maxima del silo`)
            }
            
        },
    }

//En el silo se almacena la harina antes de ser embolsada en bolsas de 50Kg, una ves que
//se sabe la cantidad de bolsas necesarias para ser comercializadas, se procede a sacar
//bolsas que seran agregadas a distintos lotes

    const silo={
        producto: "Harina de Pescado",
        capacidad: 10000,
        volumenActual: 0,
        averiguarBolsas: function(){
            let bolsasDisponibles = Math.floor(this.volumenActual / 50)
            console.log(`La cantidad de bolsas disponibles es ${bolsasDisponibles}`)
            return bolsasDisponibles
        },
        sacarBolsas: function(cantidadBolsas){
            if(cantidadBolsas <= Math.floor(this.volumenActual / 50)){
                this.volumenActual -= cantidadBolsas * 50
                organizadorLote.bolsasTotales += cantidadBolsas
                console.log(`Se embolsaron ${cantidadBolsas} bolsas de 50 kilos`)
            }
        },
    }

//Los lotes se organizan con una cantidad limitada de bolsas, cada lote contiene un maximo de 10 bolsas
//Cuando se completa un lote se comienza con otro, para identificarlos se van enumerando "Lote 1 - Lote 2 - etc"

    const organizadorLote={
        bolsasTotales: 0,
        crearLote: function(){
            let lotesDisponibles = Math.floor(this.bolsasTotales / 10);
            if(lotesDisponibles > 0){
                this.bolsasTotales -= lotesDisponibles * 10
                for(let i = 0; i < lotesDisponibles; i++){
                    Lotes.push(`Lote numero ${Lotes.length + 1}`)
                    console.log(`Se crean ${Lotes.length + 1} Lotes`)
                }
            }
            // Se guardan las bolsas totales en localStorage
            localStorage.setItem('bolsasTotales', this.bolsasTotales);
        },
    }

    const Lotes = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------------- DOM y Event Listener de Pileta ---------------------------------- //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputPileta = document.getElementById('input1')
let boton1 = document.getElementById("btn1")
let boton2 = document.getElementById("btn2")
let volumenPileta = document.getElementById('volumenActual')

function insertarPescadoPileta () {
    let numero = parseInt(inputPileta.value)
    pileta.ingresoPescado(numero)
    inputPileta.value = ''
    volumenPileta.innerHTML = `Volumen Actual: <strong>${pileta.volumenActual} Kg</strong>`
}

function transferirPescadoCocinador () {
    let numero = parseInt(inputPileta.value)
    pileta.transferirPescado(numero)
    inputPileta.value = ''
    volumenPileta.innerHTML = `Volumen Actual: <strong>${pileta.volumenActual} Kg</strong>`
    volumenCrudo.innerHTML = `Volumen Crudo: <strong>${cocinador.volumenCrudo} Kg</strong>`
}

boton1.addEventListener('click', insertarPescadoPileta)
boton2.addEventListener('click', transferirPescadoCocinador)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------- DOM y Event Listener de Cocinador --------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let volumenCrudo = document.getElementById('volumenCrudo')
let volumenCocinado = document.getElementById('volumenCocinado')
let btnCocinar = document.getElementById('btnCocinar')
let inputCocinador = document.getElementById('inputCocinador')
let btnTransCocinado = document.getElementById('btnTransCocinado')

function cocinarPescadoCrudo () {
    let numero = parseInt(inputCocinador.value)
    cocinador.cocinarPescado(numero)
    inputCocinador.value = ''
    volumenCrudo.innerHTML = `Volumen Crudo: <strong>${cocinador.volumenCrudo} Kg</strong>`
    volumenCocinado.innerHTML = `Volumen Cocinado: <strong>${cocinador.volumenCocinado} Kg</strong>`
}

function transferirPescadoCocinado () {
    let numero = parseInt(inputCocinador.value)
    cocinador.transferirPescado(numero)
    inputCocinador.value = ''
    volumenCocinado.innerHTML = `Volumen Cocinado: <strong>${cocinador.volumenCocinado} Kg</strong>`
    volumenCocinadoPrensa.innerHTML = `Volumen Cocinado: <strong>${prensa.volumenActual} Kg</strong>`
}

btnCocinar.addEventListener('click', cocinarPescadoCrudo)
btnTransCocinado.addEventListener('click',transferirPescadoCocinado)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------- DOM y Event Listener de la Prensa --------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let volumenCocinadoPrensa = document.getElementById('volumenCocinadoPrensa')
let volumenPrensado = document.getElementById('volumenPrensado')
let btnCocinado = document.getElementById('btnCocinado')
let inputPrensa = document.getElementById('inputPrensa')
let btnTransPrensado = document.getElementById('btnTransPrensado')

function prensarCocinado () {
    let numero = parseInt(inputPrensa.value)
    prensa.prensarPescado(numero)
    inputPrensa.value = ''
    volumenCocinadoPrensa.innerHTML = `Volumen Cocinado: <strong>${prensa.volumenActual} Kg</strong>`
    volumenPrensado.innerHTML = `Volumen Prensado: <strong>${prensa.volumenPrensado} Kg</strong>`
}

function transferirPrensado () {
    let numero = parseInt(inputPrensa.value)
    prensa.transferirPrensado(numero)
    inputPrensa.value = ''
    volumenPrensado.innerHTML = `Volumen Prensado: <strong>${prensa.volumenPrensado} Kg</strong>`
    volumenPrensadoRtd.innerHTML = `Volumen Rotadisco: <strong>${rtd.volumenActual} Kg</strong>`
}

btnCocinado.addEventListener('click', prensarCocinado)
btnTransPrensado.addEventListener('click', transferirPrensado)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------- DOM y Event Listener de Rotadisco --------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let volumenPrensadoRtd = document.getElementById('volumenPrensadoRtd')
let volumenHarinaRtd = document.getElementById('volumenHarinaRtd')
let btnSecarHarina = document.getElementById('btnSecarHarina')
let inputRtd = document.getElementById('inputRtd')
let btnTransHarina = document.getElementById('btnTransHarina')

function secarPrensado () {
    let numero = parseInt(inputRtd.value)
    rtd.secarPrensado(numero)
    inputRtd.value = ''
    volumenPrensadoRtd.innerHTML = `Volumen Prensado: <strong>${rtd.volumenActual} Kg</strong>`
    volumenHarinaRtd.innerHTML = `Volumen Harina: <strong>${rtd.volumenSecado} Kg</strong>`
}

function trasnferirHarinaLote () {
    let numero = parseInt(inputRtd.value)
    rtd.trasnferirHarina(numero)
    inputRtd.value = ''
    volumenHarinaRtd.innerHTML = `Volumen Harina: <strong>${rtd.volumenSecado} Kg</strong>`
    volumenHarinaSilo.innerHTML = `Volumen Harina: <strong>${silo.volumenActual} Kg</strong>`
}

btnSecarHarina.addEventListener('click', secarPrensado)
btnTransHarina.addEventListener('click', trasnferirHarinaLote)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------- DOM y Event Listener del Silo --------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////////////////////

let volumenHarinaSilo = document.getElementById('volumenHarinaSilo')
let cantidadBolsaSilo = document.getElementById('cantidadBolsaSilo')
let btnBolsaSilo = document.getElementById('btnBolsaSilo')
let inputSilo = document.getElementById('inputSilo')
let btnSacarBolsas = document.getElementById('btnSacarBolsas')



function averiguarBolsaSilo () {
    let bolsas = silo.averiguarBolsas()
    inputSilo.value = ''
    cantidadBolsaSilo.innerHTML = `Bolsas de 50 Kg: <strong>${bolsas} bolsas</strong> `
}

function sacarBolsaSilo () {
    let numero = parseInt(inputSilo.value)
    silo.sacarBolsas(numero)
    let bolsas = silo.averiguarBolsas()
    inputSilo.value = ''
    volumenHarinaSilo.innerHTML = `Volumen Harina: <strong>${silo.volumenActual} Kg</strong>`
    cantidadBolsaSilo.innerHTML = `Bolsas de 50 Kg: <strong>${bolsas}</strong> `
    bolsasDisponibles.innerHTML = `Bolsas Disponibles: <strong>${organizadorLote.bolsasTotales} bolsas</strong>`
}

btnBolsaSilo.addEventListener('click', averiguarBolsaSilo)
btnSacarBolsas.addEventListener('click', sacarBolsaSilo)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------- DOM y Event Listener de Lotes --------------------------------- //
///////////////////////////////////////////////////////////////////////////////////////////////////////

let bolsasDisponibles = document.getElementById('bolsasDisponibles')
let pilasDisponibles = document.getElementById('pilasDisponibles')
let btnCrearLote = document.getElementById('btnCrearLote')

const storedBolsasTotales = localStorage.getItem('bolsasTotales');
    if (storedBolsasTotales) {
        organizadorLote.bolsasTotales = parseInt(storedBolsasTotales);
}

function funCrearLote () {
    organizadorLote.crearLote()
    bolsasDisponibles.innerHTML = `Bolsas Disponibles: <strong>${organizadorLote.bolsasTotales} bolsas</strong>`
    pilasDisponibles.innerHTML = `Cantidad de Lotes: <strong>${Lotes.length}</strong>`
}

btnCrearLote.addEventListener('click', funCrearLote)

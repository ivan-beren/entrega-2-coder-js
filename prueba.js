    let volumen=0;
    
    const pileta = {
        materiaPrima: "Pescado",
        capacidad: 50000,
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

    const cocinador = {
        materiaPrima: "Pescado",
        capacidad: 2000,
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

    const prensa = {
        materiaPrima: "Prensado",
        capacidad: 2000,
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

    const rtd = {
        materiaPrima: "Harina de Pescado",
        capacidad: 2000,
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
        TrasnferirHarina: function(volumen){
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

    const silo={
        producto: "Harina de Pescado",
        capacidad: 25000,
        volumenActual: 0,
        averiguarBolsas: function(){
            let bolsasDisponibles = Math.floor(this.volumenActual / 50)
            alert(`La cantidad de bolsas disponibles es ${bolsasDisponibles}`)
        },
        sacarBolsas: function(cantidadBolsas){
            if(cantidadBolsas <= Math.floor(this.volumenActual / 50)){
                this.volumenActual -= cantidadBolsas * 50
                organizadorLote.bolsasTotales += cantidadBolsas
                console.log(`Se embolsaron ${cantidadBolsas} bolsas de 50 kilos`)
            }
        },
    }

    const organizadorLote={
        bolsasTotales: 0,
        crearLote: function(){
            let lotesDisponibles = Math.floor(this.bolsasTotales / 10);
            if(lotesDisponibles > 0){
                this.bolsasTotales -= lotesDisponibles * 10
                for(let i = 0; i < lotesDisponibles; i++){
                    Lotes.push(`Lote numero ${Lotes.length + 1}`)
                }
            }
        },
    }

    const Lotes = [];


    
function accionPescado () {
    let ingreso = parseInt(prompt("Ingrese la cantidad de pescado que ingresa a la pileta y luego va al cocinador"))
    if(ingreso > 0){
        pileta.ingresoPescado(ingreso)

        pileta.transferirPescado(2000)
    }
}

function accionCocinador () {
    let ingreso = parseInt(prompt(`Hay ${cocinador.volumenCrudo} kilos de pescado en el cocinador. ¿Cuantos deseas cocinar y trasnferir?`))
    if(ingreso > 0 && ingreso <= cocinador.volumenCrudo){
        cocinador.cocinarPescado(ingreso)
        cocinador.transferirPescado(ingreso)
    }
}

function accionPrensa () {
    let ingreso = parseInt(prompt(`Hay ${prensa.volumenActual} kilos de pescado cocinado en la prensa. ¿Cuanto deseas prensar y transferir al rotadisco?`))
    if(ingreso > 0 && ingreso <= prensa.capacidad){
        prensa.prensarPescado(ingreso)
        prensa.transferirPrensado(ingreso)
    }
}

function accionRtd () {
    let ingreso = parseInt(prompt(`Hay ${rtd.volumenActual} kilos de pescado ya cocinado y prensado en el rotadisco. ¿Cuanto deseas secar y transferir al silo?`))
    if(ingreso > 0 && ingreso <= rtd.capacidad){
        rtd.secarPrensado(ingreso)
        rtd.TrasnferirHarina(ingreso)
    }
}

function accionSilo () {
    silo.averiguarBolsas()
    let ingreso = parseInt(prompt(`¿Cuantas bolsas deseas sacar?`))
    if(ingreso > 0 && ingreso < silo.capacidad){
        silo.sacarBolsas(ingreso)
        organizadorLote.crearLote()
    }
}

function main () {
    accionPescado()
    accionCocinador()
    accionPrensa()
    accionRtd()
    accionSilo()
    alert(`Se crearon ${Lotes.length} lotes`)
    console.log(Lotes)
}

main()

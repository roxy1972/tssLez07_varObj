/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var arrGriglia = [];

function Piloti(pilota, auto) {
    this.pilota = pilota;
    this.auto = auto;
    this.griglia = "";
    this.risultato = "";
    this.htmlTR = function () {
        let ris = "<tr><td>" + this.pilota
                + "</td><td>" + this.auto
                + "</td><td>" + this.griglia
                + "</td><td>" + this.risultato
                + "</td><td>";
        return ris;
    };
}

function aggPilota() {
    let txPilota = document.getElementById("in_pilota").value;
    let txCasa = document.getElementById("in_casa").value;

    let partecipante = new Piloti(txPilota,txCasa);

    arrGriglia.push(partecipante);
    //arrAlunni.push({nome: txNome,cognome: txCognome,voto: flVoto});
    visGriglia();
}
function creaPart() {
    for (var i = 0; i < arrGriglia.length; i++) {
        arrGriglia[i].griglia = (i + 1);
    }
    visGriglia();
}

function assegnaRis() {
    let intNrPil = document.getElementById("in_codPilota").value;
    let intNrArr = document.getElementById("in_ordArrivo").value;
    let bolContinua = true;
    //Fase controlli restituisce continua = True se si può andare avanti false se si deve bloccare
    //Controllo che il risultato non sia stato assegnato in precedenza
    for (var i = 0; i < arrGriglia.length; i++) {
        if (arrGriglia[i].risultato== intNrArr) {
            bolContinua = false;
        }
    }
    if (intNrPil > arrGriglia.length || intNrArr > arrGriglia.length) {
        bolContinua = false;
    }

    if (bolContinua == true) {
        arrGriglia[intNrPil - 1].risultato = intNrArr;

        visGriglia();

        document.getElementById("pilota" + intNrPil).style = "background-color: yellow";
        //metto in rosso il migliore
        for (var i = 0; i < arrGriglia.length; i++) {
            if (arrGriglia[i].risultato == 1) {
                document.getElementById("pilota" + (i + 1)).style = "background-color: red";
            }
        }
    } else {
        alert("Valori non validi");
    }
}

function visGriglia() {
    let txVisualizza = "<table style='border: solid 1px'> ";
    txVisualizza += "<tr> <th> Pilota </th> <th> Casa </th> <th> Griglia Partenza </th> <th> Ordine Arrivo </th> </tr> ";

    for (let i = 0; i < arrGriglia.length; i++) {
        let appOggetto = arrGriglia[i];
        txVisualizza += "<tr id= 'pilota" + (i + 1) + "' onclick='selRiga(" + (i + 1) + ")'> <td> " + appOggetto.pilota + " </td> <td> " + appOggetto.auto + " </td> <td> " + appOggetto.griglia + " </td> <td> " + appOggetto.risultato + " </td> </tr>";
    }
    txVisualizza += " </table>";
    document.getElementById("div_visGriglia").innerHTML = txVisualizza;

}

function selRiga(intNrRiga) {
    document.getElementById("in_codPilota").value = intNrRiga;

    for (let i = 0; i < arrGriglia.length; i++) {
        document.getElementById("pilota" + (i + 1)).style = "background-color: white";
    }
    document.getElementById("pilota" + intNrRiga).style = "background-color: yellow";
}

function conGriglia() {
    let txTesto = "";
    txTesto = "<table>";
    for (var i = 1; i < arrGriglia.length; i++) {
        for (var j = 0; j < arrGriglia.length; j++) {
            if (arrGriglia[j].risultato == i) {
                txTesto += arrGriglia[j].htmlTR();
            }
        }
    } 
    txTesto += "</table>";
    document.getElementById("div_visFinale").innerHTML = txTesto;
}

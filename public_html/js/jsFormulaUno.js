/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var arrGriglia = [];

function aggPilota() {
    let txPilota = document.getElementById("in_pilota").value;
    let txCasa = document.getElementById("in_casa").value;


    let oggGriglia = {
        nomePil: txPilota,
        casaPil: txCasa,
        grigliaPart: 0,
        risFinale: 0,
        htmlbr: function() {return this.nomePil + " " + this.casaPil + " " + this.risFinale + " <br/>"}
    };



    arrGriglia.push(oggGriglia);

    //arrAlunni.push({nome: txNome,cognome: txCognome,voto: flVoto});

    visGriglia();
}
function creaPart() {

    for (var i = 0; i < arrGriglia.length; i++) {
        arrGriglia[i].grigliaPart = (i + 1);
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
        if (arrGriglia[i].risFinale == intNrArr) {
            bolContinua = false;
        }
    }
    if (intNrPil > arrGriglia.length || intNrArr > arrGriglia.length) {
        bolContinua = false;
    }

    if (bolContinua == true) {
        arrGriglia[intNrPil - 1].risFinale = intNrArr;

        visGriglia();

        document.getElementById("pilota" + intNrPil).style = "background-color: yellow";
        //metto in rosso il migliore
        for (var i = 0; i < arrGriglia.length; i++) {
            if (arrGriglia[i].risFinale == 1) {
                document.getElementById("pilota" + (i+1)).style = "background-color: red";

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
        txVisualizza += "<tr id= 'pilota" + (i + 1) + "' onclick='selRiga(" + (i+1) + ")'> <td> " + appOggetto.nomePil + " </td> <td> " + appOggetto.casaPil + " </td> <td> " + appOggetto.grigliaPart + " </td> <td> " + appOggetto.risFinale + " </td> </tr>";
    }
    txVisualizza += " </table>";
    document.getElementById("div_visGriglia").innerHTML = txVisualizza;

}

function selRiga(intNrRiga){
    document.getElementById("in_codPilota").value = intNrRiga;
    
    for (let i = 0; i < arrGriglia.length; i++) {
            document.getElementById("pilota" + (i+1)).style = "background-color: white";
    }
    document.getElementById("pilota" + intNrRiga).style = "background-color: yellow";
    
    
}

function conGriglia(){
    let txTesto = "";
    
    for (var i = 1; i < arrGriglia.length; i++) {
        for (var j = 0; j < arrGriglia.length; j++) {
            if (arrGriglia[j].risFinale == i) {
                txTesto += arrGriglia[j].htmlbr();
            }
        }
    }
    document.getElementById("div_visFinale").innerHTML = txTesto;
    
    
}


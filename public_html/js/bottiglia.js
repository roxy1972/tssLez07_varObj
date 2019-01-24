/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Bottiglia(marca, capacita, qta_corrente) {
    this.marca = marca;
    this.capacita = capacita;
    this.qta_corrente = qta_corrente;
    this.colore = "azure";
    this.bevo = function (quanto) {
        let ris = 0;
        //decremento la quantità corrente
        // se la qta maggiore di quanto ok..
        if (this.qta_corrente - quanto >= 0) {
            this.qta_corrente = this.qta_corrente - quanto;
            ris= quanto;
        }
        else { 
            ris=0;
        }
        return ris;
    };
    this.stato = function () {
        let ris = "";
        //sono una bottiglia santanna di capacità 100 e me ne rimangono 60
        ris = "sono una bottiglia " + this.marca + " con capacità iniziale di " + this.capacita
                + " ml e ora mi rimangono " + this.qta_corrente + " ml!";
        return ris;
    }
    this.ricarico =function (quanto){
        let ris=0;
        if(this.qta_corrente+quanto*1<= this.capacita){
            this.qta_corrente=this.qta_corrente+quanto*1;
            ris =quanto;
        }
        else{
            ris=this.capacita-this.qta_corrente;
            this.qta_corrente=this.capacita;
        }
        return ris;
    };
}

var bot;
var dris;
var sp_bevo;
var sp_ricarico;
var in_ricarico;
var in_bevo;

function refresh(){
    sp_bevo=document.getElementById("sp_bevo");
    sp_ricarico=document.getElementById("sp_ricarico");
    in_bevo=document.getElementById("in_bevo");
    in_ricarico=document.getElementById("in_ricarico");
    sp_bevo.innerHTML=in_bevo.value;
    sp_ricarico.innerHTML=in_ricarico.value;    
}
        
function creaBottiglia(){
    let marca = document.getElementById("marca").value;
    let capacita = document.getElementById("capacita").value;
    bot = new Bottiglia(marca,capacita,capacita);
    dris = document.getElementById("div_ris");
    let prn=bot.stato();
    dris.innerHTML=prn;    
}

function bevoBottiglia(){
    let bevoQta= in_bevo.value*1;
    let ris =bot.bevo(bevoQta);
    let prn= "Sono riuscito a bere: " + ris;
    prn+= "<br>" + bot.stato();
    ris=document.getElementById("div_bev");    
    dris.innerHTML=prn;
    
}
function caricoBottiglia(){
    let ricaricoQta= in_ricarico.value*1;
    let prn= "Sono riuscito a ricaricare: " + bot.ricarico(ricaricoQta);
    prn+= "<br>" + bot.stato();
    ris=document.getElementById("div_ricarico");    
    dris.innerHTML=prn;
    
}







/*dvs = document.getElementById("div_stato");
var bot = new Bottiglia ("santanna",100,100);
var prn = bot.stato();
prn += "<br> ho bevuto" + bot.bevo(60);
prn += "<br>" + bot.stato();
prn += "<br> ho bevuto" + bot.bevo(60);
prn += "<br>" + bot.stato();
prn += "<br> ho bevuto" + bot.bevo(30);
prn += "<br>" + bot.stato();
dvs.innerHTML =prn;*/
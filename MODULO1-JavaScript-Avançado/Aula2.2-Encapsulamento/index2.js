// EXEMPLO CLOSURE 

function IMC(){
    let altura = 1.80;

    function calcula(){
        let peso = 70;
        console.log("IMC: " + peso/(altura * altura));
    }

    return calcula;
}

let imc = IMC();

imc();

// EXEMPLO closure encapsulamento

function Carro(){

    this.proprietario = "Kayzer";
    let ano = 2021;

    this.getAno = function(){
        return ano;
    }

    this.setAno = function(a){
        ano = a;
    }

}

let carro = new Carro();

console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());
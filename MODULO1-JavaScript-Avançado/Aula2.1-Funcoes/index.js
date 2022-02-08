// escopo de bloco
if (true){
    const message = "Olá";
    console.log(message);
}

// console.log(message); aqui é causado erro

for (const color of ['verde', 'azul', 'amarelo']){
    const message = 'Olá';
    console.log(message);
    console.log(color);
}
//console.log(color);
//console.log(message);

// exemplo de escopo de bloco com var
if(true){
    var count = 0;
    console.log(count);
}
console.log(count); // aqui é executado corretamente por a declaração utilizando var não cria escopo de bloco

// EXEMPLO DE ESCOPO LOCAL COM VAR
function executar(){

    var text = "Escopo local com VAR"
    console.log(text);
}
executar();
//console.log(text); // neste caso ocorre erro pois o var dentro de função ela funciona somente local

// EXEMPLO DE ESCOPO LOCAL COM LET E CONST

function executar2 (){
    let txt = 0;
    const test = 2;

    function executar3(){

    };
    console.log(txt);
    console.log(test);
    console.log(executar3());

    
}
    executar2();
    //console.log(txt);
    //console.log(test);
    //console.log(executar3());

// escopo aninhado
function executar3(){
    const txtt = 'Escopo aninhado';

    if (true){
        const carro = 'Carro';
        console.log(txtt);
    }

    // console.log(name); aqui não é acessado
}
executar3();


// EXEMPLO DE ESCOPO GLOBAL

let gName = "Bruno";
console.log(gName);


// EXEMPLO HOISTING

printName();

function printName(){
    console.log("Nome: " + gName);
}


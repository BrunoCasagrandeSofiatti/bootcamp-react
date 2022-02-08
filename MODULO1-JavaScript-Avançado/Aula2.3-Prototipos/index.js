
function Pessoa(nome){
    if(!nome) this.nome = "Bruno";
    else this.nome = nome;

    this.dizerOla = () => console.log(this.nome + "diz: Olá!");
    
}

let pessoaA = new Pessoa("Alberto");

Pessoa.digaOla = function() {console.log("Olá, meu nome é: " + this.nome)};

let pessoaB = new Pessoa("Maria");

console.log("---------------------------------------- \n");

try{
    pessoaA.digaOla();
}catch(e){
    console.log("Falha na pessoaA.digaOla");
}

try{
    pessoaB.digaOla();
}catch(e){
    console.log("Falha na pessoaB.digaOla");
}

console.log("---------------------------------------- \n");

pessoaB.digaOla = function () { console.log("Oi, meu nome é: " + this.nome)};

try{
    pessoaA.digaOla();
}catch(e){
    console.log("Falha na pessoaA.digaOla");
}

try{
    pessoaB.digaOla();
}catch(e){
    console.log("Falha na pessoaB.digaOla");
}

console.log("---------------------------------------- \n");

Pessoa.prototype.digaOla = function () { console.log("Olá, eu sou o: " + this.nome)};

let pessoaC = new Pessoa("Ana");

try{
    pessoaA.digaOla();
}catch(e){
    console.log("Falha na pessoaA.digaOla");
}

try{
    pessoaB.digaOla();
}catch(e){
    console.log("Falha na pessoaB.digaOla");
}

try{
    pessoaC.digaOla();
}catch(e){
    console.log("Falha na pessoaB.digaOla");
}

console.log("---------------------------------------- \n");



//

Pessoa.prototype.dizerOla = function(){
    console.log(this.nome + " vou dizer outro Olá!");
}

pessoaB.dizerOla = function(){
    console.log(this.nome + "vou dizer novamente Olá")
}

try{
    pessoaA.dizerOla();
}catch(e){
    console.log("Falha na pessoaA.dizerOla");
}

try{
    pessoaB.dizerOla();
}catch(e){
    console.log("Falha na pessoaB.dizerOla");
}

try{
    pessoaC.dizerOla();
}catch(e){
    console.log("Falha na pessoaB.dizerOla");
}

console.log("---------------------------------------- \n");
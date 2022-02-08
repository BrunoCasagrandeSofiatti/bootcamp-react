// EXEMPLO DE IIFE PARA DECALRAÇÃO DE FUNÇÃO

(function(){
    console.log("Exemplo de IIFE");
})();

const unicoID = (function(){
    let count = 0;

    return function(){
        ++count;

        return `id_${count}`;
    }
})();

console.log(unicoID());
console.log(unicoID());
console.log(unicoID.count);
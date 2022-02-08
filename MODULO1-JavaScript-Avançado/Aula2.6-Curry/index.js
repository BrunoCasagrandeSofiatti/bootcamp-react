// exemplo de currying

function log(date, type, message){
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

log(new Date(), "DEBUG", "Exemplo de currying");

// outro exemplo
const logCurrying = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);

logCurrying(new Date())("DEBUG")('Exemplo de currying');

let logNow = logCurrying(new Date());

logNow("DEBUG")("Exemplo de currying com parametro fixo");

let logDebugNow = logNow("DEBUG");

logDebugNow("Novo exemplo com a utilização de 2 parametros fixo");
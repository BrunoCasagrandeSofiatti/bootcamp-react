// exemplo 1 - para criacao de promise e execução

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 1'), 200)
})

p1.then((res) => {console.log(res)}, (rej) => {});

new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso p1'), 200)
}).then((res) => {console.log(res)}, (res) => {});

// exemplo 2 - para criacao de promise e uso de catch

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso P2'), 200)
})

p2.then((res) => {console.log(res)});
p2.catch((rej) => {});

p2.then((res) => {console.log(res)}).catch((rej) => {});

// exemplo 3 - promises com o catch e o unico catch para todas as rejeições

const p3 = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5){
        resolve('Sucesso P3');
    }else{
        reject("Falha P3");
    }
});

p3.then(console.log).catch(console.error);

// exemplo 4 - encadeamento de then e catch

const p4 = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) resolve('Sucesso P4')
     reject("Falha P4");    
});

p4
.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})
.catch(function erro(rej){console.error(rej)});

// exemplo 5 - encadeamento de catchs
const p5 = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) resolve('Sucesso P5')
     reject("Falha P5");    
});

p5
.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.catch( function erro1 (rej) {console.error('Erro no primeiro catch'); return rej})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})
.catch(function erro2(rej){console.error(rej)});

// exemplo 6 - encadeamento de catchs diretamente a primeira promimse, os dois são executados

const p6 = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) resolve('Sucesso P6')
     reject("Falha P6");    
});

p6.catch(function error1(rej){console.error('Erro no primeiro catch'); return rej});
p6.catch(function error2(rej){console.error(rej)});

p6
.then( function acao1 (res) {console.log(`${res} da ação 1`); return res})
.then( function acao2 (res) {console.log(`${res} da ação 2`); return res})
.then( function acao3 (res) {console.log(`${res} da ação 3`); return res})

// exemplo 7 - encadeamento de thens e catchs com exceção no meio do fluxo

const p7 = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) resolve('Sucesso P7')
     reject("Falha P7");    
});

p7.catch(function error1(rej){console.error('Erro no primeiro catch P7'); return rej})

p7.then( function acao1 (res) {console.log('Promessa rejeitada na ação 1'); throw new Error('Erro');})
.catch(function error2(rej){console.error('Tratamento das rejeições em P7 ou acao 1'); return rej})
.then( function acao2 (res) {console.log(`${res} da acao 3`); return res})
.then( function acao3 (res) {console.log(`${res} da acao 3`); return res})
.catch(function error3(rej){console.error('Tratamento das rejeições em ação2 e ação3')})

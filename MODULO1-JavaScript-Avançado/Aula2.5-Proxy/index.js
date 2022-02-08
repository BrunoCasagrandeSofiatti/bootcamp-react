let Carro = {
    proprietario: "Fernando",
    ano: 2016
};

const handler = {
    get(target, property, receiver){
        console.log(`Get ${property}`);
        if( property in target){
            return target[property];
        }
        return "Propridade inexistente";
    }
}

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.modelo);
console.log(carroProxy.modelo);

// exemplo proxy para tradutor
let tradutor = {
    'Carro': 'car',
    'Ano': 'Year'
};

let handlerr = {
    get(target, property){
        if(property in target){
            return target[property];
        }else{
            return property;
        }
    },
    set(target, property, value){
        if(typeof value == 'string'){
            target[property] = value;
            return true;
        }else{
            return false;
        }
    }
};

let tradutorProxy = new Proxy(tradutor, handlerr);

console.log(tradutorProxy['Carro']);
console.log(tradutorProxy['Modelo']);

tradutorProxy['Modelo'] = "Model";
tradutorProxy['Marca'] = 12345;

console.log(tradutorProxy['Modelo']);
console.log(tradutorProxy['Marca']);
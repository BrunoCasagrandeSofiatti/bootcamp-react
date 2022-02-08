// proxy com reflect

let tradutor = {
    'Carro': 'car',
    'Ano': 'Year'
};

let handlerTradutor = {
    get(target, property){
        if(property in target){
            return Reflect.get(target, property);
        }else{
            return property;
        }
    },
    set(target, property, value){
        if(typeof value == 'string'){
            Reflect.set(target, property, value);
            return true;
        }else{
            return false;
        }
    }
};

tradutor = new Proxy(tradutor, handlerTradutor);

console.log(tradutor['Carro']);
console.log(tradutor['Modelo']);

tradutor['Modelo'] = "Model";
tradutor['Marca'] = 12345;

console.log(tradutor['Modelo']);
console.log(tradutor['Marca']);


// exemplo de proxy/reflect para ocultar propriedades no objeto
const hide = (target, prefix = '_') => new Proxy(target, {
    has: (target, property) => (!property.startsWith(prefix) && property in target),
    get: (target, property, receiver) => (property in receiver) ? target[property] : undefined,
    ownKeys: (target) => Reflect.ownKeys(target)
    .filter(property => (!property.startsWith(prefix) || typeof property !== 'string' ))
});

let Carro = hide({
    Ano: 2020,
    Modelo: 'Polo',
    _proprietario: 'Bruno'
});

console.log(Carro.proprietario);
console.log('_proprietario' in Carro);
console.log(Object.keys(Carro));
// exemplo função geradora

function getID(rang){
    let i = 0;
    while (i < rang){
        i++;
        return i;

    }
}

function* getID(rang){
    let i = 0;
    while (i < rang){
        i++;
        yield i;

    }
}

let it = getID(3);

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// for of
let it2 = getID(3);
for (const itme of it2){
    console.log(itme);
}


function* getUnioqueID(rang){
    let i = 0;
    while (true){
        i++;
        yield 'id: '+i;

    }
}

const cars ={};
const idCarsGenerator = getUnioqueID();

function addCar(car){
    const id = idCarsGenerator.next().value;
    cars[id] = {id, car};
}

addCar('Palio');
addCar('Gol');
addCar('Fox');

console.log(cars);

//////////// outro exemplo ///////////////////////////////

const carModelAll ={
    allModel: {
        'Fiat': [
            'Palio',
            'Cronos',
            'Toro'
        ],
        'Volksvagem': [
            'Gol',
            'Up',
            'Nivus',
            'Tiguan'
        ],
        'Chevrolet': [
            'Onix',
            'S10',
            'Tracker'
        ]
    },

    [Symbol.iterator](){
        const brands = Object.values(this.allModel)
        let currentModelIndex = 0;
        let currentBrandIndex = 0;

        return{
            next(){
                // lista de todos os modelos da marca
                const models = brands[currentBrandIndex];
                // Verifico se já navegou em todos os modelos da marca e passa para a proxima
                if(!(currentModelIndex < models.length)){
                    currentBrandIndex++;
                    currentModelIndex = 0;
                }
                // Verifica se já naavegou em todas as marcas
                if(!(currentBrandIndex < brands.length)){
                    return {
                        value: undefined,
                        done: true
                    }
                }
                //

                return{
                    value: brands[currentBrandIndex][currentModelIndex++],
                    done: false
                }
            }
        }
    },
    *carGenerator() {
        const brands = Object.values(this.allModel);

        let currentBrandIndex = 0;

        while(currentBrandIndex < brands.length){
            yield* brands[currentBrandIndex];
            currentBrandIndex++;
        }
    }

}

let itA = carModelAll.carGenerator();
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());

for (const car of carModelAll.carGenerator()){
    console.log(car);
}

// destructing

itB = carModelAll.carGenerator();
console.log([...itB]);
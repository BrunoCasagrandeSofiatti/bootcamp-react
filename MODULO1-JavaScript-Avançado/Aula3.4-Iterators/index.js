const carModel=[
    'Onix',
    'Gol',
    'I30',
    'Palio'
]
// for
for (let index = 0; index < carModel.length; index ++){
    console.log(carModel[index]);
}

// while
let index = 0;
while(index < carModel.length){
    console.log(carModel[index]);
    index++;
}

//for-of
for(const car of carModel){
    console.log(car);
}

// 
console.log('Abaixo a implementação do iterator')
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
    }
};

for (const carro of carModelAll){
    console.log(carro);
}

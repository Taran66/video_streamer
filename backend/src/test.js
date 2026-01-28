function pizzaReady(callback){
    setTimeout(() => {
        const pizza = `🍕`
        callback(pizza)
    }, 2000);
}

function eatPizza(pizza){
    console.log(`eat the ${pizza}`)
}

pizzaReady(eatPizza)
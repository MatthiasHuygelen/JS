function getPizzas(){
    return new Promise(resolve => {
        setTimeout(resolve , 2000);
    })
}

getPizzas().then(() => console.log("De Pizzas zijn er "));

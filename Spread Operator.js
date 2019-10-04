
    const featured = ['Deep Dish','Peperoni','Hawaiian']
    const specialty = ['Meatzza', 'Spicy Mama', 'Margherita']

    const pizzas = [...featured, 'veg',...specialty]; //makes it so the arrays are spread into a new array
    const fridayPizzas = [pizzas]; //makes that adding items into an array doesn't cause destruction of existing elements
    
    console.log(pizzas);

    const deepDish = {
        pizzaName: 'Deep Dish'
        size: 'Medium',
        ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']

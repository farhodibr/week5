let listOfToppings = ["Pepperoni", "Beef", "Chicken", "Onions", "Green Peppers"];
let userToppings = [];

class Toppings {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `${this.name} is ${this.type}.`;
    }
    
    }

class Pizza {
    constructor(size) {
        this.size = size;
        this.toppings = [];
    }

    addTopping(topping) {
        if (topping instanceof Toppings) {
            this.toppings.push(topping);
        } else {
            throw new Error(`This topping unavailable ${topping}`);
        }
    }
       describe() {
            return `${this.size} pizza has ${this.toppings.length} toppings`;
        }
    }

    class Menu {
        constructor() {
            this.pizzas = [];
            this.selectedPizza = null;
        }

        start() {
            let selection = this.showMainMenuOptions();
           
            while (selection != 0) {
                switch (selection) {
                    case '1':
                        this.createPizza();
                    break;
                    case '2':
                        this.viewPizza();
                    break;
                    case '3':
                        this.deletePizza();
                    break;
                    case '4':
                        this.displayPizzas();
                    break;
                    default:
                        selection = 0;
                }
                selection = this.showMainMenuOptions();
            }
            alert('Goodbye');
        }

        showMainMenuOptions() {
            return prompt(`
            0) exit
            1) create new pizza
            2) view pizza
            3) delete pizza
            4) display all pizzas
            `);
        }

        showPizzaMenuOptions(pizzaInfo) {
            return prompt(`
            0) back
            1) create topping
            2) delete topping
            ------------------
            ${pizzaInfo}
            `);

        }

        displayPizzas() {
            let pizzaString = ''; // creating string variable

            for (let i = 0; i < this.pizzas.length; i++) {
                pizzaString += i + ') ' + this.pizzas[i].size + '\n';
            }
            alert(pizzaString);
        }

        createPizza() {
            let size = prompt('Enter size for new pizza. Large or Medium');
            this.pizzas.push( new Pizza(size));
        }

        viewPizza() {
            let index = prompt('Index of pizza you wish to view: ')

            if (index > -1 && index < this.pizzas.length) {
                this.selectedPizza = this.pizzas[index];
                let description = 'Your pizza: ' + this.selectedPizza.size + '\n';

                for (let i = 0; i < this.selectedPizza.toppings.length; i++) {
                    description += i + ') ' + this.selectedPizza.toppings[i].name + 
                    ' - ' + this.selectedPizza.toppings[i].type + '\n';
                }

                let selection = this.showPizzaMenuOptions(description);
                        switch (selection) {
                            case '1':
                                this.createTopping();
                            break;
                            case '2':
                                this.deleteTopping();
                        }
                }
            }

            deletePizza() {
                let index = prompt ('Enter the index of pizza you wish to delete: ')
                if (index > -1 && index < this.pizzas.length) {
                    this.pizzas.splice(index, 1);
                }
            }

            createTopping() {
                let name = prompt ('Enter name for new topping: ');
                let type = prompt ('Enter type of topping: ');
                this.selectedPizza.toppings.push(new Toppings(name, type));
            }

            deleteTopping() {
                let index = prompt('Enter the index of the topping you wish to delete: ');
                if (index > -1 && index < this.selectedPizza.toppings.length) {
                    this.selectedPizza.toppings.splice(index, 1);
                }
            }


        }
    

    

let menu = new Menu();
menu.start();

/*

//let menuOfToppings = new Toppings(listOfToppings);
//console.log(menuOfToppings.describe());
//menuOfToppings.toppingSelection();

class Pizza {

    constructor (size) {
        this.size = size;
        this.toppings = [];
    }

    addTopping(topping) {
        if (topping instanceof Toppings) {
            this.toppings.push(topping);
        } else {
            throw new Error(`You can only choose from avalable toppings menu. 
                             Topping ${topping} is not available`)
        }
    }

    describe() {
        return `Your ${size} pizza has ${this.toppings.length} toppings`;
    }
}

class Menu {
    constructor() {
        this.pizzas = [];
        this.selectedPizza = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {

            switch(selection) {
                case '1':
                    this.createPizza();
                    break;
                case '2':
                    this.addToppings();
                    break;
                case '3':
                    this.viewPizza();
                    break;
                case '4':
                    this.deletePizza();
                    break;
                case '5':
                    this.displayPizzas();
                    break;
                default:
                    selection = 0;
                
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye');
    }

    showMainMenuOptions() {
        return prompt(`
        0.) Exit.
        1.) Create new pizza.
        2.) Add toppings.
        3.) View your pizza.
        4.) Delete your pizza.
        5.) View your order.`)
    }

    displayPizzas() {
        let pizzaString = '';
        for(let i = 0; i < this.pizzas.length; i++) {
            pizzaString += i + ') ' + this.pizzas[i].size + '\n';
        }
        alert(pizzaString);
    }

    createPizza() {
        let sizeChoice = prompt(`Select pizza's size: 
        0.) Exit.
        1.) Large.
        2.) Medium.`)
        
       while (sizeChoice != 0) {
        switch (sizeChoice) {
            case '1':
                size = 'large';
            break;
            case '2':
                size = 'medium';
            break;
            default:
                sizeChoice = 0;
        }
        sizeChoice = prompt(`Select pizza's size: 
        0.) Exit.
        1.) Large.
        2.) Medium.`)
       }
                            
                            
    }

    viewPizza() {
        let index = prompt ('Enter the index of the pizza you wish to view: ');
        if (index > -1 && index < this.pizzas.length) {
            this.selectedPizza = this.pizzas[index];
            let description = 'Your pizza: ' + this.selectedPizza.name + '\n';

            for (let i = 0)
        }
    }

    
}

*/
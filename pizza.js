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
            this.listOfToppings = ["Pepperoni", "Beef", "Chicken", "Onions", "Green Peppers"];
            this.toppings = [];
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

        showToppingMenuOptions(toppingsInfo) {
            return prompt (`Please choose your topping:
            1) Pepperoni
            2) Beef
            3) Chicken
            4) Onions
            5) Green Peppers
            0) Back to the main menu
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
                let description = 'Your pizza: ' + this.selectedPizza.size + '\n'
                                + 'With toppings' + '\n';

                for (let i = 0; i < this.toppings.length; i++) {
                    description += (i +1) + ') ' + this.toppings[i] + '\n';
                    
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
                let selection = this.showToppingMenuOptions();
                
                 while (selection != 0) {

                    switch(selection) {
                        
                        case '1':
                            this.toppings.push(this.listOfToppings[selection -1]);
                        break;
                        case '2':
                            this.toppings.push(this.listOfToppings[selection-1]);
                        break;
                        case '3':
                            this.toppings.push(this.listOfToppings[selection-1]);
                        break;
                        case '4':
                            this.toppings.push(this.listOfToppings[selection-1]);
                        break;
                        case '5':
                            this.toppings.push(this.listOfToppings[selection-1]);
                        break;
                        default:
                            selection = 0;

                    }
                        selection = this.showToppingMenuOptions();

                 }
                //let type = prompt ('Enter type of topping: ');
                //this.selectedPizza.toppings.push(new Toppings(name, type));
            }

            deleteTopping() {
                let index = prompt('Enter the index of the topping you wish to delete: ');
                if (index > -1 && index < this.toppings.length) {
                    this.toppings.splice(index, 1);
                }
            }


        }
    

    

let menu = new Menu();
menu.start();
console.log(userToppings);
import { v4 as uuidv4 } from 'uuid';
import { Canvas, CircleContainer, Component } from './Widget';
import { RightLeaningContainer } from './Widget';


const canvas = new Canvas(document.body)
canvas.state = {action: 'is awesome', firstName: 'Lexie', city: 'St. Louis'}
console.log(canvas)

const firstComponent = new Component();
console.log(firstComponent);
console.log(firstComponent.shape);
console.log(firstComponent.shape.attributes);

// Change styling of component
firstComponent.shape = new CircleContainer
firstComponent.heigth = 4
firstComponent.width = 4
firstComponent.locationLeft = 3
firstComponent.shape.backgroundColor = 'red'
firstComponent.shape.borderStyle = 'dashed';
firstComponent.shape.borderWidth = '5px';
// Adding component
canvas.addComponent(firstComponent);

const secondComponent = new Component();
secondComponent.shape = new RightLeaningContainer
secondComponent.locationLeft = 4;
secondComponent.locationTop = 2;
secondComponent.shape.zIndex = 1;
secondComponent.content = '<h3>Typescript {{ action }}</h3>'
canvas.addComponent(secondComponent);







//                                >>>>>> CLASSES: Item, User, Shop <<<<<<<

class Item {
    private readonly _id: string;
    public name: string;
    public price: number;
    public description: string;
    
    public constructor(_id: string, name:string, price: number, description: string){
        this._id = uuidv4(),
        this.name = name,
        this.price = price,
        this.description = description
    }

    public get itemId():string {
        return this._id
    }
    //no setter because we do not want the ID to be able to be modified
}


class User {
    private readonly _id: string;
    public name: string;
    public age: number;
    public cart: Item[];

    public constructor(name:string, age: number){
        this._id = uuidv4(),
        this.name = name,
        this.age = age,
        this.cart = []
    }

    public get userId():string {
        return this._id
    }
    //no setter because we do not want the ID to be able to be modified
}

class Shop { 
    public shopItems: Item[]
    public constructor(shopItems: Item[]){
        this.shopItems = shopItems
    }
}

//                                             >>>>>> METHODS <<<<<<<


// addToCart   
    function addToCart(item:Item, user:User):void {
        user.cart.push(item)
        console.log(`You have added ${item.name} to your cart!`)
     }

// removeFromCart    
    function removeFromCart(item:Item, user:User):void {
        user.cart = user.cart.filter( cartItem => cartItem.itemId !== item.itemId ) 
        console.log(`All of your ${item.name}s have been deleted from your cart.`)
    }

// removeQuantityFromCart   
    function removeQuantityFromCart(item:Item, user:User, quantity:number):void {
        for (let idx=0; idx < quantity; idx++){
            let indexOfItem = user.cart.findIndex( createItem => createItem.itemId == item.itemId )
            user.cart.splice(indexOfItem, 1)
        }
        console.log(`You have removed ${quantity} ${item.name}(s) from your cart.`)
    }
    

// cartTotal    
    function cartTotal(user:User):void {
        let total = 0; // total starts at zero, for each item in our cart, add that price to the total 
        for (let item of user.cart){
            total += item.price
        }
        console.log(`Your current total is ${total}`)
    }

    // printCart
    function printCart(user:User):void {
        console.log('Your cart:')
        for (let item of user.cart){
            console.log(item.name)
        }
    }

    // document   
    //     .getElementById("loginbutton")!
    //     .addEventListener("click", (e: Event) => Shop.loginUser(e))





// DRIVER CODE


// Coffee Shop Item Objects:
let shopItem1 = new Item (uuidv4(), 'Coffee', 4.00, 'Dark Roast black coffee with no modifications' )
let shopItem2 = new Item (uuidv4(), 'Americano', 6.00, 'Diluted espresso mixed with hot water' )
let shopItem3 = new Item (uuidv4(), 'Latte', 4.75, 'One shot of espresso blended with steamed milk and topped with foam' )
let shopItem4 = new Item (uuidv4(), 'Cappuccino', 4.00, 'Espresso with steamed milk and a layer of milk foam' )
let shopItem5 = new Item (uuidv4(), 'Cortado', 3.75, 'Espresso mixed with a roughly equal amount of warm milk ' )
let shopItem6 = new Item (uuidv4(), 'Flat White', 4.00, 'Espresso with steamed milk, no foam' )
let shopItem7 = new Item (uuidv4(), 'Vanilla Flavoring', .75, 'Extra flavoring available as add on' )
let shopItem8 = new Item (uuidv4(), 'Carmel Flavoring', .75, 'Extra flavoring available as add on' )

//Shop Items Arr:
const coffeeItems = [shopItem1, shopItem2, shopItem3, shopItem4, shopItem5, shopItem6, shopItem7, shopItem8]

// Shop Initlization: 
const myCoffeeShop = new Shop(coffeeItems)

// Create User
let userA = new User('Lexie', 27)
console.log(userA)

// Add Items from shop
addToCart(myCoffeeShop.shopItems[1], userA)
console.log(myCoffeeShop.shopItems[1])
addToCart(myCoffeeShop.shopItems[2], userA)
addToCart(myCoffeeShop.shopItems[2], userA)
addToCart(myCoffeeShop.shopItems[5], userA)
addToCart(myCoffeeShop.shopItems[7], userA)

// Print Cart
printCart(userA)
// WORKING THRu HERE


// Remove all of one type of item
removeFromCart(myCoffeeShop.shopItems[7], userA)

// Remove only a few of an item

removeQuantityFromCart(myCoffeeShop.shopItems[2], userA, 1)
printCart(userA)

// Read Total 
cartTotal(userA)

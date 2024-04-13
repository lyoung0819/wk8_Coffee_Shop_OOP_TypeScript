"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
//                                >>>>>> CLASSES: Item, User, Shop <<<<<<<
class Item {
    constructor(_id, name, price, description) {
        this._id = (0, uuid_1.v4)(),
            this.name = name,
            this.price = price,
            this.description = description;
    }
    get itemId() {
        return this._id;
    }
}
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)(),
            this.name = name,
            this.age = age,
            this.cart = [];
    }
    get userId() {
        return this._id;
    }
}
class Shop {
    constructor(shopItems) {
        this.shopItems = shopItems;
    }
}
//                                             >>>>>> METHODS <<<<<<<
// addToCart   
function addToCart(item, user) {
    user.cart.push(item);
    console.log(`You have added ${item.name} to your cart!`);
}
// removeFromCart    
function removeFromCart(item, user) {
    user.cart = user.cart.filter(cartItem => cartItem.itemId !== item.itemId);
    console.log(`All of your ${item.name}s have been deleted from your cart.`);
}
// removeQuantityFromCart   
function removeQuantityFromCart(item, user, quantity) {
    for (let idx = 0; idx < quantity; idx++) {
        let indexOfItem = user.cart.findIndex(createItem => createItem.itemId == item.itemId);
        user.cart.splice(indexOfItem, 1);
    }
    console.log(`You have removed ${quantity} ${item.name}(s) from your cart.`);
}
// cartTotal    
function cartTotal(user) {
    let total = 0; // total starts at zero, for each item in our cart, add that price to the total 
    for (let item of user.cart) {
        total += item.price;
    }
    console.log(`Your current total is ${total}`);
}
// printCart
function printCart(user) {
    console.log('Your cart:');
    for (let item of user.cart) {
        console.log(item.name);
    }
}
//                                              >>>>>> DRIVER CODE <<<<<<<<
// Coffee Shop Item Objects:
let shopItem1 = new Item((0, uuid_1.v4)(), 'Coffee', 4.00, 'Dark Roast black coffee with no modifications');
let shopItem2 = new Item((0, uuid_1.v4)(), 'Americano', 6.00, 'Diluted espresso mixed with hot water');
let shopItem3 = new Item((0, uuid_1.v4)(), 'Latte', 4.75, 'One shot of espresso blended with steamed milk and topped with foam');
let shopItem4 = new Item((0, uuid_1.v4)(), 'Cappuccino', 4.00, 'Espresso with steamed milk and a layer of milk foam');
let shopItem5 = new Item((0, uuid_1.v4)(), 'Cortado', 3.75, 'Espresso mixed with a roughly equal amount of warm milk ');
let shopItem6 = new Item((0, uuid_1.v4)(), 'Flat White', 4.00, 'Espresso with steamed milk, no foam');
let shopItem7 = new Item((0, uuid_1.v4)(), 'Vanilla Flavoring', .75, 'Extra flavoring available as add on');
let shopItem8 = new Item((0, uuid_1.v4)(), 'Carmel Flavoring', .75, 'Extra flavoring available as add on');
//Shop Items Arr:
const coffeeItems = [shopItem1, shopItem2, shopItem3, shopItem4, shopItem5, shopItem6, shopItem7, shopItem8];
// Shop Initlization: 
const myCoffeeShop = new Shop(coffeeItems);
// Create User
let userA = new User('Lexie', 27);
console.log(userA);
// Add Items from shop
addToCart(myCoffeeShop.shopItems[1], userA);
console.log(myCoffeeShop.shopItems[1]);
addToCart(myCoffeeShop.shopItems[2], userA);
addToCart(myCoffeeShop.shopItems[2], userA);
addToCart(myCoffeeShop.shopItems[5], userA);
addToCart(myCoffeeShop.shopItems[7], userA);
// Print Cart
printCart(userA);
// WORKING THRu HERE
// Remove all of one type of item
removeFromCart(myCoffeeShop.shopItems[7], userA);
// Remove only a few of an item
removeQuantityFromCart(myCoffeeShop.shopItems[2], userA, 1);
printCart(userA);
// Read Total 
cartTotal(userA);

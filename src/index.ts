//  !!! Don't forget to change start: back to dist/index.html !!! 
import { v4 as uuidv4 } from 'uuid';
let myuuid = uuidv4();



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

    public constructor(_id: string, name:string, age: number, cart: Item[]){
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


class Shop { 
    public name: string;
    public shopItems: Item[]

    public constructor(name:string, shopItems: Item[]){
        this.name = name,
        this.shopItems = coffeeItems
    }
}



//                                             >>>>>> METHODS <<<<<<<
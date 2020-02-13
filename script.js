"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
let findNameofTallestMountain = (mountainList) => {
    let tallestMtn = 0;
    let mtnName = "";
    mountainList.forEach(mountain => {
        if (mountain.height > tallestMtn) {
            tallestMtn = mountain.height;
            mtnName = mountain.name;
        }
    });
    return mtnName;
};
console.log(findNameofTallestMountain(mountains));
let products = [
    { name: "", price: 150 },
    { name: "chocolate", price: 50 },
    { name: "roses", price: 40 }
];
let calcAvgProductPrice = (productList) => {
    let totalAmount = 0;
    productList.forEach(product => {
        totalAmount += product.price;
    });
    return totalAmount / productList.length;
};
console.log(calcAvgProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
let calcInventoryValue = (inventoryList) => {
    let totalPrice = 0;
    inventoryList.forEach(item => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValue(inventory));

interface Mountain {
  name: string;
  height: number;
}
interface Product {
  name: string;
  price: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameofTallestMountain = (mountainList: Mountain[]): string => {
  let tallestMtn: number = 0;
  let mtnName: string = "";
  mountainList.forEach(mountain => {
    if (mountain.height > tallestMtn) {
      tallestMtn = mountain.height;
      mtnName = mountain.name;
    }
  });
  return mtnName;
};

console.log(findNameofTallestMountain(mountains));

let products: Product[] = [
  { name: "", price: 150 },
  { name: "chocolate", price: 50 },
  { name: "roses", price: 40 }
];

let calcAvgProductPrice = (productList: Product[]): number => {
  let totalAmount: number = 0;
  productList.forEach(product => {
    totalAmount += product.price;
  });
  return totalAmount / productList.length;
};

console.log(calcAvgProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 }
];

let calcInventoryValue = (inventoryList: InventoryItem[]): number => {
  let totalPrice: number = 0;
  inventoryList.forEach(item => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};

console.log(calcInventoryValue(inventory));

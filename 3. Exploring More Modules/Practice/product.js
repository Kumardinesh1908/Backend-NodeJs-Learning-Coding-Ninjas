// Array of objects representing items with quantity and price
const items = [
    { name: 'Item 1', quantity: 2, price: 10 },
    { name: 'Item 2', quantity: 1, price: 20 },
    { name: 'Item 3', quantity: 3, price: 15 }
];

function calculateTotal(items) {
    let total = 0;
    items.forEach(item => total += item.quantity * item.price);
    return total;
};

function printValues(value){
    console.log("Total Price: ", value);
}

const grandtotal = calculateTotal(items);
printValues(grandtotal);
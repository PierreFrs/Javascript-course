const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
};


const order1 = calculateTotal(3, 4);
const order2 = calculateTotal(5, 9);
const order3 = calculateTotal(6, 8);

console.log(order1, order2, order3);


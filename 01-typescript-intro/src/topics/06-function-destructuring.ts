export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const table: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
}

//function taxCalculation(options: TaxCalculationOptions):[number, number]{
//function taxCalculation({tax, products}: TaxCalculationOptions):[number, number]{
export function taxCalculation(options: TaxCalculationOptions):[number, number]{

    const {tax, products} = options
    
    let total = 0;

    products.forEach(({price}) => {
        total += price
    });
    return [total, total * tax];
}

/* const shoppingCart = [phone, table];
const tax: number = 0.15;
 */
/* const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})
 */
//console.log('Total: ', total);
//console.log('Tax: ', taxTotal);


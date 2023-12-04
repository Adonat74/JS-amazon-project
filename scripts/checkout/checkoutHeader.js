import {calculateCartQuantity} from '../../data/cart.js';


export function renderCheckoutHeader() {

    const checkoutHeaderHTML = 
    `
        Checkout (${calculateCartQuantity()} items)    
    `

    document.querySelector(".checkout-header-quantity").innerHTML = checkoutHeaderHTML;
}
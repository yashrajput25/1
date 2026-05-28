import { cart, updateQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import {formatCurrency} from './utils/money.js'
import { removeFromCart } from '../data/cart.js';
import { calculateCartQuantity } from '../data/cart.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js';


let cartSummaryHTML = '';

cart.forEach((cartItem) =>{

    const productId = cartItem.productId;

    products.forEach((product)=>{
        if(productId === product.id){

            cartSummaryHTML+=`<div class="cart-item-container 
            js-cart-item-container-${product.id}">
                <div class="delivery-date">
                Delivery date: Tuesday, June 21
                </div>

                <div class="cart-item-details-grid">
                <img class="product-image"
                    src=${product.image}>

                <div class="cart-item-details">
                    <div class="product-name">
                    ${product.name}
                    </div>
                    <div class="product-price">
                    $${formatCurrency(product.priceCents)}
                    </div>
                    <div class="product-quantity">
                    <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span data-product-id = ${product.id} class="update-quantity-link link-primary js-update-link">
                        Update
                    </span>
                    <input class="quantity-input js-quantity-input-${product.id}">
                    <span data-product-id = ${product.id} class="save-quantity-link link-primary js-save-link">
                    Save
                    </span>
                    <span data-product-id = ${product.id} class="delete-quantity-link 
                    link-primary js-delete-link">
                        Delete
                    </span>
                    </div>
                </div>

                <div class="delivery-options">

                    <div class="delivery-options-title">
                    Choose a delivery option:
                    </div>
                    ${deliveryOptionsHTML(product.id)}

                </div>
                </div>
            </div>
            `
        }
    });
})

function deliveryOptionsHTML(productId){
    let html = '';


    deliveryOptions.forEach((deliveryOption)=>{

        const today = dayjs();
        const deliveryDate = today.add(Number(deliveryOption.deliveryDays),'day');
        const dateString = deliveryDate.format('dddd, MMMM D');
        console.log(deliveryOption)
;
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}`

        html+=`               
                <div class="delivery-option">
                        <input type="radio"
                            class="delivery-option-input"
                            name="delivery-option-${productId}">
                        <div>
                            <div class="delivery-option-date">
                            ${dateString}
                            </div>
                            <div class="delivery-option-price">
                            ${priceString} - Shipping
                            </div>
                        </div>
                </div>` 
        });

        console.log(html);
        return html;

}

document.querySelector('.order-summary').innerHTML = cartSummaryHTML;


//Clicking the update button
document.querySelectorAll('.js-update-link').forEach((link)=>{

    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;
        console.log(productId);
        document.querySelector(`.js-cart-item-container-${productId}`).classList.add("is-editing-quantity");
    })
})


//Clicking the save button
document.querySelectorAll('.js-save-link').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        let inputValue = (document.querySelector(`.js-quantity-input-${productId}`).value);
        inputValue !== null ? console.log(Number(inputValue)): 0;
        document.querySelector(`.js-cart-item-container-${productId}`).classList.remove("is-editing-quantity");
        updateQuantity(productId, inputValue);
    });
})



//Clicking the delete button
document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        console.log(container)
        container.remove();
        cartQuantity = calculateCartQuantity();
        document.querySelector('.js-return-to-home-link').innerHTML = cartQuantity;
    })
})


let cartQuantity = calculateCartQuantity();
document.querySelector('.js-return-to-home-link').innerHTML = cartQuantity;




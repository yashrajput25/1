import { cart, updateDeliveryOption, updateQuantity, calculateCartQuantity } from '../../data/cart.js';
import { getProduct, products } from '../../data/products.js';
import {formatCurrency} from '../utils/money.js'
import { removeFromCart } from '../../data/cart.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary(){
    
    let cartSummaryHTML = '';

    cart.forEach( (cartItem) => {

        const productId = cartItem.productId;

        let matchingProduct = getProduct(productId);

        const deliveryOptionId = cartItem.deliveryOptionId;

        const  deliveryOption =  getDeliveryOption(deliveryOptionId);

        console.log("The delivery option is: " , deliveryOption);
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays,'day');
        const dateString = deliveryDate.format('dddd, MMMM D');


        cartSummaryHTML+=`
                <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                    
                    <div class="delivery-date">
                    Delivery date: ${dateString}
                    </div>

                    <div class="cart-item-details-grid">
                        <img class="product-image" src=${matchingProduct.image}>

                        <div class="cart-item-details">
                            
                            <div class="product-name">
                                ${matchingProduct.name}
                            </div>

                            <div class="product-price">
                                $${formatCurrency(matchingProduct.priceCents)}
                            </div>

                            <div class="product-quantity">

                                <span>
                                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                                </span>

                                <span data-product-id = ${matchingProduct.id} class="update-quantity-link link-primary js-update-link">
                                    Update
                                </span>

                                <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                                <span data-product-id = ${matchingProduct.id} class="save-quantity-link link-primary js-save-link">
                                Save
                                </span>

                                <span data-product-id = ${matchingProduct.id} class="delete-quantity-link 
                                link-primary js-delete-link">
                                    Delete
                                </span>

                            </div>
                            
                        </div>

                        <div class="delivery-options">

                            <div class="delivery-options-title">
                                Choose a delivery option:
                            </div>

                            ${deliveryOptionsHTML(matchingProduct, cartItem)}

                        </div>

                    </div>

                </div>
                `
            });


    document.querySelector('.order-summary').innerHTML = cartSummaryHTML;



    // Rendering Delivery Options with Dates
    function deliveryOptionsHTML(matchingProduct, cartItem){
        let html = '';

        deliveryOptions.forEach((deliveryOption)=>{

            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays,'day');
            const dateString = deliveryDate.format('dddd, MMMM D');
            const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}`
            const isChecked = cartItem.deliveryOptionId === deliveryOption.id;


            html+=`               
                    <div class="delivery-option js-delivery-option"
                    data-product-id ="${matchingProduct.id}" data-delivery-option-id = "${deliveryOption.id}">

                            <input type="radio"
                                ${isChecked ? 'checked' : ''}
                                class="delivery-option-input"
                                name="delivery-option-${matchingProduct.id}">

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

            return html;

    }



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
            renderOrderSummary();
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
            renderOrderSummary();
        })
    })



    let cartQuantity = calculateCartQuantity();
    document.querySelector('.js-return-to-home-link').innerHTML = cartQuantity;



    //Click on dates/Radio Button
    document.querySelectorAll(".js-delivery-option").forEach((element)=>{

        element.addEventListener('click', ()=>{

            const { productId, deliveryOptionId } = element.dataset;
            console.log(productId, deliveryOptionId);
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary();
        });

    })

    renderPaymentSummary();
}


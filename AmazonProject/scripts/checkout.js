import renderCheckoutHeader from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();

export function calculateDelivery(d){

        const today = dayjs();
        
        const deliveryDate = today.add(d,'day');
        const day = deliveryDate.format('dddd');
        return deliveryDate.format('dddd, MMMM D');

}
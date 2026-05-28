export let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity){
        let matchingItem;
        cart.forEach((item)=>{
                matchingItem = item.productId === productId ?  item : null;
            })

        if(matchingItem){
            console.log("This item already exists!, adding it")
                matchingItem.quantity = Number(matchingItem.quantity) + Number(quantity);
        }else{
            console.log("This item DOES NOT exists!, adding it")
            cart.push({
                productId,
                quantity,
                deliveryOptions: '1'
            })
        }
        saveToStorage();
}

export function removeFromCart(productId){
    const new_cart = [];
    cart.forEach((item)=>{
        if(item.productId !== productId){
            new_cart.push(item);
        }
    });
    cart = new_cart;
    saveToStorage();
}

export function calculateCartQuantity(){
        
        let cartQuantity = 0;

        cart.forEach((item)=>{
                cartQuantity = Number(cartQuantity) + Number(item.quantity);
            })
        return cartQuantity;  
}


export function updateQuantity(productId, newQuantity){

    cart.forEach((cartItem)=>{
        productId === cartItem.productId ? cartItem.quantity = newQuantity : 0;
    })
    saveToStorage();

}




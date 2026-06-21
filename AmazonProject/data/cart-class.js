class Cart{

    cartItem;

    constructor(){
        this.cartItem = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(this.cartItem);
    }

    saveToStorage(){
        localStorage.setItem('cart', JSON.stringify(this.cartItem));
    }

    addToCart(productId, quantity){
        console.log(productId);
        
        let matchingItem=null;

        this.cartItem.forEach((item)=>{
                console.log("Item already exists! ");
                if(item.productId === productId){
                    matchingItem = item;
                }
            });

        if(matchingItem){
            console.log("This item already exists!, adding it")
                matchingItem.quantity = Number(matchingItem.quantity) + Number(quantity);
        }else{
            console.log("This item DOES NOT exists!, adding it")
            console.log(productId);
            this.cartItem.push({
                productId,
                quantity,
                deliveryOptionId: '1'
            })
        }

        this.saveToStorage();
    }

    removeFromCart(productId){
        const new_cart = [];
        this.cartItem.forEach((item)=>{
            if(item.productId !== productId){
                new_cart.push(item);
            }
        });
        this.cartItem = new_cart;
        this.saveToStorage();
    }


    calculateCartQuantity(){
        
        let cartQuantity = 0;

        this.cartItem.forEach((item)=>{
                cartQuantity = Number(cartQuantity) + Number(item.quantity);
            })
        return cartQuantity;  
    }

    updateQuantity(productId, newQuantity){

        this.cartItem.forEach((item)=>{
            productId === item.productId ? item.quantity = newQuantity : 0;
        })
        this.saveToStorage();
    }

    updateDeliveryOption(productId , deliveryOptionId){
                let matchingItem;
                this.cartItem.forEach((item)=> {
                    console.log(item.productId);
                    if(item.productId === productId){
                        matchingItem = item;
                    }
                });

                matchingItem.deliveryOptionId = deliveryOptionId;
                this.saveToStorage();
        }
    
}

export const cart = new Cart();
console.log(cart);


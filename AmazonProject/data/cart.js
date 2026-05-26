export let cart = [
    {
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
    }
];

export function addToCart(productId, quantity){
        let matchingItem;
        cart.forEach((item)=>{
                item.id === productId ? matchingItem = item : 0;
            })

        if(matchingItem){
                matchingItem.quantity = Number(matchingItem.quantity) + Number(quantity);
        }else{
            cart.push({
                productId,
                quantity
            })
        }
}

export function removeFromCart(productId){
    const new_cart = [];
    cart.forEach((item)=>{
        if(item.productId !== productId){
            new_cart.push(item);
        }
    });
    cart = new_cart;
}



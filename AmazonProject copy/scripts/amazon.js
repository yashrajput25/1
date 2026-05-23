

let productHTML = ''

products.forEach((product)=>{

    productHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src='${product.image}'>
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars*10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product["priceCents"]/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select 
                class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button data-product-id = "${product.id}" class="add-to-cart-button button-primary js-add-to-cart">
                Add to Cart
            </button>
        </div>
        `

})

const productGridElement = document.querySelector('.js-products-grid');
productGridElement.innerHTML = productHTML

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click', ()=>{

        const productId = button.dataset.productId;

        const selectorElement = document.querySelector(`.js-quantity-selector-${productId}`);
        let value = selectorElement.value;
        console.log(value);

        let matchingItem;

        cart.forEach((item)=>{
            item.id === productId ? matchingItem = item : 0;
        })

        if(matchingItem){
            console.log("Item already exists!")
            matchingItem.quantity = Number(matchingItem.quantity) + Number(value);
        }else{
            console.log("Item does NOT exists!")
            cart.push({
                id: productId,
                quantity: value
            })
        }

        let cartQuantity = 0;

        cart.forEach((item)=>{
            cartQuantity = Number(cartQuantity) + Number(item.quantity);
        })
        document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    });
})
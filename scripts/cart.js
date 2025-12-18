let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render cart items
let cartHtml = "";

cart.forEach((product) => {
    cartHtml += `
        <div class="cart-product-container">
            <div class="cart-image-container">
                <img src="${product.productImage}" class="cart-product-image">
            </div>

            <div class="cart-product-information">
                <div class="cart-product-name-and--delete-icon">
                    <h3 class="cart-product-name">${product.productName}</h3>
                    <button class="product--delete--btn" data-id="${product.id}">Delete</button>
                </div>
                <br>
        
                <div class="cart-product-price-quantity">
                    <p class="cart-product-price">$${product.productPrice}</p>
                    <p>Qty: ${product.quantity}</p>
                </div> 
            </div> 
        </div>
    `;
});

document.querySelector('.cart-product-holder').innerHTML = cartHtml;

// Delete functionality
document.querySelectorAll('.product--delete--btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); // refresh to update cart
    });
});

// // const cartProduct = [{
// //     productImage: "Amazon Project_files/adults-plain-cotton-tshirt-2-pack-teal.jpg",
// //     productName: "Gradient Plain Shirt",
// //     productSize: "Large",
// //     productColor: "White",
// //     productPrice: "367",
// //     productQuantity: "2"
// // },{
// //     productImage: "Amazon Project_files/men-cozy-fleece-zip-up-hoodie-red.jpg",
// //     productName: "Gradient Plain Shirt",
// //     productSize: "Small",
// //     productColor: "Red",
// //     productPrice: "367",
// //     productQuantity: "1"
// // },{
// //     productImage: "Amazon Project_files/men-golf-polo-t-shirt-blue.jpg",
// //     productName: "Gradient Plain Shirt",
// //     productSize: "Medium",
// //     productColor: "Blue",
// //     productPrice: "367",
// //     productQuantity: "2"
// // }];

// const cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

// let cartHtml = "";

// cartProduct.forEach((product) => {
//     cartHtml += `
//         <div class="cart-product-container">
//             <div class="cart-image-container">
//                 <img src="${product.productImage}" class="cart-product-image">
//             </div>

//             <div class="cart-product-information">
//                 <div class="cart-product-name-and--delete-icon">
//                     <h3 class="cart-product-name">${product.productName}</h3>
//                     <button class="product--delete--btn">Delete</button>
//                 </div>
//                 <div class="cart-size--color">
//                     <p class="cart-product-size"><b>Size:</b> ${product.productSize}</p>
//                     <p class="cart-product-color"><b>Color:</b> ${product.productColor}</p>
//                 </div>
//                 <br>
        
//                 <div class="cart-product-price-quantity">
//                     <p class="cart-product-price">$${product.productPrice}</p>
//                     <button class="cart-quantity-adder">1+2</button>
//                 </div> 
//             </div> 
//         </div>
//     `
// })

// document.querySelector('.cart-product-holder').innerHTML = cartHtml;



// Get cart from localStorage
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

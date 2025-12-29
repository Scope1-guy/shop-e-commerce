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
                    <p class="cart-product-price">$${decimalFixingPerfect(product.productPrice)}</p>
                    <p>Qty: ${product.quantity}</p>
                </div> 
            </div> 
        </div>
    `;
});

console.log(Array.isArray(cart))


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


// Order Summary Calculation

const subtotalCalc = cart.reduce((acc, item) => {
    return acc + item.productPrice
}, 0);

const subtotal = decimalFixingPerfect(subtotalCalc) ;
const discountPercentage = 20;
const discountAmount = decimalFixingPerfect((discountPercentage / 100) * subtotal) ;
const deliveryFee = 15
const totalOverall = decimalFixingPerfect(subtotal - discountAmount + deliveryFee);

const orderSummary = [{
    subtotal: subtotal,
    discount: discountAmount,
    discountPercentage: discountPercentage,
    deliveryFee: deliveryFee,
    total: totalOverall
}]

let summaryHTML = '';

orderSummary.forEach((orders) => {
    summaryHTML += `
                <div class="order-summary--inside">
                    <h3 class="order-summary-title">Order Summary</h3>


                    <div class="lists">
                        <p class="orders-texts-01">Subtotal</p>
                        <p><b>$${orders.subtotal}</b></p>
                    </div>
    
                    <div class="lists">
                        <p class="orders-texts-01">Discount (-${orders.discountPercentage}%)</p>
                        <p><b>-$${orders.discount}</b></p>
                    </div>
    
                    <div class="lists">
                        <p class="orders-texts-01">Delivery Fee</p>
                        <p><b>$${orders.deliveryFee}</b></p>
                    </div>
                    <hr>
    
                    <div class="lists">
                        <p class="orders-texts-01">Total</p>
                        <p><b>$${orders.total}</b></p>
                    </div>



                    <div class="promo-code-inputs">
                        <input type="text" placeholder="Add promo code" class="promo-code-input">
                        <button class="promo-code-apply">Apply</button>
                    </div>
                    <br>

                    <button class="checkout--button">Go to Checkout ></button>
                </div>
    `
});

document.querySelector('.order-summary').innerHTML = summaryHTML;


const promoCode = document.querySelector('.promo-code-input');
const codeApplyBtn = document.querySelector('.promo-code-apply');
const promoCodeList = [{
    promoCode: "SE3RF09N"
},{
    promoCode: "S20P3YHJ"
},{
    promoCode: "KEL0I4BA"
}];

codeApplyBtn.addEventListener('click', () => {

    const isValid = promoCodeList.some(item => item.promoCode === promoCode.value);
    document.querySelector('.promo-code-inputs').innerHTML = isValid ? `<p>${promoCode.value} is accepted</p>` :  `<p>${promoCode.value} is invalid</p>` 
})


function decimalFixingPerfect(fix) {
    return +fix.toFixed(2)
  };






// const array = [{
//     totalPrice: 20
// },{
//     totalPrice: 20
// },{
//     totalPrice: 20
// },{
//     totalPrice: 20
// },{
//     totalPrice: 20
// },{
//     totalPrice: 20
// }];

// let total = 0;
// array.forEach((price) => {
//     total += price.totalPrice
// })
// console.log(total);

// const total2 = array.reduce((acc, total) => {
//     return acc + total.totalPrice;
// }, 0)

// console.log(total2)
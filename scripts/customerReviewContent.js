
// Get saved products
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
const selectedRenderProduct = JSON.parse(localStorage.getItem("selectedRenderProduct"));

// Determine which product to render
let productToRender = null;

if (selectedProduct) {
  productToRender = selectedProduct;
} else if (selectedRenderProduct) {
  productToRender = selectedRenderProduct;
} else {
  alert("No product found");
}

// Render product if exists
if (productToRender) {
  document.querySelector(".products-pictures-big-display-image").src = productToRender.image;
  document.querySelector(".one-life-title").textContent = productToRender.name;
  document.querySelector(".product---cart--rating").textContent = `${productToRender.ratingStars} ${productToRender.rating}`;
  document.querySelector('.price--discount-price').textContent = `$${productToRender.discountPriceCent}`;
  document.querySelector(".price--discount--former-price").textContent = `$${productToRender.discountFormerPriceCent }`;
  document.querySelector(".price--discount--discount-percentage").textContent = `${productToRender.discountPricePercentage}%`;
  document.title = `${productToRender.name} Description`
  // Show "New Arrival" label ONLY if it's a New Arrival product
  if (selectedProduct) {
    document.querySelector(".new-arrival-li").style.display = "block";
  } else {
    document.querySelector(".new-arrival-li").style.display = "none";
  }
}



// // ADD TO CART FEATURE

// REVIEWS DISPLAY


// Add to Cart functionality

// const addToCartBtn = document.querySelector(".add-to-cart");
// const selectQuantityElement = document.querySelector('.product-quality-picker');

// addToCartBtn.addEventListener("click", () => {
//   const selectQuantityElementValue = Number(selectQuantityElement.value);

//   // if (!quantityToAdd || quantityToAdd < 1) return; // if the picked number/value is not a valid number like 0 or w



//   // Determine the active product (New Arrival or Top Selling)
//   const selectedProductActive = JSON.parse(localStorage.getItem("selectedProduct"));
//   const selectedRenderProductActive = JSON.parse(localStorage.getItem("selectedRenderProduct"));


//   // Pick whichever exists
//   const productToAdd = selectedProductActive || selectedRenderProductActive;

//   if (!productToAdd) {
//     alert("No product selected to add to cart!");
//     return;
//   }

//   // Get existing cart from localStorage or empty array if none
//   getCart(cart);
  

//   // Check if product is already in cart
//   const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

//   // ✅ ADD: store unit price once
//   const unitPrice = productToAdd.discountPriceCent;

//   if (existingProductIndex !== -1) {
//     // If product already exists, increase quantity
//     cart[existingProductIndex].quantity += selectQuantityElementValue;

//     // ✅ ADD: recalculate total price
//     cart[existingProductIndex].productPrice =
//       cart[existingProductIndex].unitPrice *
//       cart[existingProductIndex].quantity;

//   } else {
//     // Otherwise, add product
//     cart.push({
//       id: productToAdd.id,
//       productImage: productToAdd.image,
//       productName: productToAdd.name,

//       // ✅ ADD
//       unitPrice: unitPrice,

//       // EXISTING
//       quantity: selectQuantityElementValue,

//       // ✅ CHANGE: total price, not multiplied forever
//       productPrice:  unitPrice * selectQuantityElementValue
//     });
//   }

//   // Save cart back to localStorage
//   saveCart()

//   alert("Product added to cart!");
// });


// function getCart(cart) {
//   // let cart = 
//   JSON.parse(localStorage.getItem("cart")) || [];
// }

// function saveCart() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }


// REWRITING THE ADD TO CART FUNCTIONALITY LIKE A SENIOR DEV AND CLEANER

// ==============================
// DOM REFERENCES
// ==============================
const addToCartBtn = document.querySelector(".add-to-cart");
const quantityPicker = document.querySelector(".product-quality-picker");

// ==============================
// CONSTANTS
// ==============================
const CART_STORAGE_KEY = "cart";
const ACTIVE_PRODUCT_KEYS = [
  "selectedProduct",
  "selectedRenderProduct",
];

// ==============================
// EVENT HANDLER
// ==============================
addToCartBtn.addEventListener("click", handleAddToCart);

// ==============================
// HANDLERS
// ==============================
function handleAddToCart() {
  const quantity = Number(quantityPicker.value);

  if (!isValidQuantity(quantity)) {
    alert("Please select a valid quantity.");
    return;
  }

  const product = getActiveProduct();
  if (!product) {
    alert("No product selected to add to cart.");
    return;
  }

  const cart = getCart();
  upsertCartItem(cart, product, quantity);
  saveCart(cart);

  alert("Product added to cart!");
}

// ==============================
// CART OPERATIONS
// ==============================
function upsertCartItem(cart, product, quantityToAdd) {
  const existingItem = cart.find(item => item.id === product.id);
  const unitPrice = product.discountPriceCent;

  if (existingItem) {
    existingItem.quantity += quantityToAdd;
    existingItem.productPrice = existingItem.unitPrice * existingItem.quantity;
    return;
  }

  cart.push(createCartItem(product, quantityToAdd, unitPrice));
}

function createCartItem(product, quantity, unitPrice) {
  return {
    id: product.id,
    productImage: product.image,
    productName: product.name,
    unitPrice,
    quantity,
    productPrice: unitPrice * quantity,
  };
}

// ==============================
// STORAGE HELPERS
// ==============================
function getCart() {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getActiveProduct() {
  for (const key of ACTIVE_PRODUCT_KEYS) {
    const product = JSON.parse(localStorage.getItem(key));
    if (product) return product;
  }
  return null;
}

// ==============================
// VALIDATION
// ==============================
function isValidQuantity(value) {
  return Number.isInteger(value) && value > 0;
}


// SECTION VIEWS


const headers = document.querySelectorAll(".product-describe-etc-header");
const contents = document.querySelectorAll(".product-describe-etc-contents");

headers.forEach((header, index) => {
  header.addEventListener("click", () => {

    // Hide all contents
    contents.forEach(content => {
      content.style.display = "none";
    });

    // Show the matching content
    contents[index].style.display = "block";
  });
});





const productReviewsContent = [{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },{
    rating: "⭐⭐⭐⭐⭐",
    writerName: "Samantha D.",
    writeUpContent: `I absolutely love this t-shirt! The design is unique and the
    fabric feels so comfortable.As a fellow designer, I appreciate the attention
    to detail. It's become my favorite go-to-shirt.`,
    writeUpDate: "Posted on August 14, 2023"
  },]
  
  let reviewContentVisible = 6;
  const reviewLoader = document.querySelector('.review-loader');


  function renderReview() {

    let reviewHTML = "";

    const reviewToShow = productReviewsContent.slice(0, reviewContentVisible);
  
    reviewToShow.forEach((reviewContent) => {
      reviewHTML += `
        <div class="review-content">
            <div class="review-content-rating">
                <p>${reviewContent.rating}</p>
                <p>...</p>
            </div>
    
            <div class="review-content-writer">
                <h4 class="review-content-writer-name">${reviewContent.writerName}</h4>
            </div>
    
            <p class="review-content-writer-content">${reviewContent.writeUpContent}</p>
    
            <p class="review-content-date-written">${reviewContent.writeUpDate}</p>
        </div>
      `
    })
    document.querySelector('.reviews-contents').innerHTML = reviewHTML;

    if (reviewContentVisible >= productReviewsContent.length) {
      reviewLoader.textContent = "View Less"
    } else {
      reviewLoader.textContent = "View More"
    }
  }
  reviewLoader.addEventListener('click', () => {
    if (reviewContentVisible >= productReviewsContent.length) {
      reviewContentVisible = 6;
    } else {
      reviewContentVisible += 4;
    }
    renderReview();
  });
  renderReview();





  // "YOU MAY ALSO LIKE" CONTENT

  const contentsInYYML = [{
    productImage: "Amazon Project_files/men-chino-pants-beige.jpg",
    productName: "Polo with Contrast Trims",
    productRatingStar: "⭐⭐⭐⭐",
    productRatingNumber: "4.0/5",
    productDiscountPrice: 212,
    productDiscountFormerPrice: 242,
    productDiscountPercentage: 20
  },{
    productImage: "Amazon Project_files/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    productName: "Polo with Contrast Trims",
    productRatingStar: "⭐⭐⭐⭐",
    productRatingNumber: "4.0/5",
    productDiscountPrice: 212,
    productDiscountFormerPrice: 242,
    productDiscountPercentage: 20
  },{
    productImage: "Amazon Project_files/men-chino-pants-beige.jpg",
    productName: "Polo with Contrast Trims",
    productRatingStar: "⭐⭐⭐⭐",
    productRatingNumber: "4.0/5",
    productDiscountPrice: 212,
    productDiscountFormerPrice: 242,
    productDiscountPercentage: 20
  },{
    productImage: "Amazon Project_files/men-chino-pants-beige.jpg",
    productName: "Polo with Contrast Trims",
    productRatingStar: "⭐⭐⭐⭐",
    productRatingNumber: "4.0/5",
    productDiscountPrice: 212,
    productDiscountFormerPrice: 242,
    productDiscountPercentage: 20
  }]

  let contentsInYYMLHTML = '';


  contentsInYYML.forEach((content) => {

    contentsInYYMLHTML += `
      <div class="product-container--TYML">
          <div class="product-image-container">
              <img src="${content.productImage}" class="TYML-product-image">
          </div>
          <h5 class="TYML-product-name">${content.productName}</h5>
          <p class="rating">${content.productRatingStar}${content.productRatingNumber}</p>
          <div class="product--cart--price--discounts--TYML">
              <p class="price--discount-price--TYML">$${content.productDiscountPrice}</p>
              <p class="price--discount--former-price--TYML">$${content.productDiscountFormerPrice}</p>
              <p class="price--discount--discount-percentage--TYML">-${content.productDiscountPercentage}%</p>
          </div>
      </div>
    `
  })

document.querySelector('.TYML-product-container').innerHTML = contentsInYYMLHTML

  // console.log(contentsInYYMLHTML);


// review button

const reviewBoxModal = document.querySelector('.review-dialog-display');
const reviewBtn = document.querySelector('.review-write-btn');
const closeBtnPlusSubmit = document.querySelector('.review-submit-btn');
const reviewFormBox = document.querySelector('.review-form-inputs-box');
const reviewerFirstName = document.querySelector('.reviewer-first-name');
const reviewerLastName = document.querySelector('.reviewer-last-name');
const reviewerText = document.querySelector('.reviewer--review');


reviewBtn.addEventListener('click', () => {
  reviewBoxModal.showModal();
  console.log('button is working')
})

closeBtnPlusSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const reviewArray = {
    rating: "⭐⭐⭐⭐⭐",
    writerName: reviewerFirstName.value + " " + reviewerLastName.value ,
    writeUpContent: reviewerText.value,
    writeUpDate: `Posted on ${new Date()}`
  }

  productReviewsContent.unshift(reviewArray);

  reviewBoxModal.close()

  reviewerFirstName.value = "";
  reviewerLastName.value = "";
  reviewerText.value = "";
  // location.reload();
});

document.querySelector('.modal-close-btn').addEventListener('click', () => {
  reviewBoxModal.close()
})
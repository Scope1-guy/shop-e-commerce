
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
  document.querySelector('.price--discount-price').textContent = `$${(productToRender.discountPriceCent / 100).toFixed(2)}`;
  document.querySelector(".price--discount--former-price").textContent = `$${(productToRender.discountFormerPriceCent / 100).toFixed(2)}`;
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

// // Add to Cart functionality
// const addToCartBtn = document.querySelector(".add-to-cart");
// addToCartBtn.addEventListener("click", () => {

//   // Get existing cart from localStorage or empty array if none
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Check if product is already in cart
//   const existingProductIndex = cart.findIndex(item => item.id === selectedProduct.id);

//   if (existingProductIndex !== -1) {
//     // If product already exists, increase quantity
//     cart[existingProductIndex].quantity += 1;
//   } else {
//     // Otherwise, add product with quantity = 1
//     cart.push({
//       id: selectedProduct.id,
//       productImage: selectedProduct.image,
//       productName: selectedProduct.name,
//       productPrice: (selectedProduct.discountPriceCent / 100).toFixed(2),
//       quantity: 1,
//       // Optional: you can add size/color later if your review page allows
//     });
//   }

//   // Save cart back to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert("Product added to cart!");
// });




// REVIEWS DISPLAY


// Add to Cart functionality
const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  // Determine the active product (New Arrival or Top Selling)
  const selectedProductActive = JSON.parse(localStorage.getItem("selectedProduct"));
  const selectedRenderProductActive = JSON.parse(localStorage.getItem("selectedRenderProduct"));

  // Pick whichever exists
  const productToAdd = selectedProductActive || selectedRenderProductActive;

  if (!productToAdd) {
    alert("No product selected to add to cart!");
    return;
  }

  // Get existing cart from localStorage or empty array if none
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product is already in cart
  const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

  if (existingProductIndex !== -1) {
    // If product already exists, increase quantity
    cart[existingProductIndex].quantity += 1;
  } else {
    // Otherwise, add product with quantity = 1
    cart.push({
      id: productToAdd.id,
      productImage: productToAdd.image,
      productName: productToAdd.name,
      productPrice: (productToAdd.discountPriceCent / 100).toFixed(2),
      quantity: 1,
      // Optional: size/color can be added later
    });
  }

  // Save cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
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


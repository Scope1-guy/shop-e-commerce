

const newArrivalProduct = [{
    id: 1,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 2,
    name: "Plain Cotton T-Shirt",
    image: "Amazon Project_files/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 3,
    name: "Golf Polo T-Shirt",
    image: "Amazon Project_files/men-golf-polo-t-shirt-blue.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 4,
    name: "Plain Hooded Sweatshirt",
    image: "Amazon Project_files/plain-hooded-fleece-sweatshirt-yellow.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 5,
    name: "T-Shirt with tape detail",
    image: "Amazon Project_files/women-chunky-beanie-gray.webp",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 6,
    name: "T-Shirt with tape detail",
    image: "Amazon Project_files/round-sunglasses-black.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 7,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id:8,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 9,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 2.5,
    ratingStars: '⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 10,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 11,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  },{
    id: 12,
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐',
    priceCent: 266,
    discountPriceCent: 266,
    discountFormerPriceCent: 321,
    discountPricePercentage: -30
  }];
  
  let visibleCount = 4; // how many product should show at a time. ie 4
  const buttonForViewing = document.querySelector(".new-arrivals-view-all");
  function renderProduct() {
    let html = "";
    
    // show the first "visibleCount" number of product.
    const productToShow = newArrivalProduct.slice(0, visibleCount);
    
    // For each product, make a small HTML card
    productToShow.forEach(product => {
      html += `
        <div class="product-container" data-product-id="${product.id}">
          <div class="product-image-container">
            <img src="${product.image}" class="product-image">
          </div>
          <h5 class="product-name">${product.name}</h5>
          <p class="rating">${product.ratingStars} ${product.rating}</p>
          <div class="product--cart--price--discounts--newArrival">
              <p class="product-price">$${(product.discountPriceCent / 100).toFixed(2)}</p>
              <p class="price--discount--former-price--newArrival">$${(product.discountFormerPriceCent/100).toFixed(2)}</p>
              <p class="price--discount--discount-percentage--newArrival">-${product.discountPricePercentage}%</p>
          </div>
        </div>
      `;
    });
    document.querySelector(".new-arrivals-products").innerHTML = html;
}


// Get the product data
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

// Check if it exists
if (selectedProduct) {
  document.querySelector(".products-pictures-big-display-image").src = selectedProduct.image;
  document.querySelector(".one-life-title").textContent = selectedProduct.name;
  // document.querySelector(".product-price").textContent = `$${(selectedProduct.priceCent / 100).toFixed(2)}`;
  // document.querySelector(".product---cart--rating").textContent = `${selectedProduct.ratingStars} ${selectedProduct.rating}`;
  // document.querySelector('.price--discount-price').textContent = `$${(selectedProduct.discountPriceCent / 100).toFixed(2)}`;
  // document.querySelector(".price--discount--former-price").textContent = `${(selectedProduct.discountFormerPriceCent / 100).toFixed(2)}`;
  // document.querySelector(".price--discount--discount-percentage").textContent = `${selectedProduct.discountPricePercentage}`
} else {
  console.log("No product found in localStorage");
}

console.log(selectedProduct)
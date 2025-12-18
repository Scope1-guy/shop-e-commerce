const newArrivalProduct = [{
  id: 1,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 2,
  name: "Plain Cotton T-Shirt",
  image: "Amazon Project_files/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐',
  discountPriceCent: decimalFixing (546),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: 40
},{
  id: 3,
  name: "Golf Polo T-Shirt",
  image: "Amazon Project_files/men-golf-polo-t-shirt-blue.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (566),
  discountFormerPriceCent: decimalFixing (1741),
  discountPricePercentage: 10
},{
  id: 4,
  name: "Plain Hooded Sweatshirt",
  image: "Amazon Project_files/plain-hooded-fleece-sweatshirt-yellow.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',

  discountPriceCent: decimalFixing (2260),
  discountFormerPriceCent: decimalFixing (3901),
  discountPricePercentage: 60
},{
  id: 5,
  name: "T-Shirt with tape detail",
  image: "Amazon Project_files/women-chunky-beanie-gray.webp",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 6,
  name: "T-Shirt with tape detail",
  image: "Amazon Project_files/round-sunglasses-black.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 7,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id:8,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 9,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 2.5,
  ratingStars: '⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 10,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 11,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (266),
  discountFormerPriceCent: decimalFixing (321),
  discountPricePercentage: -30
},{
  id: 12,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  rating: 4.5,
  ratingStars: '⭐⭐⭐⭐',
  discountPriceCent: decimalFixing (1206),
  discountFormerPriceCent: decimalFixing (1921),
  discountPricePercentage: 20
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
            <p class="product-price">$${product.discountPriceCent}</p>
            <p class="price--discount--former-price--newArrival">$${product.discountFormerPriceCent}</p>
            <p class="price--discount--discount-percentage--newArrival">-${product.discountPricePercentage}%</p>
        </div>
      </div>
    `;
  });
  document.querySelector(".new-arrivals-products").innerHTML = html;

  // Change button text depending on how many are showing
  if (visibleCount >= newArrivalProduct.length) {
    buttonForViewing.textContent = "View Less";
  } else {
    buttonForViewing.textContent = "View More";
  }

  document.querySelectorAll(".product-container").forEach((productBox) => {
    productBox.addEventListener('click', () => {
      const productBoxId = parseInt(productBox.dataset.productId);
      console.log(productBoxId);
      const clickedProduct = newArrivalProduct.find(p => p.id === productBoxId); //.find() searches inside the array and gives you back the actual object that meets your condition.
      console.log(clickedProduct.name, clickedProduct.discountPriceCent);
      
      
      localStorage.removeItem("selectedRenderProduct");
      localStorage.setItem("selectedProduct", JSON.stringify(clickedProduct));

      window.location.href = "product-description.html";
      
    });
  });

}

// When button is clicked
buttonForViewing.addEventListener("click", () => {
  // If we're already showing all → go back to 4
  if (visibleCount >= newArrivalProduct.length) {
    visibleCount = 4;
  } else {
    // otherwise, show 4 more
    visibleCount += 4;
  }

  // Re-show the products
  renderProduct();
});

// Show the first 4 when the page loads
renderProduct();




// TOP SELLING PRODUCT 

const topSellingProduct = [{
  id: 1000,
  name: "Athletic Cotton Socks",
  image: "Amazon Project_files/athletic-cotton-socks-6-pairs.jpg",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 2000,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 3000,
  name: "T-Shirt with tape detail",
  image: "Amazon Project_files/knit-athletic-sneakers-pink.webp",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 4000,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 5000,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
},{
  id: 6000,
  name: "T-Shirt with tape detail",
  image: "icons/IMG-20251028-WA0224.jpg",
  ratingStars: '⭐⭐⭐⭐',
  rating: 4.5,
  discountPriceCent: decimalFixing (2660),
  discountFormerPriceCent: decimalFixing (3210),
  discountPricePercentage: 30
}];

let visibleCounts = 4;
const buttonForViewingTop = document.querySelector(".top-selling-view-all");

function renderTopSelling() {
  let topHTML = "";
  
  const productToShowTop = topSellingProduct.slice(0, visibleCounts);
  
  
  productToShowTop.forEach((topProduct) => {
    topHTML += ` 
      <div class="product-containers" data-top-product-id="${topProduct.id}">
        <div class="product-image-container">
          <img src="${topProduct.image}" class="product-image">
        </div>
        <h5 class="product-name">${topProduct.name}</h5>
        <p class="rating">${topProduct.ratingStars} ${topProduct.rating}</p>
        <div class="product--cart--price--discounts--newArrival">
            <p class="product-price">$${topProduct.discountPriceCent}</p>
            <p class="price--discount--former-price--newArrival">$${topProduct.discountFormerPriceCent}</p>
            <p class="price--discount--discount-percentage--newArrival">-${topProduct.discountPricePercentage}%</p>
        </div>
      </div>
  `
  });
  document.querySelector(".top-selling-products").innerHTML = topHTML;

  if (visibleCounts >= topSellingProduct.length) {
    buttonForViewingTop.textContent = "View Less"
  } else {
    buttonForViewingTop.textContent = "View More"
  }
  

  document.querySelectorAll('.product-containers').forEach((renderClick) => {
    renderClick.addEventListener('click', () => {
      const renderBoxId = parseInt(renderClick.dataset.topProductId);
      console.log(renderBoxId);

      const clickedRenderProduct = topSellingProduct.find(p => p.id === renderBoxId); //.find() searches inside the array and gives you back the actual object that meets your condition.
      console.log(clickedRenderProduct);
      localStorage.removeItem("selectedProduct")
      localStorage.setItem("selectedRenderProduct", JSON.stringify(clickedRenderProduct));

      window.location.href = "product-description.html";
    })
  })


}
  buttonForViewingTop.addEventListener('click', () => {
    if (visibleCounts >= topSellingProduct.length) {
      visibleCounts = 4;
    } else {
      visibleCounts += 4;
    }
    renderTopSelling();
  });

renderTopSelling()







// CUSTOMERS COMMENT FEATURE

const customersComments = [{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"I'm blown away by the quality and style..."`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Exceeded expectations!"`,
}, {
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: "I'm blown away by the quality and style of the clothes i received from Shop.co.From casual wears to elegant dresses, every piece i've bought has exceeded my expectations."
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
},{
  rating: '⭐⭐⭐⭐⭐',
  name: 'Sarah M.' ,
  comment: `"Amazing quality!"`,
}];

// carousel state
let currentIndex = 0;
const itemsPerPage = 4;
const commentContainer = document.querySelector('.comment-box-line');
const prevBtn = document.querySelector('.happy-customer-back-btn');
const nextBtn = document.querySelector('.happy-customer-next-btn');

function renderingThreeComments() {
  const sliceComments = customersComments.slice(currentIndex, currentIndex + itemsPerPage);

  let commentHTML = '';
  sliceComments.forEach((cuscom) => {
    commentHTML += `
      <div class="customers-comments-box">
        <h2 class="comment-rating">${cuscom.rating}</h2>
        <h5 class="customers-name">${cuscom.name}</h5>
        <p class="customers-r-comment">${cuscom.comment}</p>
      </div>
    `;
  });

  commentContainer.innerHTML = commentHTML;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex + itemsPerPage >= customersComments.length;
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - itemsPerPage);
  renderingThreeComments();
});

nextBtn.addEventListener('click', () => {
  const maxStart = customersComments.length - itemsPerPage;
  currentIndex = Math.min(maxStart, currentIndex + itemsPerPage);
  renderingThreeComments();
});

// initial render
renderingThreeComments();




// function getUserRole(role) {
//   const roles = {
//     admin: 'Full Access',
//     editor: 'Edit Access',
//     viewer: 'Read-Only Access'
//   };

//   return roles[role] || 'No access'
// }

// console.log(getUserRole('editor'));



function decimalFixing (fix) {
  return (fix / 100).toFixed(2)
};
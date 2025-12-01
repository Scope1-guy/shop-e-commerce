const casualWearSelection = [{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},,{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
},{
    name: "T-Shirt with tape detail",
    image: "icons/IMG-20251028-WA0224.jpg",
    rating: 4.5,
    ratingStars: '⭐⭐⭐⭐⭐',
    discountPriceCent: 2660,
    discountFormerPriceCent: 3210,
    discountPricePercentage: 30
}];

let causalWears = ''; 

casualWearSelection.forEach((casuals) => {
    causalWears += `
    <div class="product-container--casual">
        <div class="product-image-container">
            <img src="${casuals.image}" class="product-image--casual">
        </div>
        <h5 class="product-name--casual">${casuals.name}</h5>
        <p class="rating">${casuals.ratingStars} ${casuals.rating}</p>
        <div class="product--cart--price--discounts--casual">
            <p class="price--discount-price--casual">$${casuals.discountPriceCent}</p>
            <p class="price--discount--former-price--casual">$${casuals.discountFormerPriceCent}</p>
            <p class="price--discount--discount-percentage--casual">-${casuals.discountPricePercentage}%</p>
        </div>
    </div>
    `
})

document.querySelector('.casuals--products-displays').innerHTML = causalWears;



document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.product-carousel');
  const productCards = document.querySelectorAll('.product-card');
  const cardWidth = productCards[0].offsetWidth;
  const carouselWidth = cardWidth * productCards.length;
  let currentPosition = 0;

  // Set the carousel width to accommodate all product cards
  carousel.style.width = `${carouselWidth}px`;

  function slideCarousel() {
    currentPosition = (currentPosition + 1) % productCards.length;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
  }

  setInterval(slideCarousel, 5000); // Adjust the slide interval as needed
});


document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelector(".testimonial-carousel");
  const slides = testimonials.querySelectorAll(".testimoniall");
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    testimonials.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(nextSlide, 4000);
});

const showAlertButtons = document.querySelectorAll('.showAlert');
const closeAlertButton = document.querySelector('.closeAlert');
const overlay = document.getElementById('overlay');

showAlertButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    overlay.style.display = 'block';
  });
});

closeAlertButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});




// Function to handle the click event on the "Add to Cart" button
function addToCart(productId) {
    // TODO: Implement the logic to add the product with the given productId to the shopping cart
    console.log("Adding product with ID " + productId + " to the cart...");
  }
  
  // Function to handle the click event on the "View Details" button
  function viewProductDetails(productId) {
    // TODO: Implement the logic to display the product details for the product with the given productId
    console.log("Viewing details for product with ID " + productId + "...");
  }
  
  // Function to load featured products dynamically from the server
  function loadFeaturedProducts() {
    // Simulating an AJAX request to fetch the featured products
    setTimeout(function() {
      // Dummy data for demonstration
      const products = [
        { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
        { id: 2, name: "Product 2", price: 24.99, image: "product2.jpg" },
        { id: 3, name: "Product 3", price: 14.99, image: "product3.jpg" },
      ];
  
      // Get the container element for displaying the featured products
      const featuredProductsContainer = document.getElementById("featured-products-container");
  
      // Clear the container
      featuredProductsContainer.innerHTML = "";
  
      // Loop through the products and create product cards dynamically
      products.forEach(function(product) {
        // Create the product card element
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
  
        // Set the product card content
        productCard.innerHTML = `
          <img src="images/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
          <button class="buy-button" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-button" onclick="viewProductDetails(${product.id})">View Details</button>
        `;
  
        // Append the product card to the container
        featuredProductsContainer.appendChild(productCard);
      });
    }, 1000); // Simulate a delay of 1 second for loading the products
  }
  








  // Call the function to load the featured products when the page is loaded
  window.addEventListener("load", function() {
    loadFeaturedProducts();
  });
  
  document.getElementById('green-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value;
    // Perform search functionality based on the searchTerm
    // For example, redirect to search results page or display search results on the same page
  });
  
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'block';
    }, 2000);
  });



  
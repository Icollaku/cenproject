// Array to store products
const products = [
  { id: 1, name: "Product 1", price: 10.00 ,image: "https://d588pl23lb4ru.cloudfront.net/spree/products/124410/product/saba.ACE.IQ.combo-1080x1080.jpg?1690293182"},
  { id: 2, name: "Wireless Earbuds", price: 35.00 ,image: "https://s.alicdn.com/@sc04/kf/Ha7e37a3d2f24416f8bb8e9234f55e74fa.jpg_300x300.jpg"},
  { id: 3, name: "Smart Sunglasses", price: 59.99 ,image: "https://s.alicdn.com/@sc04/kf/He4b1f9e49e284ab3a65b762ed2185c02g.png_300x300.jpg"},
  { id: 4, name: "Pile of Logs", price: 90 ,image: "https://s.alicdn.com/@sc04/kf/Uf45f84f9aa1343b28ea1093ff4397892F.jpeg_300x300.jpg"},
  { id: 5, name: "Eye Massager", price: 29.35 ,image: "https://s.alicdn.com/@sc04/kf/H71c979234b724681aa5ec11458576a02c.jpg_300x300.jpg"},
  { id: 6, name: "Solar Panes", price: 0.15 ,image: "https://s.alicdn.com/@sc04/kf/H488ff69696df463694be50152e9ba8bc2.jpg_300x300.jpg"},
  { id: 7, name: "Herbal patch", price: 0.35 ,image: "https://s.alicdn.com/@sc04/kf/H0e2da6421e334174993c2ac5b314ec8ch.jpg_300x300.jpg"},
  { id: 8, name: "Single Ear Wireless Headphones", price: 6.50 ,image: "https://s.alicdn.com/@sc04/kf/H0b897f865a96483692f4f9bf0549fcb7H.jpg_300x300.jpg"},
  { id: 9, name: "18X8 20X8 Inch Alloy Wheels", price: 85.00 ,image: "https://s.alicdn.com/@sc04/kf/H45456495f0db4246991e43b521f40158r.jpg_250x250xz.jpg"},
  { id: 10, name: "HP 952 ink Cartirdges", price: 79.89 ,image: "https://m.media-amazon.com/images/I/71tZw0rUWTS._AC_UL320_.jpg"},
  { id: 11, name: "iPhone Charger", price: 9.99 ,image: "https://m.media-amazon.com/images/I/51vqYPmotDL._AC_UL320_.jpg"},
  { id: 12, name: "3 in 1 Charging Station for iPhone", price: 29.99 ,image: "https://m.media-amazon.com/images/I/61Kf+coz5uL._AC_UL320_.jpg"},
  { id: 13, name: "USB to USB C Adapter", price: 8.99 ,image: "https://m.media-amazon.com/images/I/61hh93h2ZbL._AC_UL320_.jpg"},
  { id: 14, name: "SanDisk 128GB", price: 19.99 ,image: "https://m.media-amazon.com/images/I/81wwLOgkLgL._AC_UL320_.jpg"},
  { id: 15, name: "Air tags-2 pack", price: 15.99 ,image: "https://m.media-amazon.com/images/I/61hwjL+ChKL._AC_UL320_.jpg"},
  { id: 16, name: "VR Headset", price: 31.99 ,image: "https://m.media-amazon.com/images/I/61Yf+5BI4DL._AC_UL320_.jpg"},
  { id: 17, name: "USB C Car Charger Adapter", price: 8.99 ,image: "https://m.media-amazon.com/images/I/71WuW-IcDLL._AC_UL320_.jpg"},
  { id: 18, name: "Phone Mount", price: 9.99 ,image: "https://m.media-amazon.com/images/I/916U7gmZdaL._AC_UL320_.jpg"},
  

  

  // Add more products as needed
];
function displayProducts() {
  const productsContainer = document.getElementById("products");

  // Clear existing content
  productsContainer.innerHTML = "";

  // Loop through the products and create HTML elements
  products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      // Include the image in the product element
      productElement.innerHTML = `<img src="${product.image}" alt="${product.name}"  width="150" 
      height="150" />
                                  <p>${product.name} - $${product.price}  </p>
                                  <button class="addToCart" onclick="addToCart(products[${product.id-1} ])">Add to Cart</button>`;

      productsContainer.appendChild(productElement);
  });
}

// Check if the user is authenticated
function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
      // Redirect to the login page if the user is not authenticated
      window.location.href = "login.html";
      window.location.href = "cart.html";

  }
}

// Function to perform login
function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the email and password fields are filled
  if (!email || !password) {
      alert("Please fill in all fields.");
      return;
  }

  // Check if the user exists
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = existingUsers.find(u => u.email === email && u.password === password);

  if (!user) {
      alert("Invalid credentials. Please check your email and password.");
      return;
  }

  // For simplicity, we'll use localStorage to simulate authentication
  localStorage.setItem("user", JSON.stringify({ email }));
  window.location.href = "home.html";
}

 


// Function to perform registration
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if any of the fields is left blank
  if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
  }

  // Check if the user already exists
  const existingUser = JSON.parse(localStorage.getItem("users")) || [];
  if (existingUser.some(user => user.email === email)) {
      alert("User already exists. Please login.");
      window.location.href = "login.html";
      return;
  }

  // Save the user in localStorage
  const newUser = { name, email, password };
  existingUser.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUser));

  // Redirect to the login page after successful registration
  alert("Registration successful. Please login.");
  window.location.href = "login.html";
}


// Function to add a product to the cart
function addToCart(selectedProduct) {
  // Get the current cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      cartItems.push(selectedProduct);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert("Product added to the cart!");
}

// Function to dynamically generate product elements on the home page
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");


  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Display cart items
  cartItems.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
      cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to handle checkout (clear cart for simplicity)
function checkout() {
  localStorage.removeItem("cart");
  alert("Checkout successful. Your cart has been cleared.");
  displayCartItems(); // Update the displayed cart items
}



// Function to log out
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function searchProducts() {
  // Get the search input value
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  // Filter products based on the search value
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchValue)
  );

  // Display the filtered products
  displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
  const productsContainer = document.getElementById("products");

  // Clear existing content
  productsContainer.innerHTML = "";

  // Loop through the filtered products and create HTML elements
  filteredProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      // Include the image in the product element
      productElement.innerHTML = `<img src="${product.image}" alt="${product.name}" width="150" 
      height="150">
                                  <p>${product.name} - $${product.price}</p>
                                  <button class="addToCart" onclick="addToCart(${product.id})">Add to Cart</button>`;

      productsContainer.appendChild(productElement);
  });
}
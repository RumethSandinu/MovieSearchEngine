// Get DOM elements
const cartIcon = document.getElementById("cart-icon");
const cartCloseIcon = document.getElementById("close-cart");
const cartContent = document.getElementById("cart-content");
const checkoutBtn = document.getElementById("checkout-btn");
const cartItemCount = document.getElementById("cart-item-count");
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImg = document.getElementById('popup-img');
const popupDescription = document.getElementById('popup-description');
const popupPrice = document.getElementById('popup-price');

 // Get the root element (html) to change font size
 const rootElement = document.querySelector("html");

 // Get the initial font size
 let initialFontSize = parseInt(
   window.getComputedStyle(rootElement).getPropertyValue("font-size")
 );
 let currentFontSize = initialFontSize;

 // Function to increase font size by 5px
 function increaseFontSize() {
   if (currentFontSize < initialFontSize + 10) {
     currentFontSize += 5;
     rootElement.style.fontSize = `${currentFontSize}px`;
   }
 }

 // Function to decrease font size by 5px
 function decreaseFontSize() {
  if (currentFontSize > initialFontSize - 5 ){
    currentFontSize -= 5;
    rootElement.style.fontSize = `${currentFontSize}px`;
  }
 }

 // Adding event listeners to the buttons
 document.getElementById("increase").addEventListener("click", increaseFontSize);
 document.getElementById("decrease").addEventListener("click", decreaseFontSize);



function openPopup(title, imgSrc, description, price) {
  popupTitle.textContent = title;
  popupImg.src = imgSrc;
  popupDescription.textContent = description;
  popupPrice.textContent = price;

  popup.classList.add('active');
}

// Function to close the popup
function closePopup() {
  popup.classList.remove('active');
}

// Event listener for the close button
document.querySelector('.popup-close').addEventListener('click', closePopup);

// Event listener for "Read More" button in product boxes
document.querySelectorAll('.more-info').forEach((button) => {
  document.body.classList.add("no-scroll");
  button.addEventListener('click', () => {
    const productBox = button.closest('.product-box');
    const title = productBox.querySelector('.product-title').textContent;
    const imgSrc = productBox.querySelector('.product-img').src;
    const description = productBox.querySelector('.details').textContent;
    const price = productBox.querySelector('.price').textContent;

    openPopup(title, imgSrc, description, price);
  });
});





// Initialize cart
let cartItems = [];

if(!document.querySelector(".cart").classList.add("active")){
  document.body.classList.remove("no-scroll");
  document.querySelector(".cart").classList.remove("active");
}

// Open Cart
cartIcon.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  document.querySelector(".cart").classList.add("active");
  // Empty Cart Message
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  if (cartItems.length === 0) {
    if (!emptyCartMessage) {
      const emptyCartMessage = document.createElement("div");
      emptyCartMessage.id = "emptyCartMessage";
      emptyCartMessage.textContent = "Your cart is empty";
      cartContent.appendChild(emptyCartMessage);
    }
  }
  
});

// Close Cart
cartCloseIcon.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  document.querySelector(".cart").classList.remove("active");
  //Remove Empty Cart Message from repeating
  if (emptyCartMessage) {
    cartContent.removeChild(emptyCartMessage);
  }
});

// Add to cart button
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-cart")) {
    const productTitle = event.target.getAttribute("data-title");
    const productPrice = parseFloat(event.target.getAttribute("data-price"));
    const productImg = event.target.getAttribute("data-img");

    // Checking if the product is already in the cart
    const existingItem = cartItems.find((item) => item.title === productTitle);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        title: productTitle,
        price: productPrice,
        quantity: 1,
        img: productImg,
      });
    }
  

    // Update the cart content
    updateCartContent();
    // Update the cart icon count
    updateCartIconCount();
  }else if (event.target.classList.contains("cart-remove")){
    const productTitle = event.target.previousElementSibling.firstElementChild.textContent;

    // Remove the item from the cart
    cartItems = cartItems.filter((item) => item.title !== productTitle);
    

    // Update the cart content
    updateCartContent();
    // Update the cart icon count
    updateCartIconCount();
  }
});



// Handling change in cart item quantity
document.addEventListener("change", (event) => {
  if (event.target.classList.contains("cart-quantity")) {
    const productTitle = event.target.parentElement.parentElement.querySelector(".cart-product-title").textContent;
    let newQuantity = parseInt(event.target.value);
    // Quantity is a positive number
    newQuantity = newQuantity > 0 ? newQuantity : 0;
    // Update the quantity for the item in the cart
    const item = cartItems.find((item) => item.title === productTitle);
    if (item) {
      item.quantity = newQuantity;
      if (newQuantity===0){
        cartItems = cartItems.filter((item)=>item.title !== productTitle);
      }
    }
    // Update the cart content
    updateCartContent();
    // Update the cart icon count
    updateCartIconCount();
  }
});

// Update the cart content
function updateCartContent() {
  // Clear the cart content
  cartContent.innerHTML = "";
  // Calculate total price and update cart items
  let totalPrice = 0;
  for (const item of cartItems) {
    const { title, price, quantity, img } = item;
    totalPrice += price * quantity;
    // Create cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-box");
    cartItem.innerHTML = `
      <img src="${img}" class="cart-img">
      <div class="detail-box">
          <div class="cart-product-title">${title}</div>
          <div class="cart-price">$${price}</div>
          <input type="number" value="${quantity}" class="cart-quantity">
      </div>
      <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    cartContent.appendChild(cartItem);
  }
  // Update the total price
  document.querySelector(".total-price").textContent = `$${totalPrice.toFixed(2)}`;
}
// Update the cart icon count
function updateCartIconCount() {
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartItemCount.textContent = count;
}
// Handling checkout button
checkoutBtn.addEventListener("click",(event) => {
  if (cartItems.length <= 0) {
    // Display alert message if the cart is empty
    alert("Your cart is empty!");
    event.preventDefault();
    return;
  } 
});

//Check-out form
function formvalidation() {
  const Firstname = document.getElementById('firstName').value;
  const Lastname = document.getElementById('lastName').value;
  const Address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const Telephone = document.getElementById('contactNumber').value;
  const paymethod = document.getElementById('paymentMethod').value;
  const cardname = document.getElementById('cardName').value;
  const cardnum = document.getElementById('cardNumber').value;
  const exp = document.getElementById('expDate').value;
  const cvv = document.getElementById('cvv').value;

  //Form Validation
  if (Firstname === "" || Lastname === "" || email === "" || Address === "" || Telephone === "") {
    alert("Please fill in all the required fields!");
  }
  else if (paymethod === "creditCard" && (cardname === "" || cardnum === "" || exp === "" || cvv === "")) {
    alert("Please fill in the card details!");
  }
  else if (paymethod === "debitCard" && (cardname === "" || cardnum === "" || exp === "" || cvv === "")) {
    alert("Please fill in the card details!");
  }else{
    //Order Confirmation Message
    const orderConfirmationPopup = document.getElementById('orderConfirmationPopup');
    const closeButton = orderConfirmationPopup.querySelector('.close');

    const message = "Hey " + Firstname + " " + Lastname + "\n" + "Thank you for shopping with us." + "\n" + "Have a nice day!";
    const orderConfirmationMessage = document.getElementById('orderConfirmationMessage');
    orderConfirmationMessage.textContent = message;
    
    orderConfirmationPopup.style.display = "block";

    closeButton.addEventListener('click', () => {
      orderConfirmationPopup.style.display = "none";
    });
    
  }
}
  
  
  



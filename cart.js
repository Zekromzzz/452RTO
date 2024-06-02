
/*Honorary Production by Zekrom*/ 
document.getElementById('username').textContent = localStorage.getItem('username');

let cart = {  
    items: {},  
    totalItems: 0,  
    totalPrice: 0  
  };  
    
  function addToCart(itemId, itemName, price) {  
    if (!cart.items[itemId]) {  
      cart.items[itemId] = {  
        name: itemName,  
        price: price,  
        quantity: 1  
      };  
    } else {  
      cart.items[itemId].quantity++;  
    }  
    updateCart();  
  }  
    
  function removeFromCart(itemId) {  
     
      delete cart.items[itemId];  
     
    updateCart();  
  }  
    
  function updateQuantity(itemId, quantity) {  
    if (cart.items[itemId]) {  
      cart.items[itemId].quantity = quantity;  
      updateCart();  
    }  
  }  
    
 function updateCart() {  
    let cartHtml = '';  
    cart.totalItems = 0;  
    cart.totalPrice = 0;  
    for (let itemId in cart.items) {  
      let item = cart.items[itemId];
      let itemTotalPrice = item.price * item.quantity;  
      cartHtml += `<div class="cart-item">  
        <span>${item.name}</span>  
        <div class="cart-item-quantity-wrapper">  
          <button onclick="updateQuantity('${itemId}', ${item.quantity - 1})" class="cart-item-quantity-button">-</button>  
          <input type="number" class="cart-item-quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity('${itemId}', this.value)">  
          <button onclick="updateQuantity('${itemId}', ${item.quantity + 1})" class="cart-item-quantity-button">+</button>  
        </div>
        <span class="cart-item-price">Price:A$${item.price}</span>   
        <span class="cart-item-price">Total:A$${itemTotalPrice}</span>  
        <button onclick="removeFromCart('${itemId}')">remove</button>  
      </div>`;  
      cart.totalItems += item.quantity;    
      cart.totalPrice += itemTotalPrice; 
    }  
    document.getElementById('cart-items').innerHTML = cartHtml;  
    document.getElementById('cart-total-items').textContent = cart.totalItems;  
    document.getElementById('cart-total-price').textContent = 'A$' + cart.totalPrice.toFixed(2);  
  }  
    
  // Initialize shopping cart display (if there are products passed through URL parameters)  
  window.onload = function() {  
    updateCart();  
  }; 
  function clearCart() {  
    cart.items = {}; // Clear items from shopping cart  
    cart.totalItems = 0; // Reset total product quantity  
    cart.totalPrice = 0; // Reset total price  
    updateCart(); // Update shopping cart display
  }
  function checkout() {  
    alert(
      'You bought ' + cart.totalItems +' products'+"\n"+
      'Your total price is A$ ' + cart.totalPrice
    );
    clearCart()  
};
// Simple storage of user information
function registerUser() {  
  var username = document.getElementById('username').value;  
  var password = document.getElementById('password').value;  
  var email = document.getElementById('email').value;
  var Gender = document.getElementById('Gender').value;
  var Grade = document.getElementById('Grade').value;
  var Country = document.getElementById('Country').value;  

  //Here, we simply store user information in localStorage  
  localStorage.setItem('username', username);  
  localStorage.setItem('password', password);  
  localStorage.setItem('email', email);
  localStorage.setItem('Gender', Gender);
  localStorage.setItem('Grade', Grade);
  localStorage.setItem('Countryl', Country);  

  //Jump to login page  
  window.location.href = 'login.html';  
}  
// validate logon Form Validation 
function loginUser() {  
  var username = document.getElementById('username').value;  
  var password = document.getElementById('password').value; 

  //Check if there is a corresponding username and password in localStorage  
  if (localStorage.getItem('username') === username && localStorage.getItem('password') === password)  {  
      // Login successful, redirect to shopping page 
      window.location.href = 'courseware.html';  
  } else {  
      // Login failed, display error message or return to registration page error handling 
      alert('Login failed. Please register.');  
      window.location.href = 'register.html';  
  }  
} 
// Dropdown navigation menu  
function toggleDropdown() {  
  document.getElementById("myDropdown").classList.toggle("show");  
}  

// Close the dropdown menu, if the user clicks on a dropdown button outside of the dropdown menu 
window.onclick = function(event) {  
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content a')) {  
      var dropdowns = document.getElementsByClassName("dropdown-content");  
      var i;  
      for (i = 0; i < dropdowns.length; i++) {  
          var openDropdown = dropdowns[i];  
          if (openDropdown.classList.contains('show')) {  
              openDropdown.classList.remove('show');  
          }  
      }  
  }  
}

function navigateToRegister() {  
  window.location.href = 'register.html';  
}
  

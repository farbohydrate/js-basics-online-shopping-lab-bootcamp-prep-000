var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var theCart = getCart();
  var output = "In your cart, you have";
  if(theCart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
    for(let i = 0; i < theCart.length; i++){
      let key = Object.keys(theCart[i])[0];
      let price = theCart[i][key];
      if(theCart.length > 1 && i === theCart.length - 1){
        output += ' and';
      }
      output += ` ${key} at $${price}`;
      output += (theCart.length > 2 && i < theCart.length - 1) ? ',' : '';
      output += (i === theCart.length - 1) ? '.' : '';
    }
    console.log(output);
  }
}

function total() {
  var theCart = getCart();
  var totalPrice = 0;
  for(let i = 0; i < theCart.length; i++){
    let key = Object.keys(theCart[i])[0];
    let price = parseInt(theCart[i][key]);
    totalPrice += price;
  }
  return totalPrice;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    console.log(i);
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    } else {
      return "That item is not in your cart.";
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

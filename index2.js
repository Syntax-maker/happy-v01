
// get all elements with class name 'btns'
const btn = document.getElementsByClassName('btns')
// create an array to store products
const products = []


// loop through each element with class name 'btns'
for(var i = 0; i < btn.length; i++){
    // get the current button
    let cartBtn = btn[i]
    // add a click event listener to the button
    cartBtn.addEventListener('click', () =>{
          // get the product information from the parent element of the button
        let product = {
              // get the product image source
            image: event.target.parentElement.parentElement.children[0].children[0].src,
             // get the product name
            name: event.target.parentElement.parentElement.children[1].children[0].textContent,
              // get the product price
            price: event.target.parentElement.parentElement.children[2].children[0].textContent,
             // calculate the total price of the product (price * quantity)
            totalPrice: parseFloat(event.target.parentElement.parentElement.children[2].children[0].textContent),
              // set the initial quantity to 1
            quantity: 1
        }
     // add the product to local storage
        addItemToLocal(product)
    })
}
// function to add an item to local storage
function addItemToLocal(product){
     // get the items from local storage    
let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
// if there are no items in local storage
if(cartItem === null){
      // add the current product to the 'products' array
products.push(product)
 // store the 'products' array in local storage
localStorage.setItem('prdInCart', JSON.stringify(products))

}else{
       // loop through each item in the cart
    cartItem.forEach(item => {
           // if the product name is already in the cart, update the quantity and total price
        if(product.name == item.name){
            product.quantity = item.quantity += 1;
            // Increment the total price of "product" by its own total price.
            product.totalPrice = item.totalPrice += product.totalPrice;
        }else{
              // If the name of the current item in the loop is not equal to the name of "product".
                // Push the current item in the loop into the "products" array.
            products.push(item)
        }
    });
      // Push "product" into the "products" array.
    products.push(product)
}
  // store the updated 'products' array in local storage
localStorage.setItem('prdInCart', JSON.stringify(products))
    // reload the page
window.location.reload()
}

// function to display the number of items in the cart in the navigation bar
function cartNumberDisplay(){
      // initialize the cart item count to 0
    let cartNumbers = 0;
      // get the items from local storage
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
       // loop through each item in the cart
    cartItem.forEach(item => {
            // add the quantity of each item to the total count
        cartNumbers = item.quantity += cartNumbers;
    });
     // Log the total count of items in the cart to the console.
    console.log(cartNumbers);
      // Update the text content of the element with class "nav span" to the total count of items in the cart.
    document.querySelector('.nav span').textContent = cartNumbers;
}
// Call the "cartNumberDisplay" function to display the number of items in the cart.
cartNumberDisplay()



// Firstly, it sets the "checkout" button to disabled. 
function dispCartItem(){
    document.querySelector("#checkout").disabled = true;
    // Next, it initializes a variable "html" as an empty string. 
    let html = '';
    // Then, it retrieves the items stored in local storage with the key "prdInCart" and parse it into a JavaScript object.
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    // If there is no item in the shopping cart or the length of the cart item is equal to 0, 
    if (!cartItem || cartItem.length === 0) {
         // it updates the "html" variable with a message indicating the cart is empty.
        html += `<table><tbody class="cartlist"><td colspan="6" class="item-empty py-4">Your cart is empty</td></tbody></table>`;
         // and sets the "checkout" button to disabled.
        document.querySelector("#checkout").disabled = true;
        // If there are items in the shopping cart,
    } else {
         // it sets the "checkout" button to enabled.
        document.querySelector("#checkout").disabled = false;
         // then, it loops through each item in the shopping cart
        cartItem.forEach(item => {
          // and updates the "html" variable with the HTML content for each item.
            html += `
            <table width="100%">
            <thead></thead>
            <tbody class="cartlist">
            <td class="forImage text-center py-4"> <img src="${item.image}" alt=""></td>
            <td class="forName  py-4 text-truncate"> <h5>${item.name}</h5></td>
            <td class="forPrice  py-4"> <h3>₱${item.price}</h3></td>
            <td class="forQuantity  py-4">  <input class="cart-quantity-input" type="number" value="${item.quantity}"></td>
            <td class="forTotal  py-4"><h3>₱${item.totalPrice}</h3></td>
            <td class="reoveItem py-4"><button><i class="fa fa-trash" aria-hidden="true"></i>
            </button></td>
            </tbody>
            </table>    
    </div>
       </div>
            `
        });
    }
       // and updates the "html" variable with the HTML content for each item.
    document.querySelector('.cartdisp').innerHTML = html;
}
// The function is called to execute it.
dispCartItem()


//remove Item
//Get the elements with class name 'removeItem'
const removeItem = document.getElementsByClassName('reoveItem')
// Loop through the elements
for(var i = 0; i < removeItem.length; i++){
     // Get the remove button for each element
    let removeBtn = removeItem[i]
     // Add click event listener to each remove button
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
         // Log the name of the item that was clicked to be removed
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
         // Loop through the cart items
        cartItem.forEach(item => {
             // Check if the name of the item being looped through is not the same as the name of the item that was clicked to be removed
            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                   // If it's not the same, push it to the products array
                products.push(item) 
            }
        });
           // Store the updated products array in local storage
        localStorage.setItem('prdInCart', JSON.stringify(products))
        // Reload the page to reflect the changes
        window.location.reload()
    })
}


function cartPrice(){
    let subTotal = 0; // Initialize variable to store subtotal
    let shipping = 120; // Initialize variable to store shipping cost
    let total = 0;  // Initialize variable to store total amount
    let totalitem = 0; // Initialize variable to store total item
    let cartItem = JSON.parse(localStorage.getItem('prdInCart')) // Retrieve data from local storage
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal; // Calculate subtotal
    total = subTotal+shipping; // Calculate total amount by adding subtotal and shipping cost
   
        })
        // Log the subtotal for debugging purposes
     console.log(  subTotal);
     // Update the subtotal in the HTML element with class "priceView"
     document.querySelector('.priceView h6').textContent = "₱ "+ subTotal;
     // Check if the subtotal is zero
     if (subTotal==0){
          // If subtotal is zero, update the shipping cost in the HTML element with class "Shipping" to zero
        document.querySelector('.Shipping h6').textContent = "₱ "+ totalitem;
     }else{
            // If subtotal is not zero, update the shipping cost in the HTML element with class "Shipping"
     document.querySelector('.Shipping h6').textContent = "₱ "+ shipping;
    }
        // Update the total amount in the HTML element with class "Total-item"
     document.querySelector('.Total-item h6').textContent = "₱ "+ total;
 }
 // The function is called to execute it.
 cartPrice()
 
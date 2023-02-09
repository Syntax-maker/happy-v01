


function cartPrice(){
  let subTotal = 0;
  let shipping = 120;
  let total = 0;
  let totalitem = 0;
  let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
  cartItem.map(item =>{
  subTotal = item.totalPrice += subTotal;
  total = subTotal+shipping;
 
      })
   console.log(  subTotal);
  
  //  document.querySelector('.priceView h6').textContent = "₱ "+ subTotal;
  //     document.querySelector('.Shipping h6').textContent = "₱ "+ totalitem;
  //  document.querySelector('.Shipping h6').textContent = "₱ "+ shipping;
   document.querySelector('.Total-item h6').textContent = "₱ "+ total;
}
cartPrice()

const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('#submitButton');

inputs.forEach(input => {
  input.addEventListener('input', function() {
    let isAllFilled = true;
    inputs.forEach(input => {
      if (!input.value) {
        isAllFilled = false;
      }
    });
    submitButton.disabled = !isAllFilled;
  });
});
 const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function() {
  localStorage.clear();
  alert("Thank you for Ordering!")
});
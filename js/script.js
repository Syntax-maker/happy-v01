// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }

  // Update the Cart 

//   function updateCartUI(){
//     const cartWrapper = document.querySelector('.cart-wrapper')
//     cartWrapper.innerHTML=""
//     const items = LocalCart.getLocalCartItems()
//     if(items === null) return
//     let count = 0
//     let total = 0
//     for(const [key, value] of items.entries()){
//         const cartItem = document.createElement('div')
//         cartItem.classList.add('cart-item')
//         let price = value.price*value.quantity
//         price = Math.round(price*100)/100
//         count+=1
//         total += price
//         total = Math.round(total*100)/100
//         cartItem.innerHTML =
//         `
//         <img src="${value.img}"> 
//                        <div class="details">
//                            <h3>${value.name}</h3>
//                            <p>${value.desc}
//                             <span class="quantity">Quantity: ${value.quantity}</span>
//                                <span class="price">Price: $ ${price}</span>
//                            </p>
//                        </div>
//                        <div class="cancel"><i class="fas fa-window-close"></i></div>
//         `
//        cartItem.lastElementChild.addEventListener('click', ()=>{
//            LocalCart.removeItemFromCart(key)
//        })
//         cartWrapper.append(cartItem)
//     }

//     if(count > 0){
//         cartIcon.classList.add('non-empty')
//         let root = document.querySelector(':root')
//         root.style.setProperty('--after-content', `"${count}"`)
//         const subtotal = document.querySelector('.subtotal')
//         subtotal.innerHTML = `SubTotal: $${total}`
//     }
//     else
//     cartIcon.classList.remove('non-empty')
// }
// document.addEventListener('DOMContentLoaded', ()=>{updateCartUI()})
   
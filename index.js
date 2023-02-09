

const btn = document.getElementsByClassName('btns')

const products = []



for(var i = 0; i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click', () =>{
        let product = {
            image: event.target.parentElement.parentElement.children[0].children[0].src,
            name: event.target.parentElement.parentElement.children[1].children[0].textContent,
            price: event.target.parentElement.parentElement.children[2].children[0].textContent,
            totalPrice: parseFloat(event.target.parentElement.parentElement.children[2].children[0].textContent),
            quantity: 1
        }
    
        addItemToLocal(product)
    })
}
function addItemToLocal(product){
let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
if(cartItem === null){
products.push(product)
localStorage.setItem('prdInCart', JSON.stringify(products))

}else{
    cartItem.forEach(item => {
        if(product.name == item.name){
            product.quantity = item.quantity += 1;
            product.totalPrice = item.totalPrice += product.totalPrice;
        }else{
            products.push(item)
        }
    });
    products.push(product)
}
localStorage.setItem('prdInCart', JSON.stringify(products))
window.location.reload()
}


function cartNumberDisplay(){
    let cartNumbers = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.forEach(item => {
        cartNumbers = item.quantity += cartNumbers;
    });
    console.log(cartNumbers);
    document.querySelector('.nav span').textContent = cartNumbers;
}
cartNumberDisplay()


function dispCartItem(){
    document.querySelector("#checkout").disabled = true;
    let html = '';
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    if (!cartItem || cartItem.length === 0) {
        html = 'Your cart is empty';
        document.querySelector("#checkout").disabled = true;
    } else {
        document.querySelector("#checkout").disabled = false;
        cartItem.forEach(item => {
            html += `
            <div class="row cartlist">
            <div class="col forImage"> <img src="${item.image}" alt="">
            </div>
            <div class="col forName"><h3>${item.name}</h3>
            </div>
            <div class="col forPrice"><h3>₱${item.price}</h3>
            </div>
            <div class="col forQuantity">  
            <input class="cart-quantity-input" type="number" value="${item.quantity}">
            </div>
            <div class="col forTotal text-end"><h3>₱${item.totalPrice}</h3>
            </div>
                    
             <div class="col reoveItem"><button><i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    </div>
            
       </div>
            `
        });
    }
    document.querySelector('.cartdisp').innerHTML = html;
}

dispCartItem()


//remove Item
const removeItem = document.getElementsByClassName('reoveItem')
for(var i = 0; i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                products.push(item) 
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products))
        window.location.reload()
    })
}


function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal;
    
        })
     console.log(  subTotal);
     document.querySelector('.priceView h6').textContent = "₱ "+subTotal
 }
 cartPrice()
 
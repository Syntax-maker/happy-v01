 

const btn = document.getElementsByClassName('btn')
const products = []

for(var i = 0; i < btn.length; i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click', () =>{
        let product = {
            image: event.target.parentElement.parentElement.children[0].children[0].src,
            name: event.target.parentElement.parentElement.children[1].children[0].textContent,
            price: event.target.parentElement.parentElement.children[2].children[0].textContent,
            totalPrice: parseFloat(event.target.parentElement.parentElement.children[2].children[0].textContent) ,
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
    cartItem.forEach(item =>{
        if (product.name == item.name){
            product.quantity = item. quantity += 1;
        }else{
            products.push(item)
        }
    });
    products.push(product)
}
   localStorage.setItem('prdInCart', JSON.stringify(products))
 
}
// window.location.reload()
  
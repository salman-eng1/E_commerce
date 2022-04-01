let productsDom=document.querySelector(".products");
let noProductsDom=document.querySelector(".noproducts");


function drawCartProductsUI(allProducts =[]){
    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    noProductsDom.innerHTML="there is no products";
    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;

    let productsUI = products.map((item) => {
        return` <div class="product-item">
        <img src="${item.imgeUrl}" alt="banner" class="product-item-img">
         
        <div class="product-item-desc">
            <a href="cartdetails.html">${item.title}</a>
            <p>Description :${item.desc}</p>
            <span>sizq:${item.size}</span><br>
            <span>quantity:${item.qty}</span>

        </div>

        <div class="product-item-action">
            <button class="add-to-cart" onclick=removeItemFromCart(${item.id})>removeFromCart</button>
        </div>
    </div>
    
    `;
    });
    productsDom.innerHTML=productsUI.join("");
}
drawCartProductsUI();
function removeItemFromCart(id){
    let productsInCart=localStorage.getItem("productsInCart");
    if(productsInCart){
        let items=JSON.parse(productsInCart);

        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsInCart',JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems);
    }
}
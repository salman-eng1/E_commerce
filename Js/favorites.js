let productsDom=document.querySelector(".products");
let noProductsDom=document.querySelector(".noproducts");


function drawFavoritesProductsUI(allProducts =[]){
    if(JSON.parse(!localStorage.getItem("productsFavorite")).length === 0)
    noProductsDom.innerHTML="there is no products";
    let products = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;

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
            <button class="add-to-cart" onclick="removeFromFavorites(${item.id})" >removeFromFavorites</button>
        </div>
    </div>
    
    `;
    });
    productsDom.innerHTML=productsUI.join("");
}
    drawFavoritesProductsUI();

function removeFromFavorites(id){
    let productsFavorite=localStorage.getItem("productsFavorite");
    if(productsFavorite){
        let items=JSON.parse(productsFavorite);

        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem('productsFavorite',JSON.stringify(filteredItems));
        drawFavoritesProductsUI(filteredItems);
    }
}
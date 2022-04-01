let productsDom=document.querySelector(".products");
let noProductsDom=document.querySelector(".noproducts");

function drawProductsViewUI(allProducts =[]){
    if(!JSON.parse(localStorage.getItem("myviews")))
    noProductsDom.innerHTML="there is no products";
    let products = JSON.parse(localStorage.getItem("myviews")) || allProducts;

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
        </div>
    </div>
    
    `;
    });
    productsDom.innerHTML=productsUI.join("");
}

drawProductsViewUI()
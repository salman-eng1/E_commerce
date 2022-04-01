
/* define products*/
let productsDom=document.querySelector(".products");
let productss=productsDb;

//Display Products
let drawProductsUI;
(drawProductsUI=function (products = []){
    let productsUI = products.map((item) => {
        //console.log("eee",item);
        return` <div class="product-item" style="border:${item.isMe==="Y" ? "2px solid green ": ""}">
        <img src="${item.imgeUrl}" alt="banner" class="product-item-img">
         
        <div class="product-item-desc">
            <a onclick='saveItemData(${item.id})'>${item.title}</a>
            <p>description : ${item.desc}</p>
            <span>size:${item.size}</span><br>
            ${item.isMe==="Y"&&
            "<button class='edit-product' onclick='editProduct("+
            item.id+
            ")'>Edit Product</button>"
        }
        </div>

        <div class="product-item-action">
            <button class="add-to-cart" onclick=addedtocart(${item.id})>Add to cart</button>
            <i class="favorite far fa-heart" aria-hidden="true" style="color: ${
                item.liked == true ? "red" : ""
            }"
            onclick="addedToFavorite(${item.id})"></i>

        </div>
    </div>
    
    `;
    });
    productsDom.innerHTML=productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || productss);


//Add to cart

function addedtocart(id){

    if (localStorage.getItem('username')){
        let products=JSON.parse(localStorage.getItem("products")) || productss
        let product= products.find((item) => item.id===id);//store an object
        let isProductinCart=addedItem.some((i) => i.id === product.id)//store a logic value

        if(isProductinCart){
            addedItem = addedItem.map((p) => {
                if(p.id === product.id) p.qty +=1;
                return p;
            });

        }else{
            addedItem.push(product);
        }
        cartproductDivDom.innerHTML ="";
        addedItem.forEach( (item) => 
            cartproductDivDom.innerHTML+=`<p>${item.title} <span class="item-qty">${item.qty}</span></p>`);

        //sava Data
        localStorage.setItem("productsInCart",JSON.stringify(addedItem));
        
        //add counter of Items
        let cartProductItems= document.querySelectorAll('.carts-products div p');
        badgeDom.style.display="block";
        badgeDom.innerHTML=cartProductItems.length;
    }else{
        window.location="login.html";
    }

}
//filter type is the key we want to filter by
//note: in every time we add to cat >> the productInCart is changing the stored in added item
function getUniqueArr(arr,filterType){
    let unique=arr
    .map((item) => item[filterType])//[1,1,2,3]
    .map((item,i,final) => final.indexOf(item) === i && i)//[1,false,2,3]
    .filter((item) => arr[item])//return only items without (false)
    .map((item) => arr[item])
    return unique;
}


    

   
function saveItemData(id){
    
    localStorage.setItem("productId",id);
    window.location="cartdetails.html"
}

//search function
let input=document.getElementById("search");

input.addEventListener("keyup",function(e){
        search(e.target.value, JSON.parse(localStorage.getItem("products")) || productss)
    
    if(e.target.value.trim() === "")
    drawProductsUI(productss);
});
function search(title,myArray){
     let arr=myArray.filter((item) => item.title.toLowerCase().indexOf(title) !== -1);
     //item.title is the element title fron object in DB,
     //title is the data from the input, //indexOf will seatch about the title in the item.title then (return -1 if there is No match)
     drawProductsUI(arr);

}

//add to favorite//there is a problem still running 
let favoriteItems=localStorage.getItem("productsFavorite") 
? JSON.parse(localStorage.getItem('productsFavorite'))
: []; 
function addedToFavorite(id){

    if (localStorage.getItem('username')){
        let products=JSON.parse(localStorage.getItem("products")) || productss
        let product= products.find((item) => item.id===id);
        product.liked=true;
        let IsFavoriteProduct=favoriteItems.some((i) => i.id ===product.id)
        if(IsFavoriteProduct){
            favoriteItems=favoriteItems.map((p) => {
            if(p.id === product.id) console.log("is favorite")
            return p;

             });
           
        }else{
            favoriteItems.push(product)
        }
       // favoriteItems=[...favoriteItems,product]
        localStorage.setItem("productsFavorite",JSON.stringify(favoriteItems));
        products.map(item => {
            if(item.id === product.id){
                item.liked=true;
            }
        })
        localStorage.setItem("products",JSON.stringify(products))
        drawProductsUI(products)
        //let uniqueProducts=getUniqueArr(favoriteItems,"id");
        localStorage.setItem("productsFavorite",JSON.stringify(favoriteItems));
    }else{
        window.location="login.html";
    }
}

//filter by size
let sizeFilter=document.getElementById("size-filter")
sizeFilter.addEventListener("change",getProductFilteredBySize)

function getProductFilteredBySize(e){
     let val = e.target.value;
     let products = JSON.parse(localStorage.getItem("products")) || productss;

     if(val === "all"){
         drawProductsUI(products)
     }else{
         products = products.filter((item) => item.size === val)
         drawProductsUI(products)
     }
}

//editProduct
function editProduct(id){
    localStorage.setItem("editProduct",id)

    window.location="editProduct.html";
}

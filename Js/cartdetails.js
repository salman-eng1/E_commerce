let lastviews=JSON.parse(localStorage.getItem("myviews"))||[]

let products =JSON.parse(localStorage.getItem("products"))||productsDb;
let productId=localStorage.getItem("productId");
let itemDom =document.querySelector(".item-details");
let productDetails = products.find((item) => item.id == productId);



itemDom.innerHTML=`
<img src="${productDetails.imgeUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size: ${productDetails.size}</span><br>
<span>Quantity: ${productDetails.qty}</span><br>
<button onclick="editProduct(${productId})" class=edit-product>Edit Product</button>
`

function editProduct(id){
    localStorage.setItem("editProduct",id)

    window.location="editProduct.html";
}

lastviews.push(productDetails)
let uniqueArrView=getUniqueArr(lastviews,"id")
localStorage.setItem("myviews",JSON.stringify(uniqueArrView))



function getUniqueArr(arr,filterType){
    let unique=arr
    .map((item) => item[filterType])//[1,1,2,3]
    .map((item,i,final) => final.indexOf(item) === i && i)//[1,false,2,3]
    .filter((item) => arr[item])//return only items without (false)
    .map((item) => arr[item])
    return unique;
}


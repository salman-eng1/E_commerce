//variables

let productName=document.getElementById("product-name")
let productDesc=document.getElementById("product-desc")
let productSizeSelect=document.getElementById("product-size")
let inputFile=document.getElementById("up-load-img-file")
let CreateForm=document.getElementById("create-form")
let productSizeValue;
let productImage;

//events
productSizeSelect.addEventListener("click",getProductSizeValue)
CreateForm.addEventListener("submit",createProductForm)
inputFile.addEventListener("change",uploadImage)


//functiones
function getProductSizeValue(e){
    productSizeValue=e.target.value
    console.log(productSizeValue)
}

function createProductForm(e){
    e.preventDefault();
    let allProducts=JSON.parse(localStorage.getItem("products")) || productsDb;
    let nameValue=productName.value;
    let descValue=productDesc.value;

    if(nameValue && descValue){

    let obj={
        id: allProducts ? allProducts.length + 1 : 1,
        qty: 1,
        imgeUrl:productImage,
        size: productSizeValue,
        title: nameValue,
        desc: descValue,
        isMe:"Y",
    }
    let newProducts= allProducts ? [...allProducts , obj] : [obj];
    localStorage.setItem("products",JSON.stringify(newProducts))
    productDesc.value=""
    productName.value=""
    productSizeSelect.value=""

    setTimeout(() => {window.location="index.html"},1500)
}
else{
    alert("please fill data")
}
}
//uploadImage
function uploadImage(){
    let file=this.files[0]
    
    let Types=["image/png","image/jpg"]
    
    if(Types.indexOf(file.type) == -1){
        alert("type not supported");
        return;
    }
    
    if(file.size > 2 * 1024 * 1024){
        alert("image is bigger than 2Mb")
        return;
    }
    getImageBase64(file)
//productImage=URL.createObjectURL(file)
}

function getImageBase64(file){
    let reader =new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function(){
        productImage = reader.result;
    }
    reader.onerror = function (){
        alert("error")
    }
}
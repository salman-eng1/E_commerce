//variables
let products=JSON.parse(localStorage.getItem("products"))||productDb;
let productId=JSON.parse(localStorage.getItem("editProduct"))
let getProduct=products.find((item) => item.id === productId);


let productName=document.getElementById("product-name")
let productDesc=document.getElementById("product-desc")
let productSizeSelect=document.getElementById("product-size")
let inputFile=document.getElementById("up-load-img-file")
let updateForm=document.getElementById("update-form")
let productSizeValue;
let productImage;

productName.value=getProduct.title;
productDesc.value=getProduct.desc;
productSizeSelect.value=getProduct.size
productImage=getProduct.imgeUrl;
//events
productSizeSelect.addEventListener("click",getProductSizeValue)
updateForm.addEventListener("submit",updateProductForm)
inputFile.addEventListener("change",uploadImage)

//functiones
function getProductSizeValue(e){
    productSizeValue=e.target.value;
}

function updateProductForm(e){
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeValue;
    getProduct.imgeUrl = productImage;
    
    localStorage.setItem("products",JSON.stringify(products))

    setTimeout(() => {
        window.location="index.html"
    },1500)
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


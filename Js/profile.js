let get_user=localStorage.getItem("username")
let get_email=localStorage.getItem("emmail")
let get_Image=localStorage.getItem("imgeUrl")
let get_User_Image=document.getElementById("user-avatars")
get_User_Image.setAttribute('src',get_Image)
let products=JSON.parse(localStorage.getItem("products")) || productsDb;
let myProducts= products.filter(i=> i.isMe==="Y");
let userDom2=document.getElementById("username")
let userEmailDom=document.getElementById("email")
let productsLength=document.querySelector("#productsLength span");
userDom2.innerHTML=get_user;
userEmailDom.innerHTML=get_email; 

if(myProducts.length != 0){
    
    productsLength.innerHTML=myProducts.length
}else{
    productsLength.remove();
}

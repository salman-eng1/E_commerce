let cartproductDivDom=document.querySelector(".carts-products div");
let badgeDom=document.querySelector(".badge");
let shoppingCartIcon=document.querySelector(".shoppingCart");
let cartproductMenu=document.querySelector(".carts-products")

shoppingCartIcon.addEventListener('click', openCartMenu);

//check if there is items in local storage
let addedItem=localStorage.getItem("productsInCart") 
? JSON.parse(localStorage.getItem('productsInCart'))
: []; 


if(addedItem){
    addedItem.map((item)=> {
        cartproductDivDom.innerHTML+=`<p>${item.title} ${item.qty}</p>`;

    });
    badgeDom.style.display="block";
    badgeDom.innerHTML=addedItem.length;
  }

  //open Cart Menu
function openCartMenu(){
    if(cartproductDivDom.innerHTML !=""){
       if(cartproductMenu.style.display == "block"){
           cartproductMenu.style.display="none";
       }else{
           cartproductMenu.style.display="block";
       }

        }
    }

//get data from local storage
let get_user=localStorage.getItem("username")
let get_email=localStorage.getItem("emmail")
let userNewImage;
//Variables
let userFileInput=document.getElementById("change-photo")
let userInput=document.getElementById("change-name")
let userEmailInput=document.getElementById("change-email")
let editForm=document.getElementById("edit-profile-form")
//setting values of inputs
userInput.value=get_user;
userEmailInput.value=get_email
//events
userFileInput.addEventListener('change',uploadImage)
editForm.addEventListener('submit',editProfileData)
function editProfileData(e){
    e.preventDefault();
    
    localStorage.setItem("username",userInput.value);
    localStorage.setItem("emmail",userEmailInput.value);

    setTimeout(()=>{
    window.location="profile.html"
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
        userNewImage = reader.result;
        localStorage.setItem("imgeUrl",userNewImage);

    }
    reader.onerror = function (){
        alert("error")
    }
}

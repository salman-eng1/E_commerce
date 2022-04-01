let username=document.querySelector("#username");
let password=document.querySelector("#password");

let login_btn=document.querySelector("#sign_in");

let getuser=localStorage.getItem('username');
let getpassword=localStorage.getItem('password');

login_btn.addEventListener("click",login);

function login(e){
        e.preventDefault();
        if (username.value==="" ||  password.value===""){
        alert("please fill data");
        }else{
            if (
                getuser&&
                getuser===username.value &&    // authentication with database 
                 getpassword===password.value
            ){
                setTimeout( () => { window.location="index.html"
            },1500);
            }else{
                console.log("username or password is wrong");
            }
        }
    }

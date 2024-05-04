// Navbar
let collapse = document.querySelector(".collapse");
let nav = document.querySelector(".nav");

collapse.addEventListener("click", function(){
    nav.classList.toggle("show-nav");
});

// Image Gallery
let productImg = document.getElementById("product-img");
let smallImgs = document.getElementsByClassName("small-img");
let smallImgsArray = Array.from(smallImgs);

smallImgsArray.forEach(function(imgs){
    imgs.addEventListener("click", function(e){
        // console.log(e.target.src);
        productImg.src = e.target.src;
    });
});

// Login Signup Toggle
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let loginBtn = document.querySelector(".login-btn");
let signupBtn = document.querySelector(".signup-btn");

loginBtn.addEventListener("click", function(){
    signup.style.transform = "translateX(-400px)";
    login.style.transform = "translateX(430px)";
    if(signupBtn.classList.contains("indicator")){
        signupBtn.classList.remove("indicator");
        loginBtn.classList.add("indicator");
    }
});

signupBtn.addEventListener("click", function(){
    login.style.transform = "translateX(-400px)";
    signup.style.transform = "translateX(0px)";
    if(loginBtn.classList.contains("indicator")){
        loginBtn.classList.remove("indicator");
        signupBtn.classList.add("indicator");
    }
})
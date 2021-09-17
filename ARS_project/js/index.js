// const mongoose= require('mongoose')



let typed = new Typed(".typing_locations", {
    strings: ["Chennai?", "Mumbai?", "Dehradun?", "New Delhi?","Gujrat?","Uttarakhand?","Goa?","Varanasi?"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

// ************************************** signup/signin modal *****************************

// modal signup/signin
var sign_up_modal = document.getElementsByClassName("signup")[0]
var sign_in_modal = document.getElementsByClassName("signin")[0]

//  close link buttons
var signup_close_link = document.querySelector(".sign-up-close-link")
var signin_close_link = document.querySelector(".sign-in-close-link")


// sign up/sign in switch buttons
var signin_switch = document.querySelector(".sign-in-switch")
var signup_switch = document.querySelector(".sign-up-switch")


// sign up/sign in  button opens modal

document.getElementById("sign-up-Btn").addEventListener("click",function(){
    sign_up_modal.classList.add('bg-active')

})
document.getElementById("sign-in-Btn").addEventListener("click",function(){
    sign_in_modal.classList.add('bg-active')

})

// sign up/sign in close button
signup_close_link.addEventListener("click",function(event){ 
    sign_up_modal.classList.remove('bg-active')
});
signin_close_link.addEventListener("click",function(event){
  
    sign_in_modal.classList.remove('bg-active')
});

// sign in/signup switch buttons/links
signin_switch.addEventListener("click", function(){
    sign_up_modal.classList.remove('bg-active')
    sign_in_modal.classList.add('bg-active')

})

/
signup_switch.addEventListener("click", function(){
    sign_in_modal.classList.remove('bg-active')
    sign_up_modal.classList.add('bg-active')

})


/////////////////////////////    signup,sign in linking with booking page2      /////////////////// 
var sign_up_booking = document.querySelector(".signup_btn_booking")
var sign_in_booking = document.querySelector(".signin_btn_booking")

// sign_up_booking.addEventListener("click",function(e){
//     console.log("helll")
//     window.location.replace('booking.html');
//     e.preventDefault();
   
// })
// sign_in_booking.addEventListener("click",function(e){
//     console.log("helll")
//     window.location.replace('booking.html');
//     e.preventDefault();
   
// })






////////////////////////////////////   Validation  //////////////////////////////////////////// 





// var signup_signin_btn = document.querySelector(".signup_signin_btn")
// var forms = document.getElementsByClassName('needs-validation')


// var validation =  Array.prototype.filter.call(forms, function(form){
//     sign_up_booking.addEventListener('click', function(e){
//         if (form.checkValidity() === false){
//             e.preventDefault()
//             e.stopPropagation()
//         }
//         else{
//             window.location.replace('booking.html')
//             e.preventDefault()
//         }
//         form.classList.add('was-validated');
//         },false);
//     })



    ///////////////////////////////    sign in modal validation   //////////////////////

// var forms2 = document.getElementsByClassName('needs-validation2')


// var validation =  Array.prototype.filter.call(forms2, function(form){
//     sign_in_booking.addEventListener('click', function(e){
//         if (form.checkValidity() === false){
//             e.preventDefault()
//             e.stopPropagation()
//         }
//         else{
//             window.location.replace('booking.html')
//             e.preventDefault()
//         }
//         form.classList.add('was-validated');
//         },false);
//     })








var proceed_btn = document.querySelector(".submit_passenger_details_btn")
var forms = document.getElementsByClassName('needs-validation');




var validation = Array.prototype.filter.call(forms, function(form) {
      proceed_btn.addEventListener('click', function(e) {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        else{
        window.location.replace('payment.html')
        e.preventDefault();
        }
        form.classList.add('was-validated');
      }, false);
    });

// proceed_btn.addEventListener("click", function(e){

//   window.open('../html/payment.html')
// })
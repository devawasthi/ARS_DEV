var search_tickets = document.querySelector(".search-tickets-btn")
var train_container =document.getElementsByClassName("train_container")
var forms = document.querySelector('.needs-validation')
var train_book_btn = document.getElementsByClassName("train_book_btn")



// train stations departure and arrival
var train_departure_station =  document.querySelector('.train_departure_station')
var train_arrival_station =  document.querySelector('.train_arrival_station')


// var validation = Array.prototype.filter.call(forms, function(form) {
//       search_tickets.addEventListener('click', function(e) {
//         if (form.checkValidity() === false) {
//           e.preventDefault();
//           e.stopPropagation();
//         }
//         else{
//         // window.location.replace('passenger.html')
//         console.log('validated')
//         e.preventDefault();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });

// for(var j=0; j< train_container.length ; j++){
//     train_container[j].style.display= "block";
//     }

// departure / arrival sation text 
var train_departure_place__name = document.querySelectorAll('.train_departure_place__name')
var train_arrival_place__name = document.querySelectorAll('.train_arrival_place__name')



//selecting date input
var departure_date_text = document.querySelectorAll('.departure_date_text')
var arrival_date_text = document.querySelectorAll('.arrival_date_text');
var departure_date_input = document.querySelector('.departure_date_input')



// date
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


// swap button
document.querySelector(".swap-button").addEventListener('click', function(){
    var x= train_departure_station.value;
    train_departure_station.value = train_arrival_station.value;
    train_arrival_station.value = x

})
    


// search tickets button
search_tickets.addEventListener('click', (e)=>{

    if( (train_departure_station.value == '' )|| (train_arrival_station.value =='') ||  (departure_date_input.value =='') ||(train_arrival_station.value == train_departure_station.value)){

    // //create div    
    // const alert = document.createElement('div')
    // //add class
    // alert.className = 'alert alert-danger'
    // //add text
    // alert.appendChild(document.createTextNode("Invlaid Input"))
    // //get parent
    // train_container = document.querySelector(".train_container")

    //hide tickets if availble
    for(var j=0; j< train_container.length ; j++){
    train_container[j].style.display= "none";
    }
    console.log('unvalid')

    e.preventDefault();
    }


    else{

        //hiding tickets
    for(var j=0; j< train_container.length ; j++){
    train_container[j].style.display= "none";
    }
    //displaying loader
    
    document.querySelector('.loader').style.display = 'block'
    
    setTimeout(hideloader, 1000)
    var d = new Date(departure_date_input.value)
    
    
    // displaying tickets
    // for(var j=0; j< train_container.length ; j++){
    // train_container[j].style.display= "block";
    // }
    

    // entering date station name in dom
    for(var i=0; i<train_departure_place__name.length;i++){
        train_departure_place__name[i].textContent = train_departure_station.value;
        train_arrival_place__name[i].textContent = train_arrival_station.value;
        departure_date_text[i].textContent =month[d.getMonth()] + " " + d.getDate();
        arrival_date_text[i].textContent =month[d.getMonth()] +" " +(d.getDate() + 1);
    }
    
    e.preventDefault();
}
})

function hideloader(){
    document.querySelector('.loader').style.display = 'none'
    //displaying tickets
    for(var j=0; j< train_container.length ; j++){
    train_container[j].style.display= "block";
    }
}














// ////////////////////////////  moving to next window /////////////////

for(var i=0; i< train_book_btn.length ; i++)
train_book_btn[i].addEventListener("click",function(e){

    window.location.replace('passenger.html');
    e.preventDefault();
   
})


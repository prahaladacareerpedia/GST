





function getInputValues(){

let name = document.getElementById('name');
let phone = document.getElementById('name1');
let email = document.getElementById('name2');
let city = document.getElementById('name3');
let staters = document.getElementById('name4');
let checken = document.getElementById('name5');
let Chaines = document.getElementById('name6');
let Burgers = document.getElementById('name7');
let Biryani = document.getElementById('name8');
let GST = document.getElementById('name9').value;

    let results = "Name  : " + name.value + ",<br>" +
                  "Phone : " + phone.value + ",<br>" +
                  "Email : " + email.value + ",<br>" +
                  "City  : " + city.value +",<br>";
    
     let total =  [parseInt(staters.value),parseInt(checken.value),parseInt(Chaines.value),parseInt(Burgers.value),parseInt(Biryani.value)];

   let sum=0;
   for(i=0;i<=total.length-1;i++){
    sum +=total[i];

   }


              results+= "Total amount : "  +sum  +",<br>" ;
              let gst =sum+(sum*GST/100);
              results+="Total bill payment with 18% GST  is :"+gst +"/-";


    document.getElementById('result').innerHTML = results;
}



function navLinks(){
     const nav=document.querySelector('.navbar');
    const homeLinks=document.querySelector('.home');
    const boxs = document.querySelector('.boxs');
    boxs.addEventListener("click",()=>{
        homeLinks.classList.toggle("nav-active")

        boxs.classList.toggle("toggle");
    })



}
navLinks();







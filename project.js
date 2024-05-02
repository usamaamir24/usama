function home(){
    document.getElementById('home').style.color="black";
    document.getElementById('contact').style.color="white";
    document.getElementById('product').style.color="white";
    document.getElementById('about').style.color="white";
}
function contact(){
    document.getElementById('home').style.color="white";
    document.getElementById('contact').style.color="black";
    document.getElementById('product').style.color="white";
    document.getElementById('about').style.color="white";
}
function product(){
    document.getElementById('home').style.color="white";
    document.getElementById('contact').style.color="white";
    document.getElementById('product').style.color="black";
    document.getElementById('about').style.color="white";
}
function about(){
    document.getElementById('home').style.color="white";
    document.getElementById('contact').style.color="white";
    document.getElementById('product').style.color="white";
    document.getElementById('about').style.color="black";
}
let crd=document.querySelectorAll('.crd');
let itempage=document.querySelector('.itempage');
 let container=document.querySelector('.container');
let pic=document.getElementById('pic');
let buybtn=document.getElementById('buybtn');
let cross=document.querySelector('.cross');
crd.forEach(function(curvalue){
  curvalue.addEventListener("click", function(){
    itempage.style.display="flex";
    container.style.display="none";
    let imgsrc=curvalue.firstElementChild.src;
  
    pic.src=imgsrc;

    buybtn.addEventListener("click",function(){
    document.querySelector(".buypage").style.display="block";
      document.querySelector('.buytext').innerHTML=`<h3>Enter Your Details:</h3>
      <input type="text" id="name" placeholder="Enter Your Name"> <br><br>
      <input type="text" id="name" placeholder="Enter Your Mobile Number"> <br><br>
      <input type="text" id="name" placeholder="Enter Your Address"> <br><br>
      <input type="text" id="name" placeholder="Enter Your postalcode">
      <h3>Payment Option:</h3>
      <select name="" id="">
        <option value="Google-pay">Google-pay</option>
        <option value="Phone-pay">Phone-pay</option>
        <option value="Card-pay">Card-pay</option>
        <option value="Cash-on-Delivery">Cash-on-Delivery</option>
      </select> <br><br>
      <button>Submit</button>`

      cross.addEventListener("click",function(){
        document.querySelector(".buypage").style.display="none";
      })
    })
  })
})
let add=1;
    document.getElementById('in').value=add;
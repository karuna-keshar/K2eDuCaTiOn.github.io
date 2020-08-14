function validateForm() {
  var x = document.myform.fname.value;
  if (x == "") {
    alert("First name must be filled !");
    return false;
  } 
   if(/[^a-z]/i.test(x)){
    alert("First name must contain only letters! ");
    return false;
  }
  var y = document.myform.lname.value;
  if (y == "") {
    alert("Last name must be filled! ");
    return false;
  } 
  if(/[^a-z]/i.test(y)){
    alert("Last name must contain only letters! ");
    return false;
  }
  var z = document.myform.email.value;
  if (z== "") {
    alert("Please provide your email!");
    return false;
  }
  var mobile=document.myform.mbl.value;
  if(mobile==""){
    alert("Please provide your contact number!");
    return false;
  }
  if(/[a-z]/i.test(mobile)){
    alert("Mobile No can only contain integers and special characters!");
    return false;
  }
  var m = document.myform.message.value;
  if (m == "") {
    alert("Please write your message!");
    return false;
  }
  
  var g=document.myform.gender.value;
  if(g==""){
    alert("Please select a gender!");
    return false;
  }

 return showresult();
}
var b ="";

function myLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
 }
  else {
    b = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  b =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function showresult(){
  document.write("<h1 style='color:blue;text-align:center'>"+"Thanks for your feedback!"+"</h1>"+"<h2 style='text-align:center;color:red'>"+"You are just 1 step away from submitting your feedback"+"</h2>"+"<h2 style='text-align:center;color:green'>"+"Please press "+"<i>"+"Get Details "+"</i>"+"and then "+"<i>"+"Submit!"+"</i>"+"</h2>"+"<h3 style='text-align:center;color:purple'>"+"Your filled details are given below :-" +"</h3>"+" <br>" + "<div style='text-align:center;font-weight:bold;background-color:orange'>"+"Name : " +"<p id='fname1'>"+  document.myform.fname.value + "</p> "+"<p id='lname1'>" +  document.myform.lname.value +"</p>"+"<br>"+"Email : "+"<p id='email1'>" + document.myform.email.value +"</p>"+"<br>" +"Mobile No : "+"<p id='mbl1'>" + document.myform.mbl.value+ "</p>"+"<br>"+ "<br>"+"Message : "+"<p id='msg1'>" + document.myform.message.value +"</p>"+"<br>"+
"Gender : "+"<p id='gen1'>"+document.myform.gender.value +"</p>"+"<br>"+ "Uploaded image : " +"<p id='file1'>"+ document.myform.upload.value  +"</p>"+"<br>"+ "Your current Location : " +"<p id='loc1'>"+b +"</p>"+"<pre>"+" "+ " "+ " "+" "+" "+" "+"</pre>"+"<button onclick='initInput()' style='width:100px;height:50px;background-color:red;color:white;cursor:pointer'>"+"Get Details"+"</button>"+"<form action='mailto:karuna.keshar5@gmail.com' method='post' enctype='text/plain' onLoad='initInput()' name='form'>"+"<input type='hidden' name='FirstName' value='' id='fname'>"+"<input type='hidden' name='LastName' value='' id='lname'>"+"<input type='hidden' name='Email' value='' id='email'>"+"<input type='hidden' name='Mobile No' value='' id='mbl'>"+"<input type='hidden' name='Message' value='' id='msg'>" +"<br>" + "<br>"+"<input type='hidden' name='Gender' value='' id='gen'>"+"<input type='hidden' name='File' value='' id='file'>"+"<input type='hidden' name='Location' value='' id='loc'>"+"<button type='submit'  style='height:50px;width:100px;background-color:blue;cursor:pointer;color:white'>"+"Submit"+"</button>"+"</form>"+"<button onclick='display()' style='width:100px;height:50px;background-color:gray;color:white;cursor:pointer'>"+"Print"+"</button>"+"<a href='home.html'>"+"<button type='button' style='height:50px;width:100px;background-color:green;cursor:pointer;color:white'>"+"Home"+"</button>"+ "</a>"+"</div>");
}

var fname='';
var lname='';
var email='';
var mbl='';
var msg='';
var gen= '';
var file='';
var loc= '';
function initInput(){
  fname=document.getElementById('fname');
  var hidden1=document.querySelector("#fname1");
  fname.value=hidden1.innerHTML;

  lname=document.getElementById('lname');
  var hidden2=document.querySelector("#lname1");
  lname.value=hidden2.innerHTML;

  email=document.getElementById('email');
  var hidden3=document.querySelector("#email1");
  email.value=hidden3.innerHTML;

  mbl=document.getElementById('mbl');
  var hidden4=document.querySelector("#mbl1");
  mbl.value=hidden4.innerHTML;


  msg=document.getElementById('msg');
  var hidden5=document.querySelector("#msg1");
  msg.value=hidden5.innerHTML;

  gen=document.getElementById('gen');
  var hidden6=document.querySelector("#gen1");
  gen.value=hidden6.innerHTML;

  file=document.getElementById('file');
  var hidden7=document.querySelector("#file1");
  file.value=hidden7.innerHTML;

  loc=document.getElementById('loc');
  var hidden8=document.querySelector("#loc1");
  loc.value=hidden8.innerHTML;

}

function display() {
  window.print();
}

var i = 0;
function Like() {
    if (i < 1) {
        i++;
    } else if (i = 1) {
        i = 0;
    }
    document.getElementById("display").innerHTML = i;
}

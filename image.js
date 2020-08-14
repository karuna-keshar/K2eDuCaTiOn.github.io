//get span element inside modal for numbering

var indicator=document.getElementById("carousel-indicators");
var activeindicator = indicator.getElementsByClassName("li");

//get all the carousel items to make it active on click
var carouselinner=document.getElementById('carousel-inner');
var item = carouselinner.getElementsByClassName("carousel-item");

// Get the modal
var modal = document.getElementById("myModal");

// Get the first image and insert it inside the modal 
var img1 = document.getElementById("myImg1");

img1.onclick = function(){
  item[0].className += " active";
  activeindicator[0].className += "active";
  modal.style.display = "block";
}

// Get the second image
var img2 = document.getElementById("myImg2");
img2.onclick = function(){
  item[1].className += " active";
  activeindicator[1].className += "active";
  modal.style.display = "block";
}

//Third image
var img3 = document.getElementById("myImg3");
img3.onclick = function(){
  item[2].className += " active";
  activeindicator[2].className += "active";
  modal.style.display = "block";
}

//Fourth image
var img4 = document.getElementById("myImg4");
img4.onclick = function(){
  item[3].className += " active";
  activeindicator[3].className += "active";
  modal.style.display = "block";
}

//FifthImage
var img5 = document.getElementById("myImg5");
img5.onclick = function(){
  item[4].className += " active";
  activeindicator[4].className += "active";
  modal.style.display = "block";
}

//Sixth image
var img6 = document.getElementById("myImg6");
img6.onclick = function(){
  item[5].className += " active";
  activeindicator[5].className += "active";
  modal.style.display = "block";
}

//Seventh image
var img7 = document.getElementById("myImg7");
img7.onclick = function(){
  item[6].className += " active";
  activeindicator[6].className += "active";
  modal.style.display = "block";
}

//Eighth
var img8 = document.getElementById("myImg8");
img8.onclick = function(){
  item[7].className += " active";
  activeindicator[7].className += "active";
  modal.style.display = "block";
}

//Ninth image
var img9 = document.getElementById("myImg9");
 img9.onclick = function(){
  item[8].className += " active";
  activeindicator[8].className += "active";
  modal.style.display = "block";
}

//Tenth image
var img10 = document.getElementById("myImg10");
img10.onclick = function(){
  item[9].className +=" active";
  activeindicator[9].className += "active";
  modal.style.display = "block";
}

//Eleventh image
var img11 = document.getElementById("myImg11");
img11.onclick = function(){
  item[10].className += " active";
  activeindicator[10].className += "active";
  modal.style.display = "block";
}

//Twelfth image
var img12 = document.getElementById("myImg12");
img12.onclick = function(){
  item[11].className += " active";
  activeindicator[11].className += "active";
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  for(var i=0; i<item.length ; i++){
    item[i].className = "carousel-item"; 
    activeindicator[i].className = "li";
  }
  
}
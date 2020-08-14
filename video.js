
var i = 0;
function Like() {
    if (i < 1) {
        i++;
    } else if (i = 1) {
        i = 0;
    }
    document.getElementById("display").innerHTML = i;
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
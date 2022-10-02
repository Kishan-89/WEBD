
function bulbToggle(sw){
    let pic;
    if(sw==0)
    pic="images/pic_bulboff.gif";
    else
    pic="images/pic_bulbon.gif";

    document.getElementById("bulbImage").src=pic;
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
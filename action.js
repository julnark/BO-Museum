var modal = document.getElementById("myModal");
var img = document.getElementById("foto1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

var modal1 = document.getElementById("myModal1");
var img1 = document.getElementById("foto2");
var modalImg1 = document.getElementById("img02");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

var span1 = document.getElementsByClassName("close")[1];
span1.onclick = function() { 
    modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("foto3");
var modalImg2 = document.getElementById("img03");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close")[2];
span2.onclick = function() { 
    modal2.style.display = "none";
}


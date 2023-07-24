function myFunction(links) {
  links.classList.toggle("change");
}
var acc = document.getElementsByClassName("job");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })
}
function toggleDetails() {
  var details = document.getElementById("details");
  details.style.display = details.style.display === "none" ? "block" : "none";
}function toggleDetails2() {
  var details = document.getElementById("details2");
  details.style.display = details.style.display === "none" ? "block" : "none";
} 

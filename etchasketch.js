const div = document.createElement('div');
const gridbody = document.querySelector("#main");
const container = document.createElement('div');

let i = 0;
container.textContent="A";

for (i; i<=256; i++) {
    addBox(i);    
}

function addBox(i){
    const gridbox = document.createElement('div');
    gridbox.className = "inner-box";
    gridbox.textContent = i;
    gridbox.id="stupid";    
    gridbox.addEventListener("mouseover", function() {
        gridbox.style.backgroundColor="black";
    })
    gridbody.appendChild(gridbox);

}
const etch = document.querySelectorAll('#stupid');
console.log(etch);
//etch.addEventListener("mouseover", function() {
 //   etch.style.backgroundColor="black";
//})
//document.querySelectorAll("#stupid").addEventListener("mouseover", function() {
 //   document.getElementById("stupid").style.backgroundColor="black";
//});







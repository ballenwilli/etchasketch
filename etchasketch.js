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
    gridbody.appendChild(gridbox);

}
document.getElementById("stupid").addEventListener("mouseover", function() {
    document.getElementById("stupid").style.backgroundColor="black";
});







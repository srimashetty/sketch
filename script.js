var container = document.querySelector('.container');
var curSize = 16;
var curMode = 'pen';

const pen = document.getElementById('pen');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

pen.onclick = () => {
    curMode = 'pen';
}

eraser.onclick = () => {
    curMode = 'eraser';
}

clear.onclick = () => {
    container.innerHTML = ' ';
    createGrid(curSize);
}

function createGrid(size){
    console.log(curSize);
    for(let i = 0; i<size; i++){
        var row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
        var wh = 500/size;
        row.style.height = `${wh}px`;

        for(let j = 0; j<size; j++){
            var box = document.createElement('div')
            box.className = 'box';
            box.style.width = `${wh}px`;
            box.style.height = `${wh}px`;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

container.addEventListener('mouseover', function(e){
    if(e.target.matches('.box')){
        if(curMode == 'pen')
        {
            e.target.classList.add('active');
        }
        else{
            e.target.classList.remove('active');
        }
    }
})


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  container.innerHTML = ' '
  createGrid(this.value);
  curSize = this.value;
}


window.onload = () => {
    createGrid(curSize);
}
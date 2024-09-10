const canvas = document.querySelector('#draw')

const context = canvas.getContext('2d')

canvas.width = (3* window.innerWidth) /4;
canvas.height = (3* window.innerHeight)/5;

context.strokeStyle = '#048108';
context.lineWidth = 1;

//evento = ação que o programa executa
let isDrawing = false
let lastX = 0;
let lastY = 0;
function draw(e){
    if(!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
    [lastX,lastY] = [e.offsetX, e.offsetY]
}
//Ações(eventos) e as inputs (entradas)
// Documento que te ensina a usar a  linguagem de programação
canvas.addEventListener('mousedown', function(e){
    isDrawing = true;
    [lastX, lastY] = [e.offsetX,e.offsetY];
})
//cor da linha
var corLinha = document.querySelector("#strokeStyle");
corLinha.addEventListener("change", function(){
    context.strokeStyle = this.value;

    console.log(context)
})

var larguraLinha = document.querySelector("#lineWidth");

//largura da linha
canvas.addEventListener("mousemove",draw);

canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)
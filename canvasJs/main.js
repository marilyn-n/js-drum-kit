const canvas = document.querySelector('#draw');
const input = document.querySelector('input');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const color = input.value;

function colorPalete() {
  console.log(this.value);
  
  ctx.strokeStyle = this.value;
  console.log('jiiii');
  
 
}
// ctx.strokeStyle = color;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false ;

let lastX = 0;
let lastY = 0;

function draw(e) {
  
  if(!isDrawing) return; // stop from running when theres not mousedown
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) =>  {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];

});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false );
input.addEventListener('change', colorPalete);
input.addEventListener('mousemove', colorPalete);
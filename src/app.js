let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = (event)=>{
    updateCanvasSize();
    render();
}
updateCanvasSize();

function render() {
    ctx.font = '38pt Arial';
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = 'blue';
    ctx.fillText('Hello canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
    ctx.strokeText('Hello canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
}
render()
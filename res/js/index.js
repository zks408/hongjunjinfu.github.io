let shade = document.getElementById('shade');
let close = document.getElementById('close');
close.onclick = function () {
    shade.style.display = 'none';
}
setTimeout(() => {
    shade.style.display = 'block';
}, 2000);
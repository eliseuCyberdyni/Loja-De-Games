donmessage = function(e) {
    var result = 0;
    for (var i = 0; i < 1e9; i++) {
        result += i;
    }
    postMessage(result);
}
document.getElementById('elemento').style.color = 'red';
document.getElementById('elemento').style.backgroundColor = 'blue';

let elemento = document.getElementById('elemento');
elemento.style.color = 'red';
elemento.style.backgroundColor = 'blue';

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('resize', debounce(function() {
    console.log('Redimensionado');
}, 200));

// Armazenando um valor no LocalStorage
localStorage.setItem('usuario', 'João');

// Recuperando um valor do LocalStorage
let usuario = localStorage.getItem('usuario');
console.log(usuario); // Saída: João


// Armazenando um valor no LocalStorage
localStorage.setItem('usuario', 'João');

// Recuperando um valor do LocalStorage
let usuario = localStorage.getItem('usuario');
console.log(usuario); // Saída: João

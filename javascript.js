onmessage = function(e) {
    var result = 0;
    for (var i = 0; i < 1e9; i++) {
        result += i;
    }
    postMessage(result);
}
document.getElementById('elemento').style.color = 'red';
document.getElementById('elemento').style.backgroundColor = 'blue';

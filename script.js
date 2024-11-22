function calcularLogaritmo() {
    const base = parseFloat(document.getElementById("base").value);
    const logaritmando = parseFloat(document.getElementById("logaritmando").value);

    if (isNaN(base) || isNaN(logaritmando) || base <= 0 || logaritmando <= 0 || base === 1) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const resultado = Math.log(logaritmando) / Math.log(base);
    document.getElementById("resultado").textContent = `Resultado: log_${base}(${logaritmando}) = ${resultado.toFixed(5)}`;
}

function drawGraph() {
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Base (b)
    ctx.fillStyle = "#0078d7";
    ctx.font = "20px Arial";
    ctx.fillText("b (base)", 50, 50);

    // Exponent (c)
    ctx.fillStyle = "#5cb85c";
    ctx.fillText("c (logaritmo)", 150, 50);

    // Argument (a)
    ctx.fillStyle = "#d9534f";
    ctx.fillText("a (resultado)", 250, 50);

    // Mathematical representation
    ctx.fillStyle = "#444";
    ctx.font = "18px Arial";
    ctx.fillText("b^c = a", 120, 120);
    ctx.fillStyle = "#0078d7";
    ctx.fillText("b", 120, 120);
    ctx.fillStyle = "#5cb85c";
    ctx.fillText("c", 135, 100);
    ctx.fillStyle = "#d9534f";
    ctx.fillText("a", 200, 120);
}

function irAPropiedades() {
    window.location.href = "propiedades.html";
}

window.onload = drawGraph;

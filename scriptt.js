function cuadradoBinomio(a, b_real, b_imaginario) {
    // Calcula el cuadrado del término real
    var a_cuadrado = a * a;

    // Calcula el cuadrado del término imaginario
    var b_cuadrado = b_real * b_real - b_imaginario * b_imaginario;

    // Calcula el doble del producto de los términos real e imaginario
    var doble_producto = 2 * a * b_real * b_imaginario;

    // Suma los resultados
    var resultado_real = a_cuadrado - b_cuadrado;
    var resultado_imaginario = doble_producto;

    // Devuelve el resultado como un objeto { parteReal, parteImaginaria }
    return { parteReal: resultado_real, parteImaginaria: resultado_imaginario };
}

// Ejemplo de uso
var resultado = cuadradoBinomio(3, 2, 1); // (3 + 2i)^2
console.log("Resultado: " + resultado.parteReal + " + " + resultado.parteImaginaria + "i");


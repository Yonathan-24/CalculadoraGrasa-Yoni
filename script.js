function calcular() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const bmi = weight / Math.pow(height, 2);
    let Porcentaje;

    if (gender === 'male') {
        Porcentaje = 495 / (1.0324 - 0.19077 * Math.log(weight) + 0.15456 * Math.log(height)) - 450;
    } else {
        Porcentaje = 495 / (1.29579 - 0.35004 * Math.log(weight) + 0.22100 * Math.log(height)) - 450;
    }

    const result = (Porcentaje/ 100) * bmi;

    document.getElementById('result-label').textContent = `Porcentaje de grasa corporal: ${result.toFixed(2)}%`;
}

document.addEventListener('DOMContentLoaded', function () {
    const formularioElement = document.getElementById('formulario');
    if (formularioElement) {
        formularioElement.addEventListener('submit', function (event) {
            event.preventDefault();
            calcular();
            document.getElementById('resultado').textContent = 'Porcentaje de grasa corporal: 25%';
        });
    } else {
        console.error("El elemento con ID 'formulario' no fue encontrado.");
    }
});

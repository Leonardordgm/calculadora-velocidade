function calcular() {
    const number = document.getElementById('segundos').value;
    const resultado = document.getElementById('result');
    const warn = document.getElementById('warn');

    if (number === '') {
        warn.innerHTML = 'Coloque algum número.';
        setTimeout(() => {
            warn.innerHTML = '';
        }, 2000);
    } else {
        const kmPorHora = (number * 3.6).toFixed(2);
        resultado.innerHTML = kmPorHora + ' Km/h';
    }

    if (number > 400) {
        const kmPorHora = (number * 3.6).toFixed(2);
        resultado.innerHTML = kmPorHora + ' Km/h <small>(que carro chega nessa velocidade?)</small>';
    }

    if (number > 10000) {
        resultado.innerHTML = 'exagero né? menos.';
    }
}

function apagar() {
    const number = document.getElementById('segundos');
    const resultado = document.getElementById('result');

    number.value = '';
    resultado.innerHTML = '0 Km/h';
}

'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);
const formatarDigitoDias = (digito) => `0${digito}`.slice(-3);


const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)); 

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigitoDias(qtdDias);

}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }

    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    const dataEvento = new Date ('2021-11-26 01:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());



if(localStorage.email) {
    document.getElementById('email').value = localStorage.email;
}
var salvarEmail = function () {
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
};

document.onchange = salvarEmail;

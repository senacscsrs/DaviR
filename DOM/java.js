let nota1= parseInt(prompt('Qual sua nota 1?'));
let nota2= parseInt(prompt('Qual sua nota 2?'));
let nota3= parseInt(pormpt('Qual sua nota 3?'));
let resultado= document.getElementById ('r')
let rM= document.getElementById('rM')
let media= ((nota1+nota2+nota3)/3).toFixed(2);
let mencao= null;
let TextoMedia= DocumentTimeline.getElementById('media');

function cmc() {
    if (media >= 8)
        resultado.textContent= 'Você passou';
        mencao

}
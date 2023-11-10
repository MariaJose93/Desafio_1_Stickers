function Pedido() {
    foto1 = parseInt(document.getElementById('foto1').value);
    foto2 = parseInt(document.getElementById('foto2').value);
    foto3 = parseInt(document.getElementById('foto3').value);

    sumaTotal = foto1 + foto2 + foto3;

    if (sumaTotal <= 10) {
        alert ( 'Lleva un total de ' + sumaTotal + ' stickers.');
    } else {
        alert ('Excedes el máximo de stickers, el cual es 10');
    }
}
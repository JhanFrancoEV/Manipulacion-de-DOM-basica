// EL QUERY SELECTOR ES PARECIDO A COMO FUNCIONA EL CSS CON NUESTRO HTML:
// h1 {color: red }
// .parrafito { ... }
// #pid{ ... }


// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('#pid');
// const input = document.querySelector('input');

const input1 = document.querySelector('#inp-calculo1');
const input2 = document.querySelector('#inp-calculo2');
const btnCalcular = document.querySelector('#btnCalculo');
const pResultado = document.querySelector('#resultado')

// EN LOS EVENTOS addEventListener a la funcion no debemos ponerle parentesis ya que este metodo ya
// sabe que con el click llamaras a una funcion y los parentesis se los pone automaticamente
btnCalcular.addEventListener('click', calculoConEventoOnClickEnBtn);

function calculoConEventoOnClickEnBtn() {
    let total;
    //AQUI PARA PASAR A NUMERO LOS VALORES DEL INPUT SE PUEDE HACER CON PARSEINT O CON NUMBER
    total = Number(input1.value) + parseInt(input2.value)
    pResultado.innerHTML = `El resultado de los digitos ingresados es : ${total}`;
}

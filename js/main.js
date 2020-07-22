let number1 = prompt('Ingrese un número entero');
let resultado = 0;
let number2 = 0;


for ( let index = 1; index <= number1; index++) {
       let resultado = index%2;
       if (resultado == 0) {
            document.write('El Número '+ index + ' es Par');
            document.write("<br>");
       }
       else{
            document.write('El Número '+ index + ' es Impar');
            document.write("<br>");
       }
}
while (number2 < 2 || number2>10){
    number2 = prompt('Ingrese un número entre 2 y 10');
}

for (let index = 0; index <= 9; index++) {
    let tabla = number2*index;
    console.log(number2 + '*' + index + ' = ' + tabla );  
}
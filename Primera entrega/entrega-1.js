// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// let number = prompt("ingrese un número: ");

function numero(number) {
  if (number % 2) {
    console.log("El número es impar");
  } else {
    console.log("El número es par");
  }
}

numero(number);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor,
// y si ninguno lo es, indicar por consola que son iguales.

const es_mayor = (num1, num2) => {
  const iguales =
    num1 == num2
      ? console.log(`${num1} y ${num2} son iguales`)
      : num1 > num2
      ? console.log(`${num1} Es mayor que ${num2}`)
      : console.log(`${num1} Es menor que ${num2}`);
};

es_mayor(405, 94);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiplo5 = (num) => {
  if (num % 5) {
    console.log(`${num} NO es múltiplo de 5`);
  } else {
    console.log(`${num} es múltiplo de 5`);
  }
};

multiplo5(59);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0
// hasta llegar a ese número.
const numero = () => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
};

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola
// esa palabra la cantidad correspondiente al número indicado.
function recibirP(palabra, number) {
  for (let p = 0; p < array.length; p++) {
    const element = array[p];
  }

  return console.log(loop);
}

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const arrays = [67, "Flan", true, 32.463, { huevo : false, leche: "almendras"}, 250]

function recibirArr(array) {

    for (let array of arrays) {
        console.log(array);
    }
}

recibirArr(arrays)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
//  menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// posicion  1  2  3  4  5   6   7   8   9  10

function remover5to(array) {
  for (let i = 0; i < array.length; i++) {
      if (i == 4) {
        continue
      }
      console.log(array[i]);
  }
}

remover5to(fibonacci) // posicion 5 = [8] no aparece



// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola
// cada número del array multiplicado por el número pasado por parámetro.

function multiplicaX(array, number) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * number);      
  }
}

multiplicaX([3,4,2,7], 9)
// funcion   array , multiplicador
// Desafio 10
function techList(ar, name) {
  // seu código aqui
  let lista = ar.sort();
  let listaObj = [];

  if (lista.length > 0){
    for (var index = 0; index < lista.length; index += 1) {
      listaObj.push({tech: lista[index], name: name});
    }
  }
  else {
    return "Vazio!";
  }
  
  return listaObj;
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  const filtered = arr.filter(n => n < 0 || n > 9);
  if (filtered.length > 0) return 'não é possível gerar um número de telefone com esses valores';

  for (const nR of arr) {
    const numbers = arr.filter(n => nR === n);
    if (numbers.length >= 3) return 'não é possível gerar um número de telefone com esses valores';
  };
  
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > lineB - lineC) {return true;}
  else if (lineA > lineB + lineC) {return false;}
  else if (lineA < lineB - lineC) {return false;}
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbers = [];
  let coposDeAgua = 0;
  let suggestion;

  for (index = 0; index < string.length; index += 1) {
    let valLoop = string[index];

    for (index2 = 0; index2 < 10; index2 += 1) {
      if (valLoop == index2) {
        numbers.push(valLoop);
      }
    }
  }

  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] != " ") {
      let n = parseInt(numbers[index]);
      coposDeAgua += n;
    }
  }

  if (coposDeAgua > 1) {
    suggestion = `${coposDeAgua} copos de água`;
  }
  else {
    suggestion = `${coposDeAgua} copo de água`;
  }

  return suggestion;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

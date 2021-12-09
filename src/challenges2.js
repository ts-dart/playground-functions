// Desafio 10
function techList(a, name) {
  // seu código aqui
  let lista = a.sort();
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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > lineB - lineC) {return true;}
  else if (lineA > lineB + lineC) {return false;}
  else if (lineA < lineB - lineC) {return false;}
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

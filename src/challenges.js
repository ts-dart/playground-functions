// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a > 0 && b > 0) {
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(s) {
  // seu código aqui
  let words = s.split(" ");
  return words;
}

// Desafio 4
function concatName(l) {
  // seu código aqui
  let fisrtIndex = l[0];
  let lastIndex = l[l.length - 1];
  let resp = `${lastIndex}, ${fisrtIndex}`;

  return resp;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(l) {
  // seu código aqui
  let maior = l[0];
  let resp = [];

  for (let index of l) {
    if (index > maior) {
      maior = index;
    }
  }

  for (let index2 of l) {
    if (index2 === maior) {
      resp.push(index2);
    }
  }
  return resp.length;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

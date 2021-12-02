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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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

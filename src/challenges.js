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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cont = 0;
  let cont2 = 0;

  //caucula a distancia e se a ordem e crescente ou decrecente 
  if (mouse > cat1) {
    for (let index = cat1; index <= mouse; index += 1) {
      cont += 1;
    }
  }
  else if (mouse < cat1) {
    for (let index = cat1; index >= mouse; index -= 1) {
      cont += 1;
    }
  }

  if (mouse > cat2) {
    for (index = cat2; index <= mouse; index += 1) {
      cont2 += 1;
    }
  }
  else if (mouse < cat2) {
    for (index = cat2; index >= mouse; index -= 1) {
      cont2 += 1;
    }
  }
  
  //qual gato ta mais perto
  if (cont < cont2) {
    return "cat1";
  }
  else if (cont > cont2) {
    return "cat2";
  }
  else if (cont === cont2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(l) {
  // seu código aqui
  let resp = [];

  for (let index of l) {
    if (index % 3 === 0 && index % 5 === 0) {
      resp.push("fizzBuzz");;
    }
    else if (index % 3 !== 0 && index % 5 !== 0) {
      resp.push("bug!");;
    }
    else if (index % 3 === 0) {
      resp.push("fizz");
    }
    else if (index % 5 === 0) {
      resp.push("buzz");
    }
  }
  return resp;
}

// Desafio 9
function encode(s) {
  // seu código aqui
  let encoded = s;

  for (const i of s) {
    if (i.includes('a')) encoded = encoded.replace('a', '1');
    if (i.includes('e')) encoded = encoded.replace('e', '2');
    if (i.includes('i')) encoded = encoded.replace('i', '3');
    if (i.includes('o')) encoded = encoded.replace('o', '4');
    if (i.includes('u')) encoded = encoded.replace('u', '5');
  }

  return encoded;
}

function decode(s) {
  // seu código aqui
  let decoded = s;

  for (const i of s) {
    if (i.includes('1')) decoded = decoded.replace('1', 'a');
    if (i.includes('2')) decoded = decoded.replace('2', 'e');
    if (i.includes('3')) decoded = decoded.replace('3', 'i');
    if (i.includes('4')) decoded = decoded.replace('4', 'o');
    if (i.includes('5')) decoded = decoded.replace('5', 'u');
  }

  return decoded;
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

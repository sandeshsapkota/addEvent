let input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  9,
  1,
  19,
  1,
  5,
  19,
  23,
  2,
  9,
  23,
  27,
  1,
  27,
  5,
  31,
  2,
  31,
  13,
  35,
  1,
  35,
  9,
  39,
  1,
  39,
  10,
  43,
  2,
  43,
  9,
  47,
  1,
  47,
  5,
  51,
  2,
  13,
  51,
  55,
  1,
  9,
  55,
  59,
  1,
  5,
  59,
  63,
  2,
  6,
  63,
  67,
  1,
  5,
  67,
  71,
  1,
  6,
  71,
  75,
  2,
  9,
  75,
  79,
  1,
  79,
  13,
  83,
  1,
  83,
  13,
  87,
  1,
  87,
  5,
  91,
  1,
  6,
  91,
  95,
  2,
  95,
  13,
  99,
  2,
  13,
  99,
  103,
  1,
  5,
  103,
  107,
  1,
  107,
  10,
  111,
  1,
  111,
  13,
  115,
  1,
  10,
  115,
  119,
  1,
  9,
  119,
  123,
  2,
  6,
  123,
  127,
  1,
  5,
  127,
  131,
  2,
  6,
  131,
  135,
  1,
  135,
  2,
  139,
  1,
  139,
  9,
  0,
  99,
  2,
  14,
  0,
  0
];

/**************** DAY - 2 *****************/

/******** First Part *******/

let inputCopy = [...input];

function intCodePrograme(op, a, b, c) {
  const [valA, valB, valC] = [inputCopy[a], inputCopy[b], c];
  if (op === 1) {
    inputCopy[valC] = valA + valB;
  } else if (op === 2) {
    inputCopy[valC] = valA * valB;
  }
}

function loopingPrograme() {
  for (let position = 0; position < input.length; position += 4) {
    if (inputCopy[position] === 99) {
      break;
    }

    intCodePrograme(
      inputCopy[position],
      inputCopy[position + 1],
      inputCopy[position + 2],
      inputCopy[position + 3]
    );
  }
}

// inputCopy[1] = 12;
// inputCopy[2] = 2;

// loopingPrograme();

/******** Second Part *******/

const desiredResult = 19690720;

for (let n = 0; n < 100; n++) {
  let inputData = [];
  let matched = false;
  for (let v = 0; v < 100; v++) {
    inputCopy = [...input];

    inputCopy[1] = n;
    inputCopy[2] = v;

    loopingPrograme();

    let currentOutPut = inputCopy[0];
    console.log(currentOutPut);
    if (currentOutPut === desiredResult) {
      console.log("matched !");
      matched = true;
      break;
    }
  }
  if (matched) {
    console.log(inputCopy[1],inputCopy[2]);
    break;
  }
}

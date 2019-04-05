function add(a , b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(list) {
  total = 0
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

module.exports = {add, subtract, sum}

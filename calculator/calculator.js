const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let cont = 0;
  let i = 0;
  for(i = 0; i < a.length; i++){
    cont = cont + a[i];
  }
  return cont;
};

const multiply = function(a) {
  let cont = 1;
  for(let i = 0; i < a.length; i++){
    cont = cont * a[i];
  }
  return cont;
};

const power = function(a, b) {
	let cont = a;
  for(let i = 1; i < b; i++){
    a = cont * a;
  }
  return a;
};

const factorial = function foo(a) {
	if(a == 0)
    return 1;
  else 
    return a*foo(a-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

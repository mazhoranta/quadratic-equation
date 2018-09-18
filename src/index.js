module.exports = function solveEquation(equation) {
  var a = +equation.substring(0, equation.indexOf("* x^2")).replace(/\s/g, "");
  var b = +equation.substring(equation.indexOf("x^2") + 3, equation.lastIndexOf("* x")).replace(/\s/g, "");
  var c = +equation.substring(equation.lastIndexOf("x") + 1, equation.length).replace(/\s/g, "");
  
  b = b / a;
  c = c / a;
  a = 1;

  var discriminant = b * b - 4 * a * c;

  var x1 = (-b - Math.sqrt(discriminant)) / 2 * a;
  var x2 = (-b + Math.sqrt(discriminant)) / 2 * a;

  return [x1, x2];
}

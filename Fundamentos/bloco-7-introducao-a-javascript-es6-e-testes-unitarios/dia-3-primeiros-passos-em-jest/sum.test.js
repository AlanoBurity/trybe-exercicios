const sum = require('./sum');

test('sums two values 4 e 5 = 9', () => {
  expect(sum(2, 3)).toBe(5);
});
test('sums two values 0 e 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
});
test('Erro quando um dos parametros é 4  "5"', () => {
  expect(sum(4, "5"));
});
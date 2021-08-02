import { getProducts } from './components/Products/data';
import Address from './components/Address/index';

it('pizza lists', () => {
  expect(getProducts).toMatchSnapshot();
});

var pizzas = getProducts();

for (let i = 0; i < pizzas.length; i += 1) {
  it(`products[${i}] should have properties(id, name, img, desc, price)`, () => {
    expect(pizzas[i]).toHaveProperty('id');
    expect(pizzas[i]).toHaveProperty('name');
    expect(pizzas[i]).toHaveProperty('img');
    expect(pizzas[i]).toHaveProperty('desc');
    expect(pizzas[i]).toHaveProperty('price');
  });
}

test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

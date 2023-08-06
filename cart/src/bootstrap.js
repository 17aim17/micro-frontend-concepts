import faker from 'faker';

let test = `<div>You got ${faker.random.number()} items in your cart.</div`;


document.querySelector('#dev-carts').innerHTML = test;

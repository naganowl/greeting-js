import Greeting from './App';

let greeter;

beforeEach(function() {
  greeter = new Greeting();
});

it('says hello to the name that is provided', function () {
  expect(greeter.greet('Bob')).toEqual('Hello, Bob.');
});

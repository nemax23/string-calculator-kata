const { add } = require('.')
const test = require('ava')

test('add() should return 0 for empty string', t => {
  const result = add('')

  t.is(result, 0)
})

test('add() should return digit if only one number provided', t => {
  const result = add('1')

  t.is(result, 1)
})

test('add() should return sum of 2 digits if two number provided separated by ,', t => {
  const result = add('1,2')

  t.is(result, 3)
})

test('add() should return sum of n digits if n numbers provided separated by ,', t => {
  const result = add('5,6,10,100')

  t.is(result, 121)
})

test('add() should return sum of n digits if n numbers provided separated by , or \n', t => {
  const result = add('5,6,10\n100,12\n9')

  t.is(result, 142)
})

test('add() should return sum of n digits if n numbers provided separated by , or \n or custom delimeter', t => {
  const result = add('//;\n5;6;10;100;12;9')

  t.is(result, 142)
})

test('add() throws if negative numbers', t => {
  const negativeNumber = -5
  const error = t.throws(() => add(`1,5,10,${negativeNumber}`))

  t.is(error.message, `negatives not allowed: ${negativeNumber}`)
})

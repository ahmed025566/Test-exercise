const myFunctions = require('./functions');

test('string test', () => {
    expect(myFunctions.stringlength('more')).toBe(4)
})

test('reverse', () => {
    expect(myFunctions.reverseString('string')).toBe('gnirts')
})

describe('calculator', () => {
  test('add', () => {
    expect(myFunctions.calc.add(5,5)).toBe(10)
  })
  test('substract', () => {
    expect(myFunctions.calc.substract(6,5)).toBe(1)
  })
  test('multiply', () => {
    expect(myFunctions.calc.mutiply(5,6)).toBe(30)
  })
  test('devide', () => {
    expect(myFunctions.calc.devide(30,5)).toBe(6)
  })
})

test('captlize', () => {
    expect(myFunctions.captlize('test')).toBe('Test')
})
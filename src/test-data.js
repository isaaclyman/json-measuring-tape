import { measuredObject } from './calculator'

export const TestInput = {
  aNumber: 1,
  aNull: null,
  anUndefined: undefined,
  aString: 'bob',
  aBoolean: true,
  aFunction: function (a) { return a },
  anObject: {
    number2: 2
  },
  anArray: [{
    number3: 3
  }, 4]
}

export const TestCalculated = measuredObject(
  '[[root]]', 'object', 25 * 1000 * 1000, 100, [
    measuredObject('aNumber', 'simple', 1 * 1000, 10),
    measuredObject('aNull', 'simple', 200, 20),
    measuredObject('anUndefined', 'simple', 30, 30),
    measuredObject('aString', 'simple', 4, 40),
    measuredObject('aBoolean', 'simple', 5, 10),
    measuredObject('aFunction', 'simple', 6, 20),
    measuredObject('anObject', 'object', 7, 30, [
      measuredObject('number2', 'simple', 8, 40)
    ]),
    measuredObject('anArray', 'array', 9, 10, [
      measuredObject('0', 'object', 10, 20, [
        measuredObject('number3', 'simple', 11, 30)
      ]),
      measuredObject('1', 'simple', 12, 40)
    ])
  ]
)

import { isNullOrUndefined } from './is-null-or-undefined';

describe('isNullOrUndefined(...)', () => {
  const cases = [
    [true, null],
    [true, undefined],
    [false, ''],
  ];

  cases.forEach(([expected, input]) => {
    it(`returns ${expected} when given: ${input}`, () => {
      const result = isNullOrUndefined(input);

      expect(result).toEqual(expected)
    })
  })
})

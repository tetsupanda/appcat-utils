import { isNullOrUndefined } from './is-null-or-undefined';

describe('isNullOrUndefined(...)', () => {
  const cases = [
    [true, null],
    [true, undefined],
    [false, ''],
  ];


  for (let i = 0; i < cases.length; i++) { 
    const expected = cases[i][0];
    const input = cases[i][1];

    it(`returns ${expected} when given: ${input}`, () => {
      const result = isNullOrUndefined(input);

      expect(result).toEqual(expected)
    })

  }
})

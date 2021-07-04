import { DuplicateZeroes } from './duplicate-zeroes';

describe('duplicate zeroes tests', () => {
    let duplicateZeroes = new DuplicateZeroes();

    test('[1, 0, 2, 3, 0, 4, 5, 0] returns [1, 0, 0, 2, 3, 0, 0, 4]', () => {
        const input = [1, 0, 2, 3, 0, 4, 5, 0];
        const expected = [1, 0, 0, 2, 3, 0, 0, 4];
        duplicateZeroes.duplicateZeroes(input);
        expect(input).toEqual(expected);
    });

    test('1, 2, 3] returns 1, 2, 3]', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        duplicateZeroes.duplicateZeroes(input);
        expect(input).toEqual(expected);
    });
});

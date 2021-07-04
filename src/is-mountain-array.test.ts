import { MountainArr } from './is-mountain-array';

describe('is mountain array tests', () => {
    let mountainArr = new MountainArr();
    test('[3, 5, 5] returns false', () => {
        const nums = [3, 5, 5];
        expect(mountainArr.isMountainArr(nums)).toEqual(false);
    });

    test('[0, 3, 2, 1] returns true', () => {
        const nums = [0, 3, 2, 1];
        expect(mountainArr.isMountainArr(nums)).toEqual(true);
    });

    test('[0, 2, 3, 3, 5, 2, 1, 0] returns false', () => {
        const nums = [0, 2, 3, 3, 5, 2, 1, 0];
        expect(mountainArr.isMountainArr(nums)).toEqual(false);
    });
});
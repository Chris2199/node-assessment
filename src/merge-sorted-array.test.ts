import { MergeSortedArray } from './merge-sorted-array';

describe('merge sorted array tests', () => {
    let mergeSortedArray = new MergeSortedArray();

    test('[1, 2, 3, 0, 0, 0] and [2, 5, 6] returns [1, 2, 2, 3, 5, 6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;
        const expected = [1, 2, 2, 3, 5, 6];
        expect(mergeSortedArray.mergeSortedArray(nums1, m, nums2, n)).toEqual(expected);
    });

    test('[1, 3, 5, 0, 0, 0] and [2, 2, 4] returns [1, 2, 2, 3, 4, 5]', () => {
        const nums1 = [1, 3, 5, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 2, 4];
        const n = 3;
        const expected = [1, 2, 2, 3, 4, 5];
        expect(mergeSortedArray.mergeSortedArray(nums1, m, nums2, n)).toEqual(expected);
    });

    test('[2, 0] and [1] returns [1, 2]', () => {
        const nums1 = [2, 0];
        const m = 1;
        const nums2 = [1];
        const n = 1;
        const expected = [1, 2];
        expect(mergeSortedArray.mergeSortedArray(nums1, m, nums2, n)).toEqual(expected);
    });
});

export class MergeSortedArray {
    public mergeSortedArray(nums1: Array<number>, m: number, nums2: Array<number>, n: number): Array<number> {
        let arrJoined: Array<any> = [];
        let count = m + n;

        arrJoined.push(...nums1,...nums2);
        arrJoined.sort();
        
        while (count >= 0) {
            if (arrJoined[count] === 0) {
                arrJoined.splice(count, 1); 
            }
            count--;
        }
        return arrJoined;
    }
}
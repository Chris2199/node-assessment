export class MountainArr {

    public isMountainArr(arr: Array<number>) {
        let arrLen = arr.length;
        let count = 0;
        let positiveCounts = 0;

        if (arr.length < 3 ) {
            return false;
        }

        while (count < arr.length) {
            if (count < arrLen - 1 && arr[count] < arr[count + 1]) {
                positiveCounts++;
            }
            if (count < arrLen - 1 && count >= 1 && arr[count] > arr[count + 1]) {
                positiveCounts++;
            }
            count++ 
        }

        return positiveCounts === arrLen - 1;
    }
}

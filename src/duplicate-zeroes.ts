export class DuplicateZeroes {
    
    public duplicateZeroes(num: Array<number>) {
        let count = 0;
        while (count < num.length) {
            const currentVal = num[count];
            if (currentVal == 0) {
                count ++;
                num.splice(count, 0, 0)
                num.pop();
            }
            count ++;
        }
    }
}
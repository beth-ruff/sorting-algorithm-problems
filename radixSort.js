//define a fxn that accepts a list of numbers
//figure out how many digits the largest number has
//loop from k=0 up to this largest number of digits
//for each iteration of the loop:
    //create buckets (empty array) for each digit (0 to 9)
    //place each number in the corresponding bucket based on its kth digit
//replace our existing array with values in our buckets, starting with 0 and going up to 9
//return list at the end!

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
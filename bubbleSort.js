//start looping from a variable called i the end of the array towards the beginning
//start a nested loop with a variable j from the beginning until i-1
//if arr[j] is greater than arr[j+1], swap those two values
//return sorted array

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return arr;
}
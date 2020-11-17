// it will help to accept 3 args: an array, a start index, and an end index (these can default to 0 and the arr length minus 1, respectively)
//grab the pivot from start of the array
//store the current pivot index in a variable (this will keep track of where the pivot should end up)
//loop through the array from the start until the end
    //if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//swap the starting element with pivot index
//return pivot index

function pivot(arr, start=0, end=arr.length-1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i=start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}
//call pivot helper on the array
//when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
//base case occurs when you consider a subarray with less than 2 elements

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

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 


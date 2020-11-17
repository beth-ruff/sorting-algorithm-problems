//start by picking the second element in the array
//compare the second element with the one before it and swap if necessary
//continue to the next element and if it is in the incorrect order, iterate throughthe sorted portion (i.e. the left side) to the place the element in the correct place
//repeat until array is sorted.

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(let j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
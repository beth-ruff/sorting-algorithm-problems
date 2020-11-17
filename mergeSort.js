//break up array into halves until you have arrays that are empty or have one element
//once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

function merge(arr1, arr2){
    let sorted = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            sorted.push(arr1[i]);
            i++;
        } else {
            sorted.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length){
        sorted.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        sorted.push(arr2[j])
        j++;
    }
    return sorted;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

[3, 10, 6, 2, 810, 54, 9]
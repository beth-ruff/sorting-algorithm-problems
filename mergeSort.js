//create an empty array, take a look at the smallest values in each input array
//while there are still values we haven't looked at...
//if the value in the first array is smaller than the val in the second array, push teh value in the first array into our results & move on to the next value in the first array
//if the val in the 1st array is larger than val in the second, push the value in the 2nd array into our results and move on to the next value in the second array
//once we exhaust one array, push in all remaining values

function mergeSort(arr1, arr2){
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
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const plusMinus = (arr) => {
    // Write your code here
    let posNums = 0;
    let negNums = 0;
    let zeroNums = 0;
    
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] > 0) {
    //         posNums++;
    //     } else if(arr[i] < 0) {
    //         negNums++;
    //     } else {
    //         zeroNums++;
    //     }
    // }
    arr.filter(idx => {
        if(idx > 0) posNums++;
        else if(idx < 0) negNums++;
        else zeroNums++;
    })
    
    console.log((posNums / arr.length).toFixed(6));
    console.log((negNums / arr.length).toFixed(6));
    console.log((zeroNums / arr.length).toFixed(6));
    
}

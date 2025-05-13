export function LinearSearch(array,logArr,target){
    logArr.push(`Original Array = [${array}]`);
    logArr.push(`Running Linear Search to find ${target}`);
    for(let i=0;i<array.length;i++){
        logArr.push(`${target} ${array[i] != target ? `not` : ``} found on Index: ${i}`);
        if(array[i] == target) return i;
    }
    return array.length;
}

export function BinarySearch(array,logArr,target){
    let animationArr = [];
    let start = 0, end = array.length - 1;
    logArr.push(`Original Array = [${array}]`);
    logArr.push(`Running Binary Search to find ${target}`);
    while(start <= end){
        let mid = Math.ceil(start + (end - start)/2);
        animationArr.push(mid);
        logArr.push(`${target} ${array[mid] != target ? `not` : ``} found on Index: ${mid}`);
        if(array[mid] == target) return animationArr;
        else if(array[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return animationArr;
}
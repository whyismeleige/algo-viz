export function MergeSort(array,logArr){
    const animatedArr = [];
    const dubArr = [...array];
    mergeSortHelper(dubArr,logArr,animatedArr,0,array.length-1);
    logArr.push(`Final Sorted Array: [${dubArr}]`);
    return animatedArr;
}

const mergeArr = (array,logArr,animatedArr,start,mid,end) => {
    let leftArr = [],rightArr = [];
    for(let i=start;i<mid;i++) leftArr.push(array[i]);
    for(let i=mid;i<=end;i++) rightArr.push(array[i]);
    let i=0,j=0,k=start;
    while(i < leftArr.length || j < rightArr.length){
        if(i >= leftArr.length){
            logArr.push(`Copying Index ${j} to output`);
            animatedArr.push([k,rightArr[j]]);
            array[k++] = rightArr[j++];
            continue;
        }
        if(j >= rightArr.length){
            logArr.push(`Copying Index ${i} to output`);
            animatedArr.push([k,leftArr[i]]);
            array[k++] = leftArr[i++];
            continue;
        }
        logArr.push(`Comparing Values: ${leftArr[i]} and ${rightArr[j]}`);
        logArr.push(`Copying Lower Value to Output`);
        if(leftArr[i] < rightArr[j]){
            animatedArr.push([k,leftArr[i]]);
            array[k++] = leftArr[i++];
        }else{
            animatedArr.push([k,rightArr[j]]);
            array[k++] = rightArr[j++];
        }
    }
}

const mergeSortHelper = (array,logArr,animatedArr,start,end) => {
    if(start < end){
        let mid = Math.ceil(start + (end - start)/2);
        mergeSortHelper(array,logArr,animatedArr,start,mid-1);
        mergeSortHelper(array,logArr,animatedArr,mid,end);
        mergeArr(array,logArr,animatedArr,start,mid,end);
    }
}

export function QuickSort(array,logArr){
    let tempArr = [...array];
    let animatedArr = [];
    quickSortHelper(tempArr,logArr,animatedArr,0,tempArr.length - 1);
    logArr.push(`Final Sorted Array: [${tempArr}]`);
    return animatedArr;
}

const quickPartition = (array,logArr,animatedArr,start,end) => {
    let pivot = array[end];
    let i = start;
    logArr.push(`Current Pivot = ${pivot}`);
    for(let j=start;j<end;j++){
        if(array[j] <= pivot){
            logArr.push(`${array[j]} is less than Pivot: ${pivot}`);
            logArr.push(`Shifting ${array[j]} towards Index: ${i}`);
            animatedArr.push([i,array[j]]);
            animatedArr.push([j,array[i]]);
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            i++;
        }
    }
    logArr.push(`Shifted All Values Less Than ${pivot}`);
    logArr.push(`Swapping Pivot Index ${end} to Index ${i}`);
    animatedArr.push([i,array[end]]);
    animatedArr.push([end,array[i]]);
    let temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    return i;
}

const quickSortHelper = (array,logArr,animatedArr,start,end) => {
    if(start < end){
        let pivot = quickPartition(array,logArr,animatedArr,start,end);
        quickSortHelper(array,logArr,animatedArr,start,pivot-1);
        quickSortHelper(array,logArr,animatedArr,pivot+1,end);
    }
}

export function BubbleSort(array,logArr){
    let tempArr = [...array];
    let animatedArr = [];
    bubbleSortHelper(tempArr,logArr,animatedArr);
    return animatedArr;
}

const bubbleSortHelper = (array,logArr,animatedArr) => {
    let size = array.length-1;
    for(let i=0;i<size;i++){
        for(let j=0;j<size - i;j++){
            if(array[j] > array[j+1]){
                logArr.push(`Value ${array[j]} is greater than Value = ${array[j+1]}`);
                logArr.push(`Swapping Values at Indexes: ${j} and ${j+1}`);
                animatedArr.push([j,array[j+1]]);
                animatedArr.push([j+1,array[j]]);
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    logArr.push(`The Sorted Array = [${array}]`);
}

export function SelectionSort(array,logArr){
    let tempArr = [...array];
    let animatedArr = [];
    selectionSortHelper(tempArr,logArr,animatedArr);
    logArr.push(`The Sorted Array = [${array}]`);
    return animatedArr;
}

const selectionSortHelper = (array,logArr,animatedArr) => {
    let size = array.length;
    for(let i=0;i<size;i++){
        let idx = i;
        logArr.push(`The Current Index to Be Selected ${idx}`);
        for(let j=i+1;j<size;j++){
            if(array[j] < array[idx]){
                idx = j;
            }
        }
        logArr.push(`The Best Value that can Be Selected is ${array[idx]}`);
        logArr.push(`Swapping Values at Indices ${idx} and ${i}`);
        animatedArr.push([i,array[idx]]);
        animatedArr.push([idx,array[i]]);
        let temp = array[i];
        array[i] = array[idx];
        array[idx] = temp;
    }
}

export function InsertionSort(array,logArr){
    let tempArr = [...array];
    let animatedArr = [];
    insertionSortHelper(tempArr,logArr,animatedArr);
    return animatedArr;
}

const insertionSortHelper = (array,logArr,animatedArr) => {
    let size = array.length;
    for(let i=1;i<size;i++){
        let curr = array[i];
        logArr.push(`The Current Value ${curr} to be Compared in the Sorted Part`)
        for(let j = i-1;j>=0 && array[j] > curr;j--){
            logArr.push(`Current Value ${curr} is less than Value at Index ${j}`);
            logArr.push(`Swapping Values`);
            animatedArr.push([j,array[j+1]]);
            animatedArr.push([j+1,array[j]]);
            let temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp; 
        }
        logArr.push(`Current Value ${curr} is inserted in the Sorted Part`);
    }
    logArr.push(`The Sorted Array = [${array}]`);
}

export function BogoSort(array){
    let idx = array.length;
    let animatedArr = [];
    while(idx > 0){
        let index = Math.floor(Math.random() * array.length - 1);
        idx--;
        animatedArr.push([index,array[idx]]);
        animatedArr.push([idx,array[index]]);
        let temp = array[idx];
        array[idx] = array[index];
        array[index] = temp;
    }
    return animatedArr;
}
//11a
const nums = [10,20,30];
const randomLetters = ['Hi' , 'Hello', 'Yes'];


//11b
function getLastValue(para_array){
    let len = para_array.length;
    return para_array[len-1];
}


//11c
function arraySwap(para_array){
    let len = para_array.length;
    let temp = para_array[0];
    para_array[0] = para_array[len-1];
    para_array[len-1] = temp;
    return para_array;
}


//11d
for(let i = 0; i < 10; i+=2){
    console.log(i);
}


//11e
for(let i = 5; i>=0 ; i--){
    console.log(i);
}


//11f
let i = 0;
while(i < 10){
    console.log(i);
    i+=2;
}


i = 5;
while( i >= 0){
    console.log(i);
    i--;
}


//11g and h
const g_array = [1,2,3];

function updateByOne(para_array){
    const new_array = [];
    for(let i = 0; i < para_array.length ; i++){
        let x = para_array[i]+1;
        new_array.push(x);
    }
    return new_array;
}


//11i

function addNum(array, num){

    let len = array.length;
    const new_array= [];
    for(let i = 0; i < len ; i++){
        let x = array[i]+num;
        new_array.push(x);
    }

    return new_array;
}



//11k
function countPositive(array){
    let len = array.length;
    let count = 0;
    for(let i = 0; i < len ; i++){

        array[i] > 0 ?  count++ : 0;
    }
    return count;
}


function addArrays(array1, array2){
    let len = array1.length;
    const new_array = [];
    for(let i = 0; i < len ; i++){
        let x = array1[i] + array2[i];
        new_array.push(x);
    }
    return new_array

}


const X = addArrays;
console.log(X(g_array, randomLetters))
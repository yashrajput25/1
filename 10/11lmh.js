function minMax(nums){

    if(nums.length === 0){
        return null;
    }

    let min = 10000;
    let max = -10000;

    for(let i = 0; i < nums.length ; i++){

        let x = nums[i];

        if(x < min){
            min = x;
        }
        if(x > max){
            max = x;
        }

    }
    return {max, min}
}
const nums = [-2,3,-5,7,10];

const minMaxObject = minMax(nums)

minMaxObject!=null ? console.log(minMaxObject.min, minMaxObject.max) : 0 




function countWords(words){

    const count = {};

    for(let i = 0; i < words.length ; i++){
        let x = words[i];
        if(!count[x]){
            count[x] = 1;
        }else{
            (count[x])++;
        } 
    }

    return count;

}

const words = ['apple', 'banana', 'orange', 'apple']
const finalAns = countWords(words)
console.log(finalAns);
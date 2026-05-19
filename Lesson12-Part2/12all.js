//12j & 12k
//const multiply = (a,b)=>{return a*b}

const multiply = (a,b) => a*b; //auto return when no curly brackets
console.log(multiply(2,3));
console.log(multiply(7,10));


//12l
//const arr = [1,-3,5];
const arr = [-2,3,-5,7,10]

function countPositive(arr){

    let positiveCount = 0;

    arr.forEach((value)=>{
        value > 0 ? positiveCount++ : 0;
    });
    return positiveCount;
}

console.log(countPositive(arr))


// 12m

function addNum(arr,num){
    const new_arr = arr.map((value) =>{
        return value+=num})
    return new_arr;
}

console.log(addNum(arr,3));

//shortcut version of 12m

function addNumShort(arr,num){
    const new_arr = arr.map(value => value+=num);
    return new_arr;
}

console.log(addNumShort(arr,3));


//12n

function removeEgg(foods){
    const new_arr = foods.filter((value)=>{
        return value !== 'egg';
    })

    return new_arr;
}

const foods = ['egg' , 'apple', 'ham' , 'egg', 'banana' , 'egg', 'pineapple'];
console.log(removeEgg(foods));


//12o

function removeTwoEggs(foods){
    let count = 0;
    const new_arr = foods.filter(value =>{

            if(count >= 2){
                return true;
            }else if(value === 'egg'){
                count++;
                return false;
            }else{
                return true;
            }
        }
    )
    return new_arr;
}
console.log(removeTwoEggs(foods));

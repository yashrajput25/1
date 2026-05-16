//11o and 11p
const words = ['hello' , 'world', 'wassup', 'search'];
let hasSearch = false;
let index;

for(let i = 0; i < words.length ; i++){
    
    if(words[i]==='search'){
        hasSearch = true; 
        index = i;
        break;
    }
}

!hasSearch ? console.log(-1) : console.log(index)


//11q

function findIndex(words, value){
    
    for(let i = 0; i < words.length ; i++){
    
        if(words[i] === value){
            return i;
        }
    }

    return -1;
}

console.log(findIndex(words, 'value'))



//11r
const foods = ["egg","apple", "ham","egg","egg","burger"];
const new_foods = ["egg","apple", "ham","egg","egg","burger"];


function removeEggs(foods){
    const updatedFoods = [];
    for(let i = 0; i < foods.length ; i++){
        if(foods[i] === 'egg'){
            continue;
        }else{
            updatedFoods.push(foods[i]);
        }
    }
    return updatedFoods;
}

console.log(removeEggs(foods))



//11s
function remove2Eggs(foods){
    const updatedFoods = [];
    let count = 0;
    for(let i = 0; i < foods.length ; i++){

        if(foods[i] === 'egg' && count < 2){
            ++count;
            continue;
        }else{
            updatedFoods.push(foods[i]);
        }
    }
    return updatedFoods;
}

console.log(remove2Eggs(foods))


//11t
function removeLastTwoEggs(foods){
    const updatedFoods = [];
    let count = 0;
    foods.reverse();

    for(let i = 0 ; i < foods.length ; i++){

        if(foods[i] === 'egg' && count < 2 ){
            count++;
            continue;
        }else{
            updatedFoods.push(foods[i]);
        }
    }
    return updatedFoods.reverse();
}

console.log(removeLastTwoEggs(foods));


//11u
function removeLastTwoEggsUpdated(foods){
    
    const updatedFoods = [];
    let count = 0;
    const new_array = foods.slice().reverse();
    console.log("New: " , new_array);
    console.log("Old: " , foods)

    for(let i = 0 ; i < foods.length ; i++){

        if(new_array[i] === 'egg' && count < 2 ){
            count++;
            continue;
        }else{
            updatedFoods.push(new_array[i]);
        }
    }
    return updatedFoods.reverse();
}

console.log(removeLastTwoEggsUpdated(new_foods));



//11v
function fizzBuzzProblem(){

    for(let i = 1 ; i <=20; i++){

        if(i %3 === 0 && i %5 === 0 ){
            console.log("FizzBuzz",i);
        }else if(i %3 ===0){
            console.log("3:Fizz",i);
        }else if(i%5 === 0){
            console.log("5:Buzz",i);
        }else{
            continue;
        }
    }
}

fizzBuzzProblem();




function findIndex(words, value){
    
    for(let i = 0; i < words.length ; i++){
        if(words[i] === value){
            return i;
        }
    }

    return -1;
}


function unique(words){
    const new_array = [];

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if(findIndex(new_array, word) === -1){
            new_array.push(word);
        }else{
            continue;
        }
    }
    return new_array;
}

console.log(unique(foods))
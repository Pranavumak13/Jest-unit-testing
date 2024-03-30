// function sum(a, b){
//     return a+b;
// }

// module.exports = sum;

// const ans = sum(3,4);
// console.log(ans);

// funtion that doesnt want integer to be input.
function myFn(input){
    if(typeof input !== 'number'){
        throw new Error("Invalid Input")
    }
}

module.exports = myFn;
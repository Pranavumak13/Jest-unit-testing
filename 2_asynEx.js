// Testing for Asyncronous Code
// 3 ways to write an Asyn Code
//
// 1. Callbacks
// 2. Promises
// 3. Async/await

// using Callback

// function fetchData(Callback){
//     setTimeout(()=>{
//         Callback('Hello I am Pranav')
//     },1000);
// }

// module.exports = fetchData;


// 2. using Promises

function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello I am Pranav'), 1000);
    })
}

module.exports = fetchPromise
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

// function fetchPromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello I am Pranav'), 1000);
//     })
// }

// module.exports = fetchPromise


// const  fetchTodos = ()=>{
//     fetch(``)
// }


const axios = require('axios');

const fetchTodo = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(results.data);
    return results.data
}

// fetchTodo(1)
module.exports = fetchTodo


const fTodos = async (id) =>{
    try{
        const results = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await results.json()
        // console.log(data);
        return data;
    }
    catch(error){
        console.log(`Error: ${error}`);
    } 
}
fTodos(4)
module.exports = fTodos;


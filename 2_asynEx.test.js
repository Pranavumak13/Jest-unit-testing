// Callback
// const fetchData = require('./asynEx')

// test('The greeting is the data', done =>{
//     function Callback(data){
//         try{
//             expect(data).toBe('Hello I am Pranav');
//             done();
//         }catch(error){
//             done(error);
//         }
//     }

//     fetchData(Callback);
// })

// 2. Promise

// const fetchPromise = require('./asynEx')

// // if resolves
// test('The greeting is the promise', () =>{
//     return expect(fetchPromise()).resolves.toBe('Hello I am Pranav')
// })

// // if reject
// test('The fetch fails with an error',()=>{
//     return expect(fetchPromise()).rejects.toThrow('error');
// })


// Async/await

const fetchPromise = require('./2_asynEx')
const fetchData = require('./2_asynEx')

test('The greeting is the data.', async()=>{
    const data = await(fetchPromise())
    expect(data).toBe('Hello I am Pranav');
})
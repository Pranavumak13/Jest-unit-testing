// Callback
// const fetchData = require('./2_asynEx')

// test('The greeting is the data', (done) =>{
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

// const fetchPromise = require('./2_asynEx')

// // if resolves
// test('The greeting is the promise', () =>{
//     return expect(fetchPromise()).resolves.toBe('Hello I am Pranav')
// })

// // if reject
// test('The fetch fails with an error',()=>{
//     return expect(fetchPromise()).rejects.toThrow('error');
// })


// Async/await

// const fetchPromise = require('./2_asynEx')
// const fetchData = require('./2_asynEx')

// test('The greeting is the data.', async()=>{
//     const data = await(fetchPromise())
//     expect(data).toBe('Hello I am Pranav');
// })


const fetchTodo = require('./2_asynEx');

describe('Async await tests with axios', () => {
    it('Is the object same', async()=>{
        const data = await(fetchTodo(4))
        expect(data).toEqual({ userId: 1, id: 4, title: 'et porro tempora', completed: true })
    })
    
    // with .then() as its an async task
     it('Is the object same with the .then() method', ()=>{
        fetchTodo(4).
        then((data)=>{
            expect(data).toEqual({ userId: 1, id: 4, title: 'et porro tempora', completed: true })      
        })
    })
})



const fTodos = require('./2_asynEx');

describe('Async await tests with fTodos', () => {
    it('Is the object same  with fTodos', async()=>{
        const response = await(fTodos(4))
        expect(response).toEqual({ userId: 1, id: 4, title: 'et porro tempora', completed: true })
    })
})

// MOCKS: mocks are fake implementations of real functions
// SPIES: Tools to track the behaviour of Mock FUnctions

// // Syntax of a Mock Function
// const mockCallback  = jest.fn(x=>42+x);
// mockCallback(0);

// test('mock implementation of a basic function', ()=>{
//     const mock = jest.fn(x => 42 + x);
//     expect(mock(1)).toBe(43);
//     // or
//     expect(mock).toHaveBeenCalledWith(1);
// })


// spy on method

// test('spying on method of an object', ()=>{
//     const video = {
//         play(){
//             return true;
//         },
//     };

//     const spy = jest.spyOn(video, 'play')
//     video.play()

//     expect(spy).toHaveBeenCalled()
//     spy.mockRestore();
// })



// -------------------------------------------------



// ForEach function
// arr.forEach(()=>{  })


// trying to mock the forEach Loop
const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }   
}

const func = (item)=>{
    console.log(item*10);
}


// forEach([1,2,3], func);  
// job is to mock the callback func

describe('Mocks and spies', () => {
    it('Mock the callback function',()=>{
        const mockCalledback = jest.fn(x => x*10)


        forEach([1,2], mockCalledback)


        expect(mockCalledback.mock.calls.length).toBe(2);

        expect(mockCalledback.mock.calls[0][0]).toBe(1)
        expect(mockCalledback.mock.calls[1][0]).toBe(2)
        expect(mockCalledback.mock.results[0].value).toBe(10)
    })

    it('mock return ', ()=>{
        const mock = jest.fn()

        mock.mockReturnValueOnce(1)

        const results = mock();
        expect(results).toBe(1);
    })

    it('mock return multiple times', ()=>{
        const tempMockFun = jest.fn();
        tempMockFun
        .mockReturnValueOnce(10)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce("Hello")

        const result1 = tempMockFun()
        const result2 = tempMockFun()
        const result3 = tempMockFun()
        const result4 = tempMockFun()

        expect(result1).toBe(10)
        expect(result2).toBe(true)
        expect(result3).toBe(false)
        expect(result4).toBe("Hello")
    })

})


//////////////////////// Spy on the url

const axios = require('axios');

const fetchTodo = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(results.data);
    return results.data
}


describe('SPy', () => {
  it('spy on the url', async()=>{
    jest.spyOn(axios, 'get').mockReturnValueOnce({
        data:{
            id:1,
            todos:"Get 1M"
        }
    })
    const results = await fetchTodo(1);
    expect(results.todos).toBe("Get 1M")
  })
})




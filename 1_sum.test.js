// // toBe() --> used for Primitive Values --> Strings, Boolean, Number
// const sum = require("./1_sum");

// // syntax: test('description', testFuntion)
// test('adds 1 + 2 to equals 3', ()=>{
//     expect(sum(1,2)).toBe(3);  // expect().toBe()
// });


// // toEqual() --> Objects, Arrays.
// test('Object Assignment', () => {
//     const data = {one:1};
//     data['two']=2;
//     expect(data).toEqual({one:1, two:2})
// })

// test for truthy and falsy Value
// toBeFalsy()

// test("Falsy Assignments; null is falsy", ()=>{
//     const n = null;
//     expect(n).toBeFalsy();
// })

// //toBeTruthy()

// test("1 is True", ()=>{
//     const m = 1;
//     expect(m).toBeTruthy();
// })


// toThrow() --> For Error Handling, To Validate Input

const myFn = require("./1_sum")

test("Throws on invalid input 123", ()=>{
    expect(() =>{
        myFn("1")
    } ).toThrow()
})
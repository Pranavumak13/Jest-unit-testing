/*
    to group multiple test together we use describe

    describe('',()=>{
        it('',()=>{})
        
        it('',()=>{})
    })
    
    Matcheres for expect().
    1. toBe() --> 3===3 is true
    // toBe() --> used for Primitive Values --> Strings, Boolean, Number

    2. toEqual() --> but {}==={} or []===[] is false
    // toEqual() --> Objects, Arrays.
 
    test('description', testFuntion) | or it('msg', ()=>{callback})

    toBe()
    toBeGreaterThan()
    toBeGreaterThanOrEqualTo()
    toBeLessThan()
    toBeLessThanOrEqualTo()

    toBeCloseTo(decimal_value)

*/



// const sum = require("./1_sum");

// // syntax: test('description', testFuntion) | or it('msg', ()=>{callback})
// test('adds 1 + 2 to equals 3', ()=>{
//     expect(sum(1,2)).toBe(3);  // expect().toBe()
// });


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
//     expect(n).toBeNull(); 
//     expect(n).not.toBeUndefind();
//     expect(n).not.toBeTruthy();
// })

// //toBeTruthy()

// test("1 is True", ()=>{
//     const m = 1;
//     expect(m).toBeTruthy();
// })



// toThrow() --> For Error Handling, To Validate Input
// here test should fail when it is a number 
// and should pass when it is not a number
const myFn = require("./1_sum")

test("Throws on invalid input 123", ()=>{
    expect(() =>{
        myFn("123")
    } ).toThrow("Invalid Input")
})




// describe('Strings',()=>{
//     it('there is no I in the word TEAM',()=>{
//         expect("TEAM").not.toMatch(/I/)
//     })
// })


describe('arrays',()=>{
    const shoppingLists = ['diapers', 'kleenex','trash bags','milk']
    it('Does it contain milk',()=>{
        expect(shoppingLists).toContain('milk')
        expect(shoppingLists).toContain('diapers')

    })
})
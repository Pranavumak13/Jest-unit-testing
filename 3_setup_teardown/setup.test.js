
// want to add 5 at last and chhecks whether the 'setup' works correctly or not

let arr = []

// if declared here then it will be run before each and every test | global scope.
// beforeEach(()=>{
//     console.log("BEFORE EACH");
//     arr = [1,2,3,4]
// })

// afterEach(()=>{
//     console.log("After Each");
//     arr = [1,2,3,4]
// })
  
// beforeAll(()=>{
//     console.log("Before ALL");
//     arr = [1,2,3,4]
// })
    
// afterAll(()=>{
//   console.log("After All");
//   arr = [1,2,3,4]
// })
      
      
  describe('Setup Testing', () => {

        beforeEach(()=>{
            console.log("BEFORE EACH");
            arr = [1,2,3,4]
        })

        it("Append element at last of the array",()=>{
          arr.push(5)
          expect(arr[arr.length-1]).toBe(5)
  })
  
  // add 0 at the first pos
  it("Append element at first position of the array",()=>{
    arr.unshift(0)
    expect(arr[0]).toBe(0)
  })
  
  
  // intial len of array is 4 but it fails as we are manupulating the array above 
  // 1. one solution would be to add arr to every test
  // DRY : donot repeat yourselves 
  // 2. to use beforeEach()
  it("Initial Length of array",()=>{
    const len = arr.length;
    expect(len).toBe(4)
  })
})

// it.only() will that partuclar test only and will skip other

describe('Randowm ', () => {
    it.only('1 is truthy',()=>{
      expect(1).toBeTruthy()
    })
})

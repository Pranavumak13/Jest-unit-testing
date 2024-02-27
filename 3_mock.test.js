// MOCKS: mocks are fake implementations of real functions
// SPIES: Tools to track the behaviour of Mock FUnctions

// // Syntax of a Mock Function
// const mockCallback  = jest.fn(x=>42+x);
// mockCallback(0);

test('mock implementation of a basic function', ()=>{
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    // or
    expect(mock).toHaveBeenCalledWith(1);
})


// spy on method

test('spying on method of an object', ()=>{
    const video = {
        play(){
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play')
    video.play()

    expect(spy).toHaveBeenCalled()
    spy.mockRestore();
})
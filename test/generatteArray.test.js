const generateArray = require("..")

describe('generate Array function', () => {

    it('Should return [] if the input is a empty string', () => {
        
        expect(generateArray("")).toEqual([])
    })
})
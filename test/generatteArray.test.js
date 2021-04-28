const generateArray = require("..")

describe('Generate Array function', () => {

    it('Should return [] if the input is a empty string', () => {
        
        expect(generateArray("")).toEqual([])
    })

    it("Should return an array that sums all the repeating characters", () => {

      expect(generateArray("abcd")).toEqual([[1, 'a'], [1, 'b'], [1, 'c'], [1, 'd']]);

    });

    it("Should return an array that sums all the repeating characters even if the same element is repeated somewhere else in the string", () => {

      expect(generateArray("aaaaaaaabaaaa")).toEqual([[8,'a'], [1,'b'], [4,'a']]);
      
    });

})
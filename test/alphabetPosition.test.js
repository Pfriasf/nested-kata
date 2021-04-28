const alphabetPosition = require("../js/alphabetposition")

describe('Alphabetic position function', () => {

    it('Should be a function', () => {
        
        expect(typeof alphabetPosition).toEqual("function")

    })

    it("Should return every letter with its position in the alphabet", () => {
      
        expect(alphabetPosition('abcd')).toEqual("1 2 3 4");

    });

    it("Should return a string ignoring whether it is in upper or lower case and non-letter characters.", () => {
      
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).toEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

    });


    it("Should return a string ignoring whether it is in upper or lower case and non-letter characters.", () => {
      
        expect(alphabetPosition("The narwhal bacons at midnight.")).toEqual("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

    });


})
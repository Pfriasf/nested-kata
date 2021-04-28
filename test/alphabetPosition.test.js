const alphabetPosition = require("../js/alphabetposition")

describe('Alphabetic position function', () => {

    it('Should be a function', () => {
        expect(typeof alphabetPosition).toEqual("function")
    })

    it("Should return every letter with its position in the alphabet", () => {
      expect(alphabetPosition('abcd')).toEqual("1 2 3");
    });


})
const camelCasing = require("../js/camelCasing")

describe('Camel casing function', () => {

    it('Should be a function', () => {
        expect(typeof camelCasing).toBe("function")
    })
    
    it('Should return "" if the input is a empty string', () => {

        expect(camelCasing("")).toBe("")

    })

    it("Should break up camel casing, using a space between words", () => {

      expect(camelCasing("camelCasing")).toBe("camel Casing");

    });


    it("Should break up camel casing, using a space between words even when there are more than two words", () => {
      
        expect(camelCasing("camelCasingTest")).toBe("camel Casing Test");
        
    });


})
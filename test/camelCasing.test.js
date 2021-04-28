const camelCasing = require("../js/camelCasing")

describe('Camel casing function', () => {

    it('Should be a function', () => {
        expect(typeof camelCasing).toBe("function")
    })
    
    it('Should return "" if the input is a empty string', () => {
        expect(camelCasing("")).toBe("")
    })

    
})
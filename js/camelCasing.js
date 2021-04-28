/*
Complete the solution so that the function will break up camel casing, using a space between words.

Test cases
camelCasing("")//""
camelCasing("camelCasing")// camel Casing
camelCasing("camelCasingTest")// camel Casing Test

*/



const camelCasing = (str) => {
    let strArr = str.split("");

    if (str === "") {
        return ""
    }

    strArr.forEach((element, index) => {
      /[A-Z]/.test(element) ? (strArr[index] = ` ${element}`) : null;
    });

    return strArr.join("");
}

module.exports = camelCasing


const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("test to make sure the polybius code works properly", () => {

    it("should properly work", () => {
        const message = "apple pie";
        const expected = "1153531351 534251"
        const actual = polybius(message);

        expect(actual).to.deep.equal(expected);
    });

    it("should correctly decode 42 to (i/j)", () => {
        const message = "1153531351 534251";
        const actual = polybius(message, false);
        const expected = "apple p(i/j)e"
       
        expect(actual).to.equal(expected);
    });

    it("should ingore capital letters", () => {
        const message = "Apple Pie J";
        const expected = "1153531351 534251 42";
        const actual = polybius(message);

        expect(actual).to.deep.equal(expected);
    });
});
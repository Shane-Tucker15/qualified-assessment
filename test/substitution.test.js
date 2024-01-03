const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("tests to make sure the code works properly",() => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const message = "test";
        const alphabet = "lessthan26";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });

    it("should correctly translate the given phrase based on the given alphabet to the funciton", () => {
        const message = "test";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet);
        const expected = "ztlz";

        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const message = "test";
        const alphabet = "asdfasdfasdfasdfasdfasdfas";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });

    it("should maintain spaces in the message and ignore capital letters", () => {
        const message = "Test Test";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet);
        const expected = "ztlz ztlz";

        expect(actual).to.equal(expected);
    });
});
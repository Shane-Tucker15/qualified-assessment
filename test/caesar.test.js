const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("tests to make sure the code works properly", () => {
    it("should properly encode and shift back to the top of the alphabet and maintain spaces", () => {
        const message = "apple pie";
        const shift = 12;
        const actual = caesar(message, shift);
        const expected = "mbbxq buq"
        expect(actual).to.equal(expected);
    });
    it("should properly maintain nonaplhabetic symbols", () => {
        const message = "@ppl3";
        const shift = 12;
        const actual = caesar(message, shift);
        const expected = "@bbx3"
        expect(actual).to.equal(expected);
    });
    it("should return false if less than -25", () => {
        const message = "apple";
        const shift = -200;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });
    it("should return false if greater than 25", () => {
        const message = "apple";
        const shift = 200;
        const actual = caesar(message, shift);
        
        expect(actual).to.be.false;
    });
    it("should return false if shift is 0", () => {
        const message = "apple";
        const shift = 0;
        const actual = caesar(message, shift);
        
        expect(actual).to.be.false;
    });
});


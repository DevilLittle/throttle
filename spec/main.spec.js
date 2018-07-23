
let {getFormattedInput} =require('../src/main.js');

describe('poker-21', function () {

    it('should format input', function () {
        let input = 'A-3-J-Q-7';
        let formattedInput = getFormattedInput(input);
        let expected = ['A', '3', 'J', 'Q', '7'];
        expect(formattedInput).toEqual(expected)
    });
});
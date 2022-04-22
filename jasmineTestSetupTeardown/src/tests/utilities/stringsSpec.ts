import strings from '../../utilities/strings';

describe('tests for string functions', () => {
  describe('tests sentence capitalization', () => {
    it('should capitalize a string', () => {
        expect(strings.capitalize('a sentence')).toEqual('A Sentence');
    });
    it('should allow sentence to remain capitalized', () => {
        expect(strings.capitalize('A Sentence')).toEqual('A Sentence');
    });
  });
});
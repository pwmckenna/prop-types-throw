var assert = require('assert');

describe('prop-types-throw', () => {
    it('throws for prop type warnings', function () {
        assert.throws(function () {
            console.error('Warning: Failed prop type: Invalid prop `disabled` of type `boolean` supplied to `ActionButton`, expected `string`.');
        });
    });
    it('does not throw for non prop type warnings', function () {
        console.error('Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.');
    });
})
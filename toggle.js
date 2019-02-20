var error;
module.exports = {
    on: function () {
        error = console.error;
        console.error = function (msg) {
            error.apply(console, arguments);
            var match = typeof msg === 'string' && msg.match(/Warning: (Failed .* type: .*)/);
            if (match) {
                throw new Error(match[1]);
            }
        };
    },
    off: function () {
        console.error = error;
    }
};

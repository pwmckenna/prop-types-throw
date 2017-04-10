var error = console.error;
console.error = function (msg) {
    var ret = error.apply(console, arguments);
    var match = msg.match(/Warning: (Failed .* type: .*)/);
    if (match) {
        throw new Error(match[1]);
    }
    return ret;
};

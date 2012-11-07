module.exports = exports = {}

module.exports.mixin = function (self, parent) {

    for (var i in parent.prototype) {
        if (parent.prototype.hasOwnProperty(i)) {
            if (!self.hasOwnProperty(i)) {
                self[i] = parent.prototype[i];
            }
        }
    }
    return self;
};
(function () {
    'use strict';

    // Vars
    var parsers = require('./parsers');

    /*********************************************************************/

    module.exports = function (parser, cb) {
        var skl = {
                header: {}
            };

        skl.header.magic = parser.string(8);
        skl.header.version = parser.int32();

        parsers['v' + skl.header.version](skl, parser);

        cb(null, skl);

    };

}());

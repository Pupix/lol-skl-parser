(function () {
    'use strict';

    var v1 = require('./v1');

    module.exports = function (skl, parser) {

        v1(skl, parser);

        skl.boneIndicesCounter = parser.int32();
        skl.boneIndices = parser.int32(skl.boneIndicesCounter);
    };

}());

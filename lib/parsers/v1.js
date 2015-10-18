(function () {
    'use strict';

    module.exports = function (skl, parser) {
        var i;

        skl.header.designerId = parser.int32();
        skl.boneCounter = parser.int32();

        for (i = 0, skl.bones = []; i < skl.boneCounter; i += 1) {
            skl.bones.push({
                name: parser.string(32),
                parent: parser.int32(),
                scale: parser.float(),
                matrix: parser.float(12)
            });
        }

    };

}());

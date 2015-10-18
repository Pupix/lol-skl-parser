(function () {
    'use strict';

    module.exports = function (skl, parser) {
        var boneName,
            i;

        skl.unks = {};
        skl.unks[parser.tell()] = parser.int16();
        skl.boneCounter = parser.int16();
        skl.boneIndicesCounter = parser.int32();


        skl.offsets = {};
        skl.offsets.bonesStart = parser.int32();
        skl.offsets.animationStart = parser.int32();
        skl.offsets.boneIndicesStart = parser.int32();
        skl.offsets.boneIndicesEnd = parser.int32();
        skl.offsets.halfayBetweenBoneindicesAndStrings = parser.int32();
        skl.offsets.boneNamesStart = parser.int32();
        skl.offsets.padding = parser.string(20);

        for (i = 0, skl.bones = []; i < skl.boneCounter; i += 1) {
            skl.bones.push({
                unk0: parser.int16(),
                id: parser.int16(),
                parent: parser.int16(),
                unk1: parser.int16(),
                hash: parser.int32(),
                twoPointOne: parser.float(),
                position: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float()
                },
                scale: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float()
                },
                quaternion: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float(),
                    w: parser.float()
                },
                ct: {
                    x: parser.float(),
                    y: parser.float(),
                    z: parser.float()
                },
                padding: parser.string(32)
            });
        }

        for (i = 0, skl.bonesExtra = []; i < skl.boneCounter; i += 1) {
            skl.bonesExtra.push({
                boneId: parser.int32(),
                boneHash: parser.int32()
            });
        }

        skl.boneIndices = parser.int16(skl.boneIndicesCounter);

        parser.seek(skl.offsets.boneNamesStart);

        for (i = 0, skl.boneNames = []; i < skl.boneCounter; i += 1) {
            boneName = '';

            do {
                boneName += parser.string(4);
            } while (boneName.indexOf('\u0000') === -1);

            skl.boneNames.push(boneName);
        }

    };

}());

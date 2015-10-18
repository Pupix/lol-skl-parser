(function () {
    'use strict';

    var util = require('lol-hash-util');

    /**************************************************************************/

    module.exports = function (readable, data) {
        var boneHash,
            boneName;

        data.bones.forEach(function (bone, index) {
            readable.bones[index] = {};

            boneName = bone.name || data.boneNames[index];
            boneName = boneName.slice(0, boneName.indexOf('\u0000'));
            boneHash = bone.hash || util.boneHash(boneName);

            readable.bones[index].name   = boneName;
            readable.bones[index].hash   = boneHash;
            readable.bones[index].parent = bone.parent;
            readable.bones[index].scale  = bone.scale;
            readable.bones[index].position  = bone.position;
            readable.bones[index].quaternion  = bone.quaternion;
        });

    };

}());

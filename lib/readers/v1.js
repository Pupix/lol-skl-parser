(function () {
    'use strict';

    var XP = require('expandjs'),
        THREE = require('three'),
        util = require('lol-hash-util');

    module.exports = function (readable, data) {

        var bones = [];

        data.bones.forEach(function (bone, index) {
            var b = new THREE.Bone(),
                m = new THREE.Matrix4();

            readable.bones[index] = {};

            readable.bones[index].name = bone.name.slice(0, bone.name.indexOf('\u0000'));
            readable.bones[index].parent = bone.parent;
            readable.bones[index].hash = util.boneHash(readable.bones[index].name);

            /******************************************************************/
            /* Port v1 to a v0 like structure using THREE.js's bone system    */
            /******************************************************************/

            XP.apply(m, 'set', XP.concat(bone.matrix, [0, 0, 0, 1]));

            m.decompose(b.position, b.quaternion, b.scale);
            b.updateMatrixWorld();

            if (bones[bone.parent]) {
                b.matrix.getInverse(bones[bone.parent].matrixWorld);
                b.matrix.multiply(b.matrixWorld);
                b.matrix.decompose(b.position, b.quaternion, b.scale);
                bones[bone.parent].add(b);
            } else {
                b.matrix.decompose(b.position, b.quaternion, b.scale);
            }

            bones.push(b);

            readable.bones[index].scale  = b.scale;
            readable.bones[index].position  = b.position;
            readable.bones[index].quaternion  = {
                x: b.quaternion.x,
                y: b.quaternion.y,
                z: b.quaternion.z,
                w: b.quaternion.w
            };

        });

    };

}());

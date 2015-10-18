# lol-skl-parser
A parser for .skl files from League of Legends.

## Download
lol-skl-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-skl-parser) `git clone https://github.com/Pupix/lol-skl-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-skl-parser`

## Usage example

```js
var SklParser = require('lol-skl-parser'),
    skl = new SklParser();
    
    skl.read('Kindred_Base.skl', function (err, data) {
        console.log(data);
        //  {
        //      "bones": [
        //          {
        //              hash: 497252
        //              name: "Root"
        //              parent: -1
        //              position: {...}
        //              quaternion: {...}
        //              scale: {...}
        //          },
        //          ...
        //      ]
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a .skl file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a .skl file from the given path, leaving only the relevant data of the skeleton model.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.


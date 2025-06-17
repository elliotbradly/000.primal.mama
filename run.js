const path = require('path');
const fs = require('fs');
const { program } = require('commander');

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;
var exec = require('child_process').exec;

exec('tsc -b 995.library', async (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
    }

    init()

})

const init = async () => {

    LIBRARY = require(path.resolve('./dist/995.library/hunt'));
    LIBRARY_ACTION = require(path.resolve('./dist/995.library/00.library.unit/library.action'));
    await LIBRARY.hunt(LIBRARY_ACTION.INIT_LIBRARY, { val: 1, dat: null, src: null });

};



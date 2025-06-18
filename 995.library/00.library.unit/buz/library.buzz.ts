import { LibraryModel } from "../library.model";
import LibraryBit from "../fce/library.bit";
import State from "../../99.core/state";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActLib from "../library.action";


import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import { glob } from "fs";

var bit, val, idx, dex, lst, dat;

export const initLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    //if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLib, ActOlm, ActPmt] , dat: bal.dat, src: bal.src })
    //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-control" } });

    return cpy;
};

export const testLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    console.log('testing the library')

    bal.slv({ libBit: { idx: "test-library" } });
    return cpy;
};

export const updateLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var lstMsg = [];


    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '995.library' })
    lstMsg = lstMsg.concat(bit.pvtBit.lst)


    idx = "../../011.sower/995.library/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/995.library/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit)

    //idx = "../../333.depth/812.space/";
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './812.space/', idx  });
    //lstMsg = lstMsg.concat(bit.pvtBit)

    //idx = "../../333.depth/814.being/";
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './814.being/', idx  });
    //lstMsg = lstMsg.concat(bit.pvtBit)

    bal.slv({ libBit: { idx: "update-library", lst: lstMsg } });
    return cpy;
};

export const countLibrary = (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var obj = {
        includes: [], // The directories and files that need to be included are all included by default
        excludes: [], // All directories and files to be excluded are removed by default
        defaultExcludes: [// Directory and files excluded by default
            '.git',
            '.vscode',
            'node_modules',
            'package.json',
            'package-lock.json',
            'yarn-lock.json',
            'count.output.json',
            'dist',
            'data',
            'public',
            'modules'
        ],
        defaultExcludesFileType: [// File types excluded by default
            '.json', '.zip', '.rar', '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.mp3', '.wma', '.wav', '.mp4', '.flv', '.mov', '.avi', '.wmv', '.rmvb', '.ogg', '.avi', '.ppt', '.pptx', '.doc', '.docx', '.xls', '.xlsx', '.psd', '.ttf', '.fon', '.exe', '.msi',
        ],
        output: 'count.output.json', // The default output result file
        outputTrace: '', // Configure the file for outputting trace results, not output by default
        encodings: [// Supported file encodings, will be ignored for unsupported files
            'ascii',
            'utf8',
            'utf-8',
            'unicode'
        ],
        ignoreEmptyLine: true,
    }

    const count = require('count-code-line');
    count(obj);

    const { DateTime } = require("luxon");
    const dt = DateTime.local();
    var now = dt.toLocaleString(DateTime.DATETIME_FULL);
    var S = require('string')
    now = now.replace(':', '-')
    now = S(now).slugify().s;

    var FS = require('fs-extra')
    var dat = FS.readJsonSync('./count.output.json')
    var line = dat.lines + ' : ' + now

    var list = FS.readFileSync('./data/line-log.txt').toString().split('\n')

    var past = list[0];
    var last = Number(past.split(':')[0])

    if (last != dat.lines) {
        list.unshift(line)
        list
        FS.writeFileSync('./data/line-log.txt', list.join(' \n '))
    }

    bal.slv({ libBit: { idx: "count-library", val:dat.lines } });
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



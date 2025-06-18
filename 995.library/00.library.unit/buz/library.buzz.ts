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

export const countLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var Walk = require("@root/walk");
    var path = require("path");
    var FS = require('fs-extra')

    var output = []

    var direct = {}

    function walkFunc(err, pathname, dirent) {
        if (err) {
            // throw an error to stop walking
            // (or return to ignore and keep going)
            console.warn("fs stat error for %s: %s", pathname, err.message);
            return Promise.resolve();
        }

        if (dirent.isDirectory() && dirent.name == 'data') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'dist') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'node_modules') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'public') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'modules') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == '.') { return Promise.resolve(false) }


        if (dirent.isDirectory() && dirent.name.startsWith(".")) {
            return Promise.resolve(false);
        }

        if (dirent.isFile() && dirent.name.startsWith(".") == false) {
            var file = path.join(path.dirname(pathname), dirent.name);
            output.push(file)

            if (direct[path.dirname(pathname)] == null) direct[path.dirname(pathname)] = ''
        }

        return Promise.resolve();
    }

    await Walk.walk('./', walkFunc);

    output

    const allowedExtensions = new Set(['.ts', '.js', '.mjs', '.cjs']);

    const paths = output.filter(filePath => {
        const extension = path.extname(filePath).toLowerCase(); // Ensure case-insensitivity for extension
        return allowedExtensions.has(extension);
    });

    paths

    var out = []

    paths.forEach((a) => {
        var lst = FS.readFileSync(a).toString().split('\n');
        out = out.concat(lst)
    })

    var score = []

    out.forEach((a) => {
        if (a.length < 5) return
        a = a.replaceAll(' ', '')
        if (a.length <= 3) return
        if (a.includes('//')) return
        //if (a.includes('console.log')) return
        if (a.includes('returncpy')) return

        score.push(a)
    })

    direct
    score

    var fin = score.length

    //FS.writeFileSync('./data/complete.txt', score.join('\n') )
    const { DateTime } = require("luxon");
    const dt = DateTime.local();
    var now = dt.toLocaleString(DateTime.DATETIME_FULL);
    var S = require('string')
    now = now.replace(':', '-')
    now = S(now).slugify().s;

    var line = fin + ' : ' + now

    var list = FS.readFileSync('./data/line-log.txt').toString().split('\n')

    var past = list[0];
    var last = Number(past.split(':')[0])

    if (last != fin) {
        list.unshift(line)
        list
        FS.writeFileSync('./data/line-log.txt', list.join('\n'))
    }

    bal.slv({ libBit: { idx: "count-library", val: fin } });
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



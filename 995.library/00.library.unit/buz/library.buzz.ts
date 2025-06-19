import { LibraryModel } from "../library.model";
import LibraryBit from "../fce/library.bit";
import State from "../../99.core/state";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActCns from "../../83.console.unit/console.action";

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

export const listLibrary = (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var FS = require('fs-extra')
    var list = FS.readdirSync('./')

    const pattern = /^\d{3}\.[a-zA-Z]+$/;
    const newArray = list.filter(item => pattern.test(item));

    bal.slv({ libBit: { idx: "list-library", lst: newArray } });
    return cpy;
};

export const testLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    console.log('testing the library')

    bal.slv({ libBit: { idx: "test-library" } });
    return cpy;
};

export const updateLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var FS = require("fs-extra");
    var doT = require("dot");
    var S = require("string");

    var title = "995.library";
    var file = "./data/redux/BEE.txt";
    var fileFin = "./data/redux/BEE.ts";

    title = bal.src

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var list = FS.readdirSync("./" + title);
    var lineList = FS.readFileSync(file).toString().split("\n");

    var out = [];
    var dirList = [];

    var itemList = [];

    list.forEach(async (a, b) => {
        list[b] = "./" + title + "/" + a;

        if (FS.lstatSync(list[b]).isDirectory()) {
            if (S(list[b]).contains("unit") == false) return;

            var directory = list[b] + "/";
            var element = a.split(".")[1];

         

            var unitName = capitalizeFirstLetter(element);

            var unitImportSrc = "./" + a + "/" + element + ".unit";
            var unitImportSte = "import " + unitName + 'Unit from "' + unitImportSrc + '";';

            var faceImportSrc = "./" + a + "/fce/" + element + ".interface";
            var faceImportSte = "import " + unitName + ' from "' + faceImportSrc + '";';

            var modlImportSrc = "./" + a + "/" + element + ".model";
            var modlImportSte = "import { " + unitName + 'Model } from "' + modlImportSrc + '";';

            var redcImportSrc = "./" + a + "/" + element + ".reduce";
            var redcImportSte = "import * as reduceFrom" + unitName + ' from "' + redcImportSrc + '";';

            var reduced = element + " : reduceFrom" + unitName + ".reducer";
            var model = element + " : " + unitName + " = new " + unitName + "Model();";

            var item = {
                model,
                reduced,
                redcI: redcImportSte,
                modlI: modlImportSte,
                facI: faceImportSte,
                untI: unitImportSte,
                unitName,
                element,
            };

            itemList.push(item);
        }
    });

    var unitImports = "";
    itemList.forEach((a) => {
        unitImports += a.untI + "\n";
    });

    var faceImports = "";
    itemList.forEach((a) => {
        faceImports += a.facI + "\n";
        faceImports += a.modlI + "\n";
    });

    var unitListNom = [];
    itemList.forEach((a) => {
        unitListNom.push(a.unitName + "Unit");
    });

    var unitList = JSON.stringify(unitListNom) + ";";
    unitList = S(unitList).replaceAll('"', "");

    var reduceImports = "";
    itemList.forEach((a) => {
        reduceImports += a.redcI + "\n";
    });

    var reduceList = "";
    itemList.forEach((a, b) => {
        //if (b == reduceList.length - 1) return;
        reduceList += a.reduced + ", \n";
    });

    //reduceList += itemList[itemList.length - 1].reduced + "\n";

    var modelList = "";
    itemList.forEach((a, b) => {
        modelList += a.model + "\n";
    });

    var gel = {
        unitImports,
        faceImports,
        unitList,
        reduceImports,
        reduceList,
        modelList,
    };

    var writeLine = [];

    lineList.forEach(async(a, b) => {
        
  
        if (S(a).contains("//")) return;

        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        
        writeLine.push(outLine);
    });

    writeLine.forEach( async (a) => {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "line : " + a })
    });

    var finFile = writeLine.join("\n");

    FS.ensureFileSync(fileFin);

    var endLoc = "./" + title + "/BEE.ts";

    
    finFile
    

    FS.writeFileSync(endLoc, finFile);

    bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing " + endLoc })

    
    bal.slv({ libBit: { idx: "update-library" } });
    return cpy;
};

export const countLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var Walk = require("@root/walk");
    var path = require("path");
    var FS = require('fs-extra')

    var output = []

    var direct = {}
    var snowflake = {}

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
        if (snowflake[a] == null) snowflake[a] = 1
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

    var pow = 0;

    for (var key in snowflake) {
        pow += 1;
    }

    var line = fin + ' : ' + pow + ' : ' + now

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



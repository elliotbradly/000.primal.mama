import { SolidModel } from "../solid.model";
import SolidBit from "../fce/solid.bit";
import State from "../../99.core/state";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActCns from "../../act/console.action";

//import * as ActCns from "../../83.console.unit/console.action";//let this be in the act folder


//import * as ActVid from "../../11.video.unit/video.action";

import * as ActSld from "../../00.solid.unit/solid.action"

import * as ActSpc from "../../act/space.action"

import * as ActPvt from "../../act/pivot.action";
import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat, src;

var once = false


export const initSolid = async (cpy: SolidModel, bal: SolidBit, ste: State) => {


    if (once == true) return

    once = true


    //if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ ActSld ], dat: bal.dat, src: bal.src })



    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


    //ste.bus(ActSpc.READY_SPACE, {})

    bal.slv({ intBit: { idx: "init-solid" } });


    return cpy;
};

export const updateSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {

    var pivot = '111.solid'

    var unitList = [
        '00.solid.unit',
        '01.babylon.unit',
        '02.camera.unit',
        '03.light.unit',
        '04.primative.unit',
        '08.screen.unit',
        '09.glop.unit',
        '10.miku.unit',

        '97.collect.unit',
        '99.bus.unit',
        '99.core']

    const path = require('path');
    var FS = require('fs-extra')

    var containers = FS.readdirSync('../')

    containers = containers.map(dirName => "../" + dirName);
    containers = containers.filter(dirName => dirName !== "../" + pivot);

    function isDirectorySync(path) {
        if (!FS.existsSync(path)) {
            return false; // Path doesn't exist
        }

        const stats = FS.lstatSync(path);
        return stats.isDirectory();
    }

    var check = []

    containers.forEach((a) => {

        if (isDirectorySync(a) == false) return
        check.push(a)

    })

    check
    var yes = []

    check.forEach((a) => {

        var looking = FS.readdirSync(a)

        looking.forEach((b) => {
            if (b != pivot) return
            yes.push(a)
        })

    })

    yes
    debugger

    yes.forEach((a, b) => {

        var remove = a + '/' + pivot
        //FS.removeSync(remove);

        bit = ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'removing --- ' + remove })

        unitList.forEach((c) => {

            var dest = a + ''

            var source = './' + pivot + '/' + c;
            var output = a + '/002.space/' + c

            bit = ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: source + ' --- ' + output })

            FS.copySync(source, output);

        })
    })


    bal.slv({ sldBit: { idx: "update-solid" } });



    return cpy;
};


export const shadeSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {
    debugger
    return cpy;
};

export const openSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {

    var batch;

    const { spawn } = require('child_process');
    const path = require('path');

    // Simulate some work
    //setTimeout(() => {
    //  console.log('Work completed.');
    //  process.exit(0); // Exit with success code
    //}, 10000);

    function launchBatchFile(userInputPath) {
        const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

        batch = spawn('cmd', ['/c', sanitizedPath]);

        batch.stdout.on('data', async (data) => {
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `stdout: ${data}` })
        });

        batch.stderr.on('data', async (data) => {
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `stderr: ${data}`, dat: { clr: 'red' } })
        });

        batch.on('close', async (code) => {
            console.log();
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `child process exited with code ${code}` })
            //FS.emptyDir( dest, ()=>{
            //  FS.copySync('./dist/win-unpacked/' , dest )
            //})


        });

    }



    launchBatchFile(process.env.SOLID_BAT);

    bal.slv({ shdBit: { idx: "open-shade", dat: {} } });

    return cpy;
};




export const testSolid = (cpy: SolidModel, bal: SolidBit, ste: State) => {

    bal.slv({ sldBit: { idx: "test-solid" } })

    return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });
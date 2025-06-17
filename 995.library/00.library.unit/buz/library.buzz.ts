import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActLib from "../library.action";


import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

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


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { LibraryModel } from "../library.model";
import LibraryBit from "../fce/library.bit";
import State from "../../99.core/state";
import { PrimativeModel } from "../primative.model";
import PrimativeBit from "../fce/primative.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActPrm from "../primative.action";

import PrimBit from "../fce/prim.bit";

var bit;

export const initPrimative = (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    debugger
    return cpy;
};

export const updatePrimative = (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    return cpy;
};


export const readPrimative = async (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPrm.CREATE_PRIMATIVE })
    bal.slv({ prmBit: { idx: "read-primative", dat: bit.clcBit.dat } });
    return cpy;
};
export const writePrimative = async (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPrm.CREATE_PRIMATIVE })
    if (bit.clcBit.val != 0) ste.hunt(ActPrm.UPDATE_PRIMATIVE, { idx: bal.idx })
    bal.slv({ prmBit: { idx: "write-primvative", dat: bit.clcBit.dat } });
    return cpy;
};
export const removePrimative = async (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPrm.REMOVE_PRIMATIVE })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-screen", dat: bit.clcBit } });
    bal.slv({ prmBit: { idx: "remove-primative" } });
    return cpy;
};
export const deletePrimative = (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {
    debugger
    return cpy;
};
export const createPrimative = (cpy: PrimativeModel, bal: PrimativeBit, ste: State) => {

    var dat: PrimBit = {
        idx: bal.idx, src: bal.src,
        bit: null
    }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }


    bal.slv({ prmBit: { idx: "create-primative", dat } });


    //const box = BABYLON.MeshBuilder.CreateBox("box", { size, updatable, sideOrientation}, scene);

    return cpy;
};

import { UnitModel } from "../unit.model";
import UnitBit from "../fce/unit.bit";
import State from "../../99.core/state";

export const initUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {
    debugger
    return cpy;
};

export const updateUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

    debugger

    bal.slv({ untBit: { idx: "update-unit" } });
    return cpy;
};

export const listUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {
    
    var path = './' +  bal.src;

    var FS = require('fs-extra')
    var option = FS.pathExistsSync(path)

    lst = []

    if (option == true) {
        var list = FS.readdirSync('./' + bal.src);
        var lst = list.filter((e) => { return e.includes('.unit') == true; });
        bal.slv({ untBit: { idx: "list-unit", lst, val: 1 } });
        return cpy;
    }

    bal.slv({ untBit: { idx: "list-unit", lst, val: 0 } });

    return cpy;
};



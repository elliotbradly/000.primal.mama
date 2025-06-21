import { ProgressModel } from "../progress.model";
import ProgressBit from "../fce/progress.bit";
import State from "../../99.core/state";

import * as ActClk from '../../03.clock.unit/clock.action'

var bit, dat;

export const initProgress = (cpy: ProgressModel, bal: ProgressBit, ste: State) => {
    debugger
    return cpy;
};

export const updateProgress = async (cpy: ProgressModel, bal: ProgressBit, ste: State) => {

    bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.idx })
    var increment = bit.clkBit.dat;

    var obj = { hours: 0, minutes: 0, days: 0, seconds: 0 }

    //obj.hours = increment.hrs;
    obj.minutes = increment.min;
    obj.days = increment.day;
    obj.seconds = increment.sec;

    bit = await ste.hunt(ActClk.READ_CLOCK, { idx: bal.src })
    dat = bit.clkBit.dat;

    dat.bit.plus( obj );

    bal.slv({ prgBit: { idx: 'update-progess', dat } });
    return cpy;
};



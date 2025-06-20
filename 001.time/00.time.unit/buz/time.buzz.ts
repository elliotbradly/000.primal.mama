import { TimeModel } from '../time.model';
import TimeBit from '../fce/time.bit';
import State from '../../99.core/state';
import { DateTime } from 'luxon';
import * as TIME from '../../val/time';
import ClockBit from '../fce/clock.bit';

import * as ActTme from '../../00.time.unit/time.action';
import * as ActClk from '../../03.clock.unit/clock.action';
import * as ActCol from '../../97.collect.unit/collect.action';
import * as ActCns from '../../act/console.action';
import * as ActPvt from '../../act/pivot.action';
import * as ActDsk from '../../act/disk.action';
import * as ActBus from '../../99.bus.unit/bus.action';

var bit, lst, dex, src, dat;

export const initTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ intBit: { idx: 'init-time' } });
  return cpy;
};

export const testTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ tmeBit: { idx: 'test-time', src: 'testing-time' } });
  return cpy;
};

export const updateTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ tmeBit: { idx: 'update-time', dat: bit.tmeBit.dat } });
  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


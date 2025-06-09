import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActCtr from "../../00.control.unit/control.action";
import * as ActTrn from "../../01.turn.unit/turn.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

import * as ActCrd from "../../act/cardano.action";

var bit, val, idx, dex, lst, dat, src;

export const initControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActCtr], dat: bal.dat, src: bal.src })

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

  bit = await ste.hunt( ActTrn.INIT_TURN, {})

  if (bal.slv != null) bal.slv({ intBit: { idx: "init-control" } });

  return cpy;
};

export const updateControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  const { exec } = require('child_process');

  exec('tsc -b 111.control', async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }

    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "111.control" });

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/111.control.js' })
    var shade = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/111.control.js', dat: shade })

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ ctlBit: { idx: "update-control" } });
    }, 3);

  });

  return cpy;
};

export const openControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {

  const { exec } = require('child_process');

  exec('npx quasar dev -m electron', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ condBit: { idx: "open-control", dat: {} } });

  })

  return cpy;
};

export const createControl = (cpy: ControlModel, bal: ControlBit, ste: State) => {

  const { exec } = require('child_process');

  exec('npx quasar build', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ condBit: { idx: "create-control", dat: {} } });

  })


  return cpy;
};

export const testControl = async (cpy: ControlModel, bal: ControlBit, ste: State) => {

  bit = await ste.bus(ActCrd.READ_CARDANO, {})

  if (bal.slv != null) bal.slv({ condBit: { idx: "test-control", dat: {} } });

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });




import { ControlModel } from "../control.model";
import ControlBit from "../fce/control.bit";
import State from "../../99.core/state";

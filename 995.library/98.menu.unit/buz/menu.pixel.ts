import * as ActMnu from "../menu.action";
const path = require('path');
var exec = require('child_process').exec;

import * as ActPxl from "../../act/pixel.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

//import * as ActMap from "../../03.hexmap.unit/hexmap.action"

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action"; 111

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

var PIXEL;

export const pixelMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await (async () => {
    try {
      await new Promise<void>((resolve, reject) => exec('tsc -b 400.pixel', err => err ? reject(err) : resolve()));
      if (PIXEL == null) PIXEL = require(path.resolve('./dist/400.pixel/hunt'));
      bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled pixel" });
    } catch (err) {
      console.error(`exec error: ${err}`);
      throw err;
    }
  })();

  lst = [ActPxl.TEST_PIXEL, ActPxl.WRITE_PIXEL, ActMnu.UPDATE_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActPxl.WRITE_PIXEL:
      bit = await PIXEL.hunt(ActPxl.WRITE_PIXEL, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActPxl.TEST_PIXEL:
      bit = await PIXEL.hunt(ActPxl.TEST_PIXEL, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });




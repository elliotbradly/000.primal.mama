import * as ActMnu from "../menu.action";

import * as ActLib from "../../00.library.unit/library.action";

//import * as ActSrc from "../../05.search.unit/search.action";

//import * as ActPmt from "../../12.prompt.unit/prompt.action";
//import * as ActAut from "../../13.author.unit/author.action";
//import * as ActGen from "../../14.genre.unit/genre.action";
//import * as ActSet from "../../15.setting.unit/setting.action";

//import * as ActEmo from "../../33.emotion.unit/emotion.action";

import * as ActClc from "../../97.collect.unit/collect.action";

import * as ActPut from "../../84.input.unit/input.action";
import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";

var bit, lst, dex, idx, dat, src, val;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});

  bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 })
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Control PIVOT V0" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ActMnu.CONTROL_MENU, ActMnu.SPACE_MENU, ActMnu.PIXEL_MENU]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMnu.CONTROL_MENU:
      bit = await ste.hunt(ActMnu.CONTROL_MENU, {})
      break;

    case ActMnu.SPACE_MENU:
      bit = await ste.hunt(ActMnu.SPACE_MENU, {})
      break;

    case ActMnu.PIXEL_MENU:
      bit = await ste.hunt(ActMnu.PIXEL_MENU, {})
      break;

    case ActLib.UPDATE_LIBRARY:
      ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Update Library Pivot" })
      bit = await ste.hunt(ActLib.UPDATE_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.GITHUB_MENU:
      bit = await ste.hunt(ActMnu.GITHUB_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      bit = await ste.hunt(ActMnu.UPDATE_MENU)
      break;

    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => {

    updateMenu(cpy, bal, ste);

  }, 1111)



  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.hunt(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};


export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";
import { list } from "995.library/BEE";

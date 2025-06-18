import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";

// Menu actions

export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
  readonly type = INIT_MENU;
  constructor(public bale: MenuBit) { }
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
  readonly type = UPDATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOCK_MENU = "[Menu action] Clock Menu";
export class ClockMenu implements Action {
  readonly type = CLOCK_MENU;
  constructor(public bale: MenuBit) { }
}

export const TEST_MENU = "[Menu action] Test Menu";
export class TestMenu implements Action {
  readonly type = TEST_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOSE_MENU = "[Menu action] Close Menu";
export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
  constructor(public bale: MenuBit) { }
}

export const TIME_MENU = "[Time action] Time Menu";
 export class TimeMenu implements Action {
 readonly type = TIME_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export type Actions = InitMenu | ClockMenu | UpdateMenu | TestMenu | CloseMenu
| TimeMenu
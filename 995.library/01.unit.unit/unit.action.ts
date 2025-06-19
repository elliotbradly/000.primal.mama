import { Action } from "../99.core/interface/action.interface";
import  UnitBit  from "./fce/unit.bit";

// Unit actions

export const INIT_UNIT = "[Unit action] Init Unit";
export class InitUnit implements Action {
 readonly type = INIT_UNIT;
 constructor(public bale: UnitBit) {}
}

export const UPDATE_UNIT = "[Unit action] Update Unit";
export class UpdateUnit implements Action {
 readonly type = UPDATE_UNIT;
 constructor(public bale: UnitBit) {}
}

export type Actions = | InitUnit | UpdateUnit ;

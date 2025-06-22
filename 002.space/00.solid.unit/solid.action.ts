import { Action } from "../99.core/interface/action.interface";
import  SolidBit  from "./fce/solid.bit";

// Solid actions

export const INIT_SOLID = "[Solid action] Init Solid";
export class InitSolid implements Action {
 readonly type = INIT_SOLID;
 constructor(public bale: SolidBit) {}
}

export const UPDATE_SOLID = "[Solid action] Update Solid";
export class UpdateSolid implements Action {
 readonly type = UPDATE_SOLID;
 constructor(public bale: SolidBit) {}
}

export const SHADE_SOLID = "[Shade action] Shade Solid";
 export class ShadeSolid implements Action {
 readonly type = SHADE_SOLID;
 constructor(public bale: SolidBit) {}
 }
 
export const TEST_SOLID = "[Test action] Test Solid";
 export class TestSolid implements Action {
 readonly type = TEST_SOLID;
 constructor(public bale: SolidBit) {}
 }
 
export const OPEN_SOLID = "[Open action] Open Solid";
 export class OpenSolid implements Action {
 readonly type = OPEN_SOLID;
 constructor(public bale: SolidBit) {}
 }
 
export type Actions = | InitSolid | UpdateSolid 
| ShadeSolid
| TestSolid
| OpenSolid
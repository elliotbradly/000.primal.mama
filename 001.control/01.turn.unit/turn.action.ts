import { Action } from "../99.core/interface/action.interface";
import  TurnBit  from "./fce/turn.bit";

// Turn actions

export const INIT_TURN = "[Turn action] Init Turn";
export class InitTurn implements Action {
 readonly type = INIT_TURN;
 constructor(public bale: TurnBit) {}
}

export const UPDATE_TURN = "[Turn action] Update Turn";
export class UpdateTurn implements Action {
 readonly type = UPDATE_TURN;
 constructor(public bale: TurnBit) {}
}

export const OPEN_TURN = "[Open action] Open Turn";
 export class OpenTurn implements Action {
 readonly type = OPEN_TURN;
 constructor(public bale: TurnBit) {}
 }
 
export type Actions = | InitTurn | UpdateTurn 
| OpenTurn
import { Action } from "../99.core/interface/action.interface";
import  PrimativeBit  from "./fce/primative.bit";

// Primative actions

export const INIT_PRIMATIVE = "[Primative action] Init Primative";
export class InitPrimative implements Action {
 readonly type = INIT_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
}

export const UPDATE_PRIMATIVE = "[Primative action] Update Primative";
export class UpdatePrimative implements Action {
 readonly type = UPDATE_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
}

export const READ_PRIMATIVE = "[Read action] Read Primative";
 export class ReadPrimative implements Action {
 readonly type = READ_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
 }
 
export const WRITE_PRIMATIVE = "[Write action] Write Primative";
 export class WritePrimative implements Action {
 readonly type = WRITE_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
 }
 
export const REMOVE_PRIMATIVE = "[Remove action] Remove Primative";
 export class RemovePrimative implements Action {
 readonly type = REMOVE_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
 }
 
export const DELETE_PRIMATIVE = "[Delete action] Delete Primative";
 export class DeletePrimative implements Action {
 readonly type = DELETE_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
 }
 
export const CREATE_PRIMATIVE = "[Create action] Create Primative";
 export class CreatePrimative implements Action {
 readonly type = CREATE_PRIMATIVE;
 constructor(public bale: PrimativeBit) {}
 }
 
export type Actions = | InitPrimative | UpdatePrimative 
| ReadPrimative
| WritePrimative
| RemovePrimative
| DeletePrimative
| CreatePrimative
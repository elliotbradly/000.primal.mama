import { Action } from "../99.core/interface/action.interface";
import  LibraryBit  from "./fce/library.bit";

// Library actions

export const INIT_LIBRARY = "[Library action] Init Library";
export class InitLibrary implements Action {
 readonly type = INIT_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const UPDATE_LIBRARY = "[Library action] Update Library";
export class UpdateLibrary implements Action {
 readonly type = UPDATE_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const TEST_LIBRARY = "[Library action] Test Library";
export class TestLibrary implements Action {
 readonly type = TEST_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const COUNT_LIBRARY = "[Count action] Count Library";
 export class CountLibrary implements Action {
 readonly type = COUNT_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export const LIST_LIBRARY = "[List action] List Library";
 export class ListLibrary implements Action {
 readonly type = LIST_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export type Actions = | InitLibrary | UpdateLibrary | TestLibrary 
| CountLibrary
| ListLibrary
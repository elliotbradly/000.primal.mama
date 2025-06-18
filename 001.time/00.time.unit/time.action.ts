import { Action } from "../99.core/interface/action.interface";
import TimeBit from "./fce/time.bit";

// Time actions

export const INIT_TIME = "[Time action] Init Time";
export class InitTime implements Action {
  readonly type = INIT_TIME;
  constructor(public bale: TimeBit) {}
}

export const UPDATE_TIME = "[Time action] Update Time";
export class UpdateTime implements Action {
  readonly type = UPDATE_TIME;
  constructor(public bale: TimeBit) {}
}

export const NOW_TIME = "[Time action] Now Time";
export class NowTime implements Action {
  readonly type = NOW_TIME;
  constructor(public bale: TimeBit) {}
}

export const FORMAT_TIME = "[Time action] Format Time";
export class FormatTime implements Action {
  readonly type = FORMAT_TIME;
  constructor(public bale: TimeBit) {}
}



export const READ_TIME = "[Read action] Read Time";
 export class ReadTime implements Action {
 readonly type = READ_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const WRITE_TIME = "[Write action] Write Time";
 export class WriteTime implements Action {
 readonly type = WRITE_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const CREATE_TIME = "[Create action] Create Time";
 export class CreateTime implements Action {
 readonly type = CREATE_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const COMPARE_TIME = "[Compare action] Compare Time";
 export class CompareTime implements Action {
 readonly type = COMPARE_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export const REDUCE_TIME = "[Reduce action] Reduce Time";
 export class ReduceTime implements Action {
 readonly type = REDUCE_TIME;
 constructor(public bale: TimeBit) {}
 }

 export const TEST_TIME = "[Reduce action] Test Time";
 export class TestTime implements Action {
 readonly type = TEST_TIME;
 constructor(public bale: TimeBit) {}
 }
 
export type Actions = InitTime| UpdateTime | NowTime | FormatTime
| ReadTime
| WriteTime
| CreateTime
| CompareTime
| ReduceTime
| TestTime
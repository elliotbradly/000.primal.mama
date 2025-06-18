import Model from "./99.core/interface/model.interface";

import TimeUnit from "./00.time.unit/time.unit";
import ClockUnit from "./03.clock.unit/clock.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Time from "./00.time.unit/fce/time.interface";
import { TimeModel } from "./00.time.unit/time.model";
import Clock from "./03.clock.unit/fce/clock.interface";
import { ClockModel } from "./03.clock.unit/clock.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [TimeUnit,ClockUnit,CollectUnit,BusUnit];

import * as reduceFromTime from "./00.time.unit/time.reduce";
import * as reduceFromClock from "./03.clock.unit/clock.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 time : reduceFromTime.reducer, 
clock : reduceFromClock.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 time : Time = new TimeModel();
clock : Clock = new ClockModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}

import Model from "./99.core/interface/model.interface";

import SpaceUnit from "./00.space.unit/space.unit";
import BabylonUnit from "./01.babylon.unit/babylon.unit";
import FocusUnit from "./01.focus.unit/focus.unit";
import CameraUnit from "./02.camera.unit/camera.unit";
import GeojsonUnit from "./02.geojson.unit/geojson.unit";
import HexmapUnit from "./03.hexmap.unit/hexmap.unit";
import LightUnit from "./03.light.unit/light.unit";
import PrimativeUnit from "./04.primative.unit/primative.unit";
import ScreenUnit from "./08.screen.unit/screen.unit";
import GlopUnit from "./09.glop.unit/glop.unit";
import MikuUnit from "./10.miku.unit/miku.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Space from "./00.space.unit/fce/space.interface";
import { SpaceModel } from "./00.space.unit/space.model";
import Babylon from "./01.babylon.unit/fce/babylon.interface";
import { BabylonModel } from "./01.babylon.unit/babylon.model";
import Focus from "./01.focus.unit/fce/focus.interface";
import { FocusModel } from "./01.focus.unit/focus.model";
import Camera from "./02.camera.unit/fce/camera.interface";
import { CameraModel } from "./02.camera.unit/camera.model";
import Geojson from "./02.geojson.unit/fce/geojson.interface";
import { GeojsonModel } from "./02.geojson.unit/geojson.model";
import Hexmap from "./03.hexmap.unit/fce/hexmap.interface";
import { HexmapModel } from "./03.hexmap.unit/hexmap.model";
import Light from "./03.light.unit/fce/light.interface";
import { LightModel } from "./03.light.unit/light.model";
import Primative from "./04.primative.unit/fce/primative.interface";
import { PrimativeModel } from "./04.primative.unit/primative.model";
import Screen from "./08.screen.unit/fce/screen.interface";
import { ScreenModel } from "./08.screen.unit/screen.model";
import Glop from "./09.glop.unit/fce/glop.interface";
import { GlopModel } from "./09.glop.unit/glop.model";
import Miku from "./10.miku.unit/fce/miku.interface";
import { MikuModel } from "./10.miku.unit/miku.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [SpaceUnit,BabylonUnit,FocusUnit,CameraUnit,GeojsonUnit,HexmapUnit,LightUnit,PrimativeUnit,ScreenUnit,GlopUnit,MikuUnit,CollectUnit,BusUnit];

import * as reduceFromSpace from "./00.space.unit/space.reduce";
import * as reduceFromBabylon from "./01.babylon.unit/babylon.reduce";
import * as reduceFromFocus from "./01.focus.unit/focus.reduce";
import * as reduceFromCamera from "./02.camera.unit/camera.reduce";
import * as reduceFromGeojson from "./02.geojson.unit/geojson.reduce";
import * as reduceFromHexmap from "./03.hexmap.unit/hexmap.reduce";
import * as reduceFromLight from "./03.light.unit/light.reduce";
import * as reduceFromPrimative from "./04.primative.unit/primative.reduce";
import * as reduceFromScreen from "./08.screen.unit/screen.reduce";
import * as reduceFromGlop from "./09.glop.unit/glop.reduce";
import * as reduceFromMiku from "./10.miku.unit/miku.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 space : reduceFromSpace.reducer, 
babylon : reduceFromBabylon.reducer, 
focus : reduceFromFocus.reducer, 
camera : reduceFromCamera.reducer, 
geojson : reduceFromGeojson.reducer, 
hexmap : reduceFromHexmap.reducer, 
light : reduceFromLight.reducer, 
primative : reduceFromPrimative.reducer, 
screen : reduceFromScreen.reducer, 
glop : reduceFromGlop.reducer, 
miku : reduceFromMiku.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 space : Space = new SpaceModel();
babylon : Babylon = new BabylonModel();
focus : Focus = new FocusModel();
camera : Camera = new CameraModel();
geojson : Geojson = new GeojsonModel();
hexmap : Hexmap = new HexmapModel();
light : Light = new LightModel();
primative : Primative = new PrimativeModel();
screen : Screen = new ScreenModel();
glop : Glop = new GlopModel();
miku : Miku = new MikuModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}

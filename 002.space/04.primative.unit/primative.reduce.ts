import * as clone from "clone-deep";
import * as Act from "./primative.action";
import { PrimativeModel } from "./primative.model";
import * as Buzz from "./primative.buzzer";
import State from "../99.core/state";

export function reducer(model: PrimativeModel = new PrimativeModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PRIMATIVE:
 return Buzz.updatePrimative(clone(model), act.bale, state);

 case Act.INIT_PRIMATIVE:
 return Buzz.initPrimative(clone(model), act.bale, state);

case Act.READ_PRIMATIVE:
 return Buzz.readPrimative(clone(model), act.bale, state);
 
case Act.WRITE_PRIMATIVE:
 return Buzz.writePrimative(clone(model), act.bale, state);
 
case Act.REMOVE_PRIMATIVE:
 return Buzz.removePrimative(clone(model), act.bale, state);
 
case Act.DELETE_PRIMATIVE:
 return Buzz.deletePrimative(clone(model), act.bale, state);
 
case Act.CREATE_PRIMATIVE:
 return Buzz.createPrimative(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

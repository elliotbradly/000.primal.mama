import * as clone from "clone-deep";
import * as Act from "./library.action";
import { LibraryModel } from "./library.model";
import * as Buzz from "./library.buzzer";
import State from "../99.core/state";

export function reducer(model: LibraryModel = new LibraryModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LIBRARY:
 return Buzz.updateLibrary(clone(model), act.bale, state);

 case Act.TEST_LIBRARY:
 return Buzz.testLibrary(clone(model), act.bale, state);

 case Act.INIT_LIBRARY:
 return Buzz.initLibrary(clone(model), act.bale, state);

case Act.COUNT_LIBRARY:
 return Buzz.countLibrary(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

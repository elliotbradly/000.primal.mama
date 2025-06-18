import * as clone from "clone-deep";
import * as Act from "./time.action";
import { TimeModel } from "./time.model";
import * as Buzz from "./time.buzzer";
import State from "../99.core/state";

export function reducer(model: TimeModel = new TimeModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.NOW_TIME:
      return Buzz.nowTime(clone(model), act.bale, state);

    case Act.UPDATE_TIME:
      return Buzz.updateTime(clone(model), act.bale, state);

    case Act.FORMAT_TIME:
      return Buzz.formatTime(clone(model), act.bale, state);

    case Act.INIT_TIME:
      return Buzz.initTime(clone(model), act.bale, state);

    case Act.READ_TIME:
      return Buzz.readTime(clone(model), act.bale, state);

    case Act.WRITE_TIME:
      return Buzz.writeTime(clone(model), act.bale, state);

    case Act.CREATE_TIME:
      return Buzz.createTime(clone(model), act.bale, state);

    case Act.COMPARE_TIME:
      return Buzz.compareTime(clone(model), act.bale, state);

    case Act.REDUCE_TIME:
      return Buzz.reduceTime(clone(model), act.bale, state);

    case Act.TEST_TIME:
      return Buzz.testTime(clone(model), act.bale, state);


    default:
      return model;
  }
}

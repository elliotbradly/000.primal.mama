import * as clone from "clone-deep";
import * as Act from "./menu.action";
import { MenuModel } from "./menu.model";
import * as Buzz from "./menu.buzzer";
import State from "../99.core/state";

export function reducer(model: MenuModel = new MenuModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_MENU:
      return Buzz.updateMenu(clone(model), act.bale, state);

    case Act.INIT_MENU:
      return Buzz.initMenu(clone(model), act.bale, state);

    case Act.TEST_MENU:
      return Buzz.testMenu(clone(model), act.bale, state);

    case Act.CLOSE_MENU:
      return Buzz.closeMenu(clone(model), act.bale, state);

    case Act.CREATE_MENU:
      return Buzz.createMenu(clone(model), act.bale, state);

    case Act.PRINT_MENU:
      return Buzz.printMenu(clone(model), act.bale, state);

    case Act.PIXEL_MENU:
      return Buzz.pixelMenu(clone(model), act.bale, state);

    case Act.SPACE_MENU:
      return Buzz.spaceMenu(clone(model), act.bale, state);

    case Act.CONTROL_MENU:
      return Buzz.controlMenu(clone(model), act.bale, state);

    case Act.TIME_MENU:
      return Buzz.timeMenu(clone(model), act.bale, state);

    case Act.COLOR_MENU:
      return Buzz.colorMenu(clone(model), act.bale, state);


    default:
      return model;
  }
}

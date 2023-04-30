import {Key} from "./key";

export class KeyShift extends Key{
  protected input(){
    const state = this.state;
    state.data = {
      ...state.data,
      shift: !state.data.shift,
    }
  }
}
import {Key} from "./key";

export class KeyCapsLock extends Key{
  protected input(){
    const state = this.state;
    state.data = {
      ...state.data,
      caps: !state.data.caps,
    }
  }
}
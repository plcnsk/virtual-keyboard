import {Key} from "./key";

export class KeyBackspace extends Key{
  protected input(){
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content.slice(0, -1)
    }
  }
}
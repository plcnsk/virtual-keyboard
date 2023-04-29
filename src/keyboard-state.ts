import Signal from "./common/signal";

interface IKeyboardData {
  content: string;
  langIndex: number;
}

export class KeyboardState {
  private _data: IKeyboardData;
  get data(){
    return this._data;
  }

  set data(value:IKeyboardData){
    this._data = value;
    this.onChange.emit(this._data); 
  }

  constructor (initial:IKeyboardData){
    this._data = initial;
  }

  public onChange = new Signal<IKeyboardData>();
}
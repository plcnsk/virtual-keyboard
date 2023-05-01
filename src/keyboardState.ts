import Signal from "./common/signal";
import board from "./languages/eng";
import board1 from "./languages/rus";

export interface IKeyboardData {
  content: string;
  langIndex: number;
  shift: boolean; 
  caps: boolean; 
}

export class KeyboardState {
  public languages = [
    board,
    board1
  ];

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
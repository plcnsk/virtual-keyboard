import Control from "./common/control";

const board = {
  'Digit1': '1',
  'Digit2': '2',
  'Digit3': '3',
}

export class Keyboard extends Control {
  private output: Output;
  private board: Board;

  constructor(parentNode:HTMLElement){
    super(parentNode);
    this.output = new Output(this.node);
    this.board = new Board(this.node, board, (char)=>{
      this.output.content += char;
    });

    document.addEventListener('keydown', (e)=>{
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e)=>{
      console.log(e.code);
      this.board.handleUp(e.code);

    });
  }
}

export class Key extends Control {
  constructor(parentNode:HTMLElement, data:string, onInput: (char:string)=>void){
    super(parentNode);
    this.node.textContent = data;
    this.node.onmousedown = () => {

    }

    this.node.onmouseup = () => {
      onInput(data);
    }
    
    this.node.onmouseenter = () => {

    }
    
    this.node.onmouseleave = () => {

    }
  }
}

export class Board extends Control {
  private keyMap: Record<string, Key> = {};

  constructor(parentNode:HTMLElement, boardConfig: Record<string, string>, onInput:(char:string)=>void){
    super(parentNode);
    for (let keyCode in boardConfig) {
      const key = new Key(this.node, boardConfig[keyCode], (char)=>{
        onInput(char);
      });
      this.keyMap[keyCode] = key;
    }
  }

  handleDown(keyCode:string){
    const currentKey = this.keyMap[keyCode];
    if(currentKey){
      //currentKey.
    }
  }

  handleUp(keyCode:string){

  }
}

export class Output extends Control {
  private _content: string = '';

  set content(value: string){
    this._content = value;
    this.node.textContent = this._content;
  }

  get content(){
    return this._content;
  }

  constructor(parentNode:HTMLElement){
    super(parentNode);
  }
}


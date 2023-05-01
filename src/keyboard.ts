import Control from "./common/control";
import {Output} from "./output";
import {Board} from "./board";
import {IKeyboardData, KeyboardState} from './keyboardState';
import layout from "./languages/layout";

export class Keyboard extends Control {
  private output: Output;
  private board: Board;
  private langIndex = 0;

  constructor(parentNode:HTMLElement, state:KeyboardState){
    super(parentNode);

    const update = (data: IKeyboardData)=>{
      this.output.content = data.content;
      const currentBoard = state.languages[data.langIndex];
      if (data.shift){
        this.board.setLanguage(currentBoard.shift);
      } else if (data.caps){
        this.board.setLanguage(currentBoard.caps);
      } else {
        this.board.setLanguage(currentBoard.base);
      }
    }
    state.onChange.add(update);
    this.output = new Output(this.node);
    this.board = new Board(this.node, layout, state);

    document.addEventListener('keydown', (e)=>{
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e)=>{
      console.log(e.code);
      this.board.handleUp(e.code);
    });

    update(state.data); 
  }
}
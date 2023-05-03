import Control from "./common/control";

export class Output extends Control {

  set content(value: string){
    this.node.textContent = value;
  }

  constructor(parentNode:HTMLElement){
    super(parentNode, 'div', 'keyboard_output');
  }
}
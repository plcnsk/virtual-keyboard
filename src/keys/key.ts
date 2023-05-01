import Control from "../common/control";
import {KeyboardState} from '../keyboardState';


export class Key extends Control { 
  private data:string;

  constructor(parentNode:HTMLElement, data:string, protected state: KeyboardState){
    super(parentNode, 'div', 'keyboard_key');
    this.data = data;
    this.node.textContent = data;
    this.node.onmousedown = ()=>{
      this.down();
    }

    this.node.onmouseup = ()=>{
      this.input();
      this.up();
    }
    
    this.node.onmouseenter = ()=>{
      this.node.classList.add('keyboard_key__hover');
    }
    
    this.node.onmouseleave = ()=>{
      this.node.classList.remove('keyboard_key__hover');
    }
  }

  handleDown(){
    this.input();
    this.down();
  }

  handleUp(){ 
    this.up();
  }

  protected input(){
    const state = this.state;
    state.data = {...state.data, content: state.data.content + this.data}
  }
  
  protected down(){
    this.node.classList.add('keyboard_key__down');
  }
  
  protected up(){
    this.node.classList.remove('keyboard_key__down');
  }

  setData(data:string){
    this.data = data;
    this.node.textContent = data; 
  }
}
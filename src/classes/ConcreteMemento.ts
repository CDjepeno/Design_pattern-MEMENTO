import { IMemento } from '../interfaces/IMemento';
export class ConcreteMemento implements IMemento {
  state: string 
  date: string 

  constructor(s:string) {
    this.state = s 
    this.date = new Date().toDateString()
  }

  getDate() {
    return this.date
  }

  getState() {
    return this.state
  }

  getName() {
    return `${this.date} / ${this.state}`
  }

}
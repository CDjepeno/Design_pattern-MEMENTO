import { ConcreteMemento } from './ConcreteMemento';
import { IMemento } from '../interfaces/IMemento';
export class Originator {
  state: string 

  constructor(s:string) {
    this.state = s 
  }

  doSomething() {
    this.state = this.generateRandomString(25) 
  }

  generateRandomString(end: number = 10) {
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return str.slice(0, end)
  }

  save() {
    return new ConcreteMemento(this.state)
  }

  restore(m:IMemento) {
    this.state = m.getState()
    return `Mon état à été restaurer avec : ${this.state}`
  }



}
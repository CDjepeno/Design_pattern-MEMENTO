import { IMemento } from '../interfaces/IMemento';
import { Originator } from './Originator';
export class Caretaker {
  mementos: IMemento[] = []

  originator: Originator

  constructor(o: Originator) {
    this.originator = o
  }

  backup() {
    this.mementos.push(this.originator.save())
  }

  undo() {
    if(this.mementos.length) {
      return 
    } 
      const memento = this.mementos.pop()

      if(memento) this.originator.restore(memento)
      
  }

  showHistory() {
    const result = []
    for (const memento of this.mementos) {
      result.push(memento.getName())
    }
    return result
  }

}
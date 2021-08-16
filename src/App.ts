import { Originator } from './classes/Originator';
import { Caretaker } from './classes/Caretaker';
export class App {
  static main() {
    const originator = new Originator('salut-tu-va-bien')
    const caretaker = new Caretaker(originator)

    caretaker.backup()
    originator.doSomething()
    
    caretaker.backup()
    originator.doSomething()

    caretaker.backup()
    originator.doSomething()

    return caretaker.showHistory()
  }

}
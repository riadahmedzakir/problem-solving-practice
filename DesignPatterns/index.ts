import { Caretaker, Originator } from "./memento";
import { ATMMachine } from "./state";

const careTaker: Caretaker = new Caretaker();
const originator: Originator = new Originator();
let currentArticle = -1;

var input1 = "I was walking";
originator.set(input1);
careTaker.addMemento(originator.storeInMemento());
currentArticle++;

var input2 = "I was walking and i saw";
originator.set(input2);
careTaker.addMemento(originator.storeInMemento());
currentArticle++;

var input3 = "I was walking and i saw something";
originator.set(input3);
careTaker.addMemento(originator.storeInMemento());
currentArticle++;


currentArticle--;
const previous: string = originator.restoreFromMemento(careTaker.getMemento(currentArticle));


const atmMachine: ATMMachine = new ATMMachine();
atmMachine.insertCard();
atmMachine.ejectCard();
atmMachine.insertCard();
atmMachine.insertPin(1234);
atmMachine.requestCash(2000);
atmMachine.insertCard();
atmMachine.insertPin(1234);
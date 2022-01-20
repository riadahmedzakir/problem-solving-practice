//##########Note#################
// Context : Maintain a instance of ConcreateState subclasss that defines the current state.
// State : defines an interface for encapsulating the behavior  associated withe the particular state of the context.
// ConcreateState: Each subclass implements a behavior associated with a state of the context.

export interface ATMState {
    insertCard(): void;
    ejectCard(): void;
    insertPin(pinEntered: number): void;
    requestCash(cashToWithdraw: number): void;
}

export class HasCard implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    public insertCard(): void {
        console.log("You can only insert one card at a time");
    }

    public ejectCard(): void {
        console.log("Your card is ejected");
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());

    }

    public requestCash(cashToWithdraw: number): void {
        console.log("You have not entered your PIN");
    }

    public insertPin(pinEntered: number): void {
        if (pinEntered == 1234) {
            console.log("You entered the correct PIN");
            this.atmMachine.correctPinEntered = true;
            this.atmMachine.setATMState(this.atmMachine.getHasPin());
        } else {
            console.log("You entered the wrong PIN");
            this.atmMachine.correctPinEntered = false;
            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());

        }
    }
}

export class NoCard implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    public insertCard(): void {
        console.log("Please enter your pin");
        this.atmMachine.setATMState(this.atmMachine.getYesCardState());
    }

    public ejectCard(): void {
        console.log("You didn't enter a card");
    }

    public requestCash(cashToWithdraw: number): void {
        console.log("You have not entered your card");
    }

    public insertPin(pinEntered: number): void {
        console.log("You have not entered your card");
    }
}

export class HasPin implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    public insertCard(): void {
        console.log("You already entered a card");
    }

    public ejectCard(): void {
        console.log("Your card is ejected");
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    }

    public requestCash(cashToWithdraw: number): void {
        if (cashToWithdraw > this.atmMachine.cashInMachine) {
            console.log("You don't have that much cash available");
            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());
        } else {
            console.log(cashToWithdraw + " is provided by the machine");
            this.atmMachine.setCashInMachine(this.atmMachine.cashInMachine - cashToWithdraw);
            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());
            if (this.atmMachine.cashInMachine <= 0) {
                this.atmMachine.setATMState(this.atmMachine.getNoCashState());
            }
        }
    }

    public insertPin(pinEntered: number): void {
        console.log("You already entered a PIN");
    }
}

export class NoCash implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    public insertCard(): void {
        console.log("We don't have any money");
        console.log("Your card is ejected");
    }

    public ejectCard(): void {
        console.log("We don't have any money");
        console.log("There is no card to eject");
    }

    public requestCash(cashToWithdraw: number): void {
        console.log("We don't have any money");
    }

    public insertPin(pinEntered: number): void {
        console.log("We don't have any money");
    }
}

export class ATMMachine {

    hasCard: ATMState;
    noCard: ATMState;
    hasCorrectPin: ATMState;
    atmOutOfMoney: ATMState;

    atmState: ATMState;

    cashInMachine: number = 2000;
    correctPinEntered: boolean = false;

    constructor() {

        this.hasCard = new HasCard(this);
        this.noCard = new NoCard(this);
        this.hasCorrectPin = new HasPin(this);
        this.atmOutOfMoney = new NoCash(this);

        this.atmState = this.noCard;

        if (this.cashInMachine < 0) {
            this.atmState = this.atmOutOfMoney;
        }

    }

    public setATMState(newATMState: ATMState): void {
        this.atmState = newATMState;
    }

    public setCashInMachine(newCashInMachine: number): void {
        this.cashInMachine = newCashInMachine;
    }

    public insertCard(): void {
        this.atmState.insertCard();
    }

    public ejectCard(): void {
        this.atmState.ejectCard();
    }

    public requestCash(cashToWithdraw: number): void {
        this.atmState.requestCash(cashToWithdraw);
    }

    public insertPin(pinEntered: number): void {
        this.atmState.insertPin(pinEntered);
    }

    public getYesCardState(): ATMState { return this.hasCard; }
    public getNoCardState(): ATMState { return this.noCard; }
    public getHasPin(): ATMState { return this.hasCorrectPin; }
    public getNoCashState(): ATMState { return this.atmOutOfMoney; }

}
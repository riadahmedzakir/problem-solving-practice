//############# Notes ###################//
// Memento - the basic object that is stored in different states
// Originator - Set/gets the currently targeted memento. Creates new memento and assigns values to them.
// Caretaker - Holds all previous versions of the memento. Can store/retrive memeontos.

export class Memento {
    private article: string = '';

    constructor(articleSave: string) {
        this.article = articleSave;
    }

    public getSavedArticle(): string {
        return this.article;
    }
}

export class Originator {
    private article: string = '';

    public set(newArticle: string): void {
        console.log("From Originator: Current Version of Article\n" + newArticle + "\n");
        this.article = newArticle;
    }

    public storeInMemento(): Memento {
        console.log("From Originator: Saving to Memento\n");
        return new Memento(this.article);
    }

    public restoreFromMemento(memento: Memento): string {
        this.article = memento.getSavedArticle();
        console.log("From Originator: Previous Article Saved in Memento\n" + this.article + "\n");
        return this.article;
    }

}

export class Caretaker {
    savedArticles: Memento[] = []

    public addMemento(m: Memento): void {
        this.savedArticles.push(m);
    }

    public getMemento(index: number): Memento {
        return this.savedArticles[index];
    }
} 
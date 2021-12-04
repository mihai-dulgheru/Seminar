// implementați un tip obiectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată.
//  Constructorul primește valoarea inițială a secvenței. Singura metodă este 'next' care calculează următoarea valoare din șir.

class SirCrescator {
    #sir = [];
    constructor(valoareInitiala) {
        this.#sir.push(valoareInitiala);
    }
    get next() {
        this.#sir.push(this.#sir[this.#sir.length - 1] + 2);
        return this.#sir;
    }
}

let sirCrescator = new SirCrescator(4);
console.log(sirCrescator.next);
console.log(sirCrescator.next);
console.log(sirCrescator.next);

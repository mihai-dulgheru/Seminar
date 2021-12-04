// implementați următoarea structură de tipuri. Software este un tip care are metoda 'run'. 
// Browser moștenește Software și poate adăuga și instala Plugin. Un Browser poate avea multiple Plugin.;
class Software {
    run() {
        console.log('the software is running');
    }
}

class Plugin {
    #name;
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}

class Browser extends Software {
    #addedPlugins;
    constructor() {
        super();
        this.#addedPlugins = [];
    }

    #install(plugin) {
        console.log(`the plugin ${plugin.name} has been installed`);
    }

    add(plugin) {
        if (!this.#addedPlugins.includes(plugin)) {
            this.#addedPlugins.push(plugin);
            this.#install(plugin);
        }
    }

    showPlugins() {
        console.log("Plugins:");
        for (const plugin of this.#addedPlugins) {
            console.log(plugin.name);
        }
    }
}

const s = new Software();
s.run();
const p1 = new Plugin('Adobe Acrobat');
const p2 = new Plugin('Adobe Flash');
const b = new Browser();
b.add(p1);
b.add(p2);
b.add(p2);
b.showPlugins();

export default class Kartya {
    #kep = "";
    #allapot = true; 
    #szuloElem;
    #kepElem;
    #kattinthato=true;
    constructor(kep, szuloElem) {
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#allapot = false;
        this.#megjelenit()
        this.#kepElem = this.#szuloElem.children("div:last-child").children("img")

        this.#kepElem.on("click", () => {
            this.setAllapot(true)
            this.#trigger("kapcsol")
        })
    }

    #trigger(esemenynev) {
        const e = new CustomEvent(esemenynev, { detail: this.#kep })
        window.dispatchEvent(e)

    }

    #megjelenit() {
        let txt = `
            <div class="card col-sm-3">
                <img src="kepek/hatter.jpg" alt="memóriajáték kiskép">
            </div>
        `
        this.#szuloElem.append(txt)
    }
    setAllapot(ertek) {
        if (ertek == true || ertek == false) {
            this.#allapot = ertek
            this.#felfordit()
        }

    }
    #felfordit() {
        if (this.#allapot) {
            this.#kepElem.attr("src", this.#kep)
        } else {
            this.#kepElem.attr("src", "kepek/hatter.jpg")
        }

    }

}
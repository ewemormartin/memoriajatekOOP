export default class Kartya{
        /* Megjeleniti a képet és ha képre katt akkor meg tud fordulni.
            Eltud rejtozni ha ketto egyformat kattintottunk. */
    #kep="";
    #allapot=true; // true akkor lathato, false akkor háttér
    #szuloElem;
    constructor(kep, szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem;
        this.#allapot=false;
        this.megjelenit()

    }
    megjelenit(){
        let txt=`
                <div class="card col-sm 3">
                    <img src="${this.#kep}" alt="kép">
                </div>
        `
        this.#szuloElem.append(txt);
    }

    felfordit(){

    }

}
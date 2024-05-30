export default class Kartya{
        /* Megjeleniti a képet és ha képre katt akkor meg tud fordulni.
            Eltud rejtozni ha ketto egyformat kattintottunk. */
    #kep="";
    #allapot=true; // true akkor lathato, false akkor háttér
    #szuloElem;
    #kepElem;
    constructor(kep, szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem;
        this.#allapot=false;
        this.megjelenit()
        this.#kepElem=this.#szuloElem.childred("div:last-child").childred("img")
        this.#kepElem.on("click",()=>{
            this.setAllapot(true)
        })

    }
    megjelenit(){
        let txt=`
                <div class="card col-sm-3">
                    <img src="kepek/hatter.jpg" alt="">
                </div>
        `
        this.#szuloElem.append(txt);
    }
    setAllapot(ertek){
        if (ertek==true || ertek ==false) {
            this.#allapot = ertek
            this.felfordit();
        }
        
    }

    felfordit(){
        if (this.#allapot) {
            this.#kepElem.attr("src",this.#kep)
        }else{
            this.#kepElem.attr("src", "kepek/hatter.jpg")
        }
    }

}
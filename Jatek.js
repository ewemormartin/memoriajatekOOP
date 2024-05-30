import Kartya from "./Kartya.js";

export default class Jatek{
    #KEPLISTA=[]
    constructor(KEPLISTA){
        
        this.#KEPLISTA=KEPLISTA;
        this.jatekterOsszeallit();
    }
    jatekterOsszeallit(){
        this.#KEPLISTA.forEach((elem)=>{
            new Kartya(elem,$(".jatekter"))
        })
    }

}
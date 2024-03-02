class heroiGenerico {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    definir(){
        let ataqueHeroi
        if (this.tipoHeroi == "mago") {
            ataqueHeroi = "magia"
        } else if (this.tipoHeroi == "guerreiro") {
            ataqueHeroi = "armas"
        }  else if (this.tipoHeroi == "monge") {
            ataqueHeroi = "artes marciais"
        } else if (this.tipoHeroi == "ninja") {
            ataqueHeroi = "shuriken"
        }
        console.log(`${this.nomeHeroi} atacou usando ${ataqueHeroi}`)
    }
}

let heroiUm = new heroiGenerico("Jason","21","guerreiro")
let heroiDois = new heroiGenerico("Karl","80","ninja")
let heroiTres = new heroiGenerico("Mary","31","mago")
let heroiQuatro = new heroiGenerico("Master","44","monge")

heroiUm.definir()
heroiDois.definir()
heroiTres.definir()
heroiQuatro.definir()
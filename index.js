class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque = this.type
        
        switch(true) {
            case ataque == "mago":
                console.log("O " + this.type + " atacou usando magia");
                break
            case ataque == "guerreiro":
                console.log("O " + this.type + " atacou usando espada");
                break
            case ataque == "monge":
                console.log("O " + this.type + " atacou usando artes marciais");
                break
            case ataque == "ninja":
                console.log("O " + this.type + " atacou usando shuriken");
                break
            default:
                console.log("não encontrado");
        }

    }

}
let hero1 = new hero("jose", 23, "monge")

hero1.atacar()

        






 





class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não possui um ataque definido';
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Aragorn', 30, 'guerreiro');
const monge = new Heroi('londinchan', 50, 'monge');
const ninja = new Heroi('Raruto', 25, 'ninja');

mago.atacar("o mago atacou usando magia");      
guerreiro.atacar("o guerreiro atacou usando espada");  
monge.atacar("o monge atacou usando artes marciais");      
ninja.atacar("o ninja atacou usando shuriken");  
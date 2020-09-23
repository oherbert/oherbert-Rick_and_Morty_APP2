module.exports = class Personagem {
    constructor(name, status, gender, image, episode) {
        this.name = name;
        this.image = image;
        this.episode = episode;

        if (status === "Alive") this.status = "Vivo";
        else if (status === "Dead") this.status = "Morto";
        else this.status = "Desconhecido";

        if (gender === "Male") this.gender = "Masculino";
        else if (gender === "Female") this.gender = "Feminino";
        else this.gender = "Desconhecido";


    }
}
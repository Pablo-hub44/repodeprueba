class Animal {


    constructor(raza, color, edad, origen) {
        this.raza = raza;
        this.color = color;
        this.edad = edad;
        this.origen = origen;
    }


    verInfoDeanimal() {
        return console(this.raza, this.color, this.edad, this.origen)
    }
}

perro = new Animal("crestado chino", "blanco", 12, "mexicano");

perro.verInfoDeanimal();
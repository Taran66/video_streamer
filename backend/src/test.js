class Animal{
    constructor(){

    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        this.name = name,
        this.age = age,
        this.runSpeed = runSpeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        this.name = name,
        this.age = age,
        this.flySpeed = flySpeed
    }
}

class Fist extends Animal{
    constructor(name, age, swimSpeed){
        this.name = name,
        this.age = age,
        this.swimSpeed = swimSpeed
    }
}

const fish = new Fish("fish", 10, 24)
const hawk = new Fish("hawk", 10, 24)
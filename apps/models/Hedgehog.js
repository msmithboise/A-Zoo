class Hedgehog {

    constructor(
        name,
        gender,
        age,
        color,
        hasQuills = true,
        gottaGoFast = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasQuills = hasQuills || " "
        this.gottaGoFast = gottaGoFast || false
    


    };
}

export default Hedgehog
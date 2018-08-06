class Yak {

    constructor(
        name,
        gender,
        age,
        color,
        hasHorns = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
       this.hasHorns = hasHorns || false

    };
}

export default Yak
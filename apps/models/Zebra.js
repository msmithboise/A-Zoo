class Zebra {

    constructor(
        name,
        gender,
        age,
        color,
        hasStripes = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasStripes = hasStripes || false

    };
}

export default Zebra
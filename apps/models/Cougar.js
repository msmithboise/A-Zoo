class Cougar {

    constructor(
        name,
        gender,
        age,
        color,
        hasTeeth = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasTeeth = hasTeeth || false

    };
}

export default Cougar
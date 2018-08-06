class Jaguar {

    constructor(
        name,
        gender,
        age,
        color,
        hasSpots = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasSpots = hasSpots || false

    };
}

export default Jaguar
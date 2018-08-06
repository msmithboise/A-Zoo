class Giraffe {

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
        this.spotted = hasSpots || false

    };
}

export default Giraffe
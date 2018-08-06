class Rabbit {

    constructor(
        name,
        gender,
        age,
        color,
        canHop = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.canHop = canHop || false

    };
}

export default Rabbit
class Quail {

    constructor(
        name,
        gender,
        age,
        color,
        canFly = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.canFly = canFly || false

    };
}

export default Quail
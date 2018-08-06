class Unicorn {

    constructor(
        name,
        gender,
        age,
        color,
        exists = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.exists = exists || false

    };
}

export default Unicorn
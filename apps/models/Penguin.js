class Penguin {

    constructor(
        name,
        gender,
        age,
        color,
        canSwim = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.canSwim = canSwim || false

    };
}

export default Penguin
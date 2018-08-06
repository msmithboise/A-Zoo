class Snake {

    constructor(
        name,
        gender,
        age,
        color,
        length
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.length = length || 0
    };
}

export default Snake
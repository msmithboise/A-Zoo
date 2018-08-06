class Turtle {

    constructor(
        name,
        gender,
        age,
        color,
        shellColor
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.shellColor = color || " "

    };
}

export default Turtle
class Flamingo {

    constructor(
        name,
        gender,
        age,
        color,
        height
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.height = height || 0

    };
}

export default Flamingo
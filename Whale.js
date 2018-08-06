class Whale{

    constructor(
        name,
        gender,
        age,
        color,
        weight
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.weight = weight || " "

    };
}

export default Whale
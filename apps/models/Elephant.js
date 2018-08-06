class Elephant {

    constructor(
        name,
        gender,
        age,
        color,
        wieght,
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.wieght = wieght || 0

    };
}

export default Elephant
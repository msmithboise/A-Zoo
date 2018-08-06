class Bear {

    constructor(
        name,
        gender,
        age,
        color,
        hasClaws = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasClaws = hasClaws || false

    };
}

export default Bear
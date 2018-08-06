class Xrayfish {

    constructor(
        name,
        gender,
        age,
        color,
        fins
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.fins = fins || " "

    };
}

export default Xrayfish
class Impala {

    constructor(
        name,
        gender,
        age,
        color,
        hasAntlers = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.hasAntlers = hasAntlers || false

    };
}

export default Impala
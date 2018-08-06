class Koala {

    constructor(
        name,
        gender,
        age,
        color,
        canClimb = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.canClimb = canClimb || true

    };
}

export default Koala
class Owl{

    constructor(
        name,
        gender,
        age,
        color,
       canRead = true
    ) {

        this.id = Math.random()
        this.name = name || " "
        this.gender = gender || " "
        this.age = age || 0
        this.color = color || " "
        this.canRead =  canRead || false

    };
}

export default Owl
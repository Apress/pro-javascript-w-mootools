Person: class {

    // Properties
    name := ""
    age  := 0


    // Methods
    init: func (name: String, age: Int) {
        this name = name
        this age = age
    }

    log: func {
        printf("%s, %d", this name, this age)
    }

}

// Creating a new Person instance
mark := Person new("Mark", 23)
mark log() // "Mark, 23"


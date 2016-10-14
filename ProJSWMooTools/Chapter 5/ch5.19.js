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

    // Static Property
    count := static 0

    // Static Methods
    addPerson: static func {
        Person count += 1
    }

    getCount: static func {
        printf("Person count: %d", Person count)
    }

}

// Creating a new Person instance
mark := Person new("Mark", 23)
mark log() // "Mark, 23"

// Accessing the static method
Person addPerson()
Person getCount() // "Person count: 1"

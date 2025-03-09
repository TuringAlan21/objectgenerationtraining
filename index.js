'use strict'

const myIterable = {
    from: 11,
    to: 10,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;

                if(this.from > this.to) {
                    throw new Error("The first number is greater than the last one!")
                } else if(this.from === undefined || this.to === undefined){
                    throw new Error('numbers not specified')
                } else if(typeof this.from !== "number" || typeof this.to !== "number"){
                    throw new Error('values are not numbers')
                }

                return {
                    next() {
                        if(current <= last) {
                            return { value: current++, done: false };
                        } else {
                            return {done: true};
                        }
                    }
                }

            }
        };



for(let item of myIterable) {
    console.log(item);
}



    function personBio(name, age) {
        return {name, age}
    }

    console.log(personBio("Lasha", 23))

    function assignObj(hobby, likes){
        let info = Object.assign({}, {hobby, likes})
        return info
    }
    console.log(assignObj('Football', "Music"));

    function createObj(work, education){
        return Object.create({}, {
            work: {value: work, enumerable:true},
            education: {value: education, enumerable:true}
        })
    }
    console.log(createObj("Translator", "BA"))


    function Person(lastName, residence){
        this.lastName = lastName
        this. residence = residence
    }

    function createWithConstructor(lastName, residence){
        return new Person(lastName, residence)
    }
    console.log(createWithConstructor("Chachua", "Samtredia"))

    



export default class Person{

    name: string
    age: number

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    introduce(){
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`
    }

    printIntroduce(){
        console.log(this.introduce())
    }
    
}
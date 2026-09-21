class student{
    constructor(){
        console.log("Hello")
    }
}
class Tanishque extends student{
    constructor(){
        super()
        console.log("Hi")
    }
    static name=['Tanishque']
}
console.log(Tanishque.name)
let obj=new Tanishque()
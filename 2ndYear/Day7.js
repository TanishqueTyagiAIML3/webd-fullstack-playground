// class student{
//     constructor(hi){
//         console.log(hi)
//     }
//     name1(){
//         console.log("Vikas")
//     }
// }
// class Tanishque extends student{
//     constructor(){
//         super("Hello")
//         console.log("Hi")
//     }
//     static name=['Tanishque']
//     name1(){
//         for(let i in this.name)
//             console.log(i)
//     }
// }
// console.log(Tanishque.name)
// let obj=new Tanishque()
// obj.name1()
class Employee{
    name="";id=0;basic=0;
    constructor(name,id,basic) {
        this.name=name;
        this.id=id;
        this.basic=basic;
    }
    calculate(){
        return this.basic
    }
}
class Manger extends Employee{
    add=0
    constructor(update,name,id,bsd)
    {
        super(name,id,bsd)
        this.add=update
    }
    calculate(){
        return this.basic+this.add
    }
}
let obj=new Manger(123,"Tanishque",12,9000)
console.log("Update Salary",obj.calculate())

function name(show)
{
    console.log("Hello")
    setTimeout(()=>{console.log("Sarthak")},3000)
    show()
}
name(()=>{
    console.log("Tanishque")
})

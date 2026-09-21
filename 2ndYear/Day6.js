// class num{
//     public
//     name=""
//     constructor(val){
//         this.name+=val
//     }
//     show=()=>{
//         console.log("My name is",this.name)
//     }
// }
// let obj=new num("Tanishque")
// obj.show()
// class name{
//     constructor(){
//         console.log("Hello")
//     }
// }
// class secA extends name{
//     name=""
//     roll_no=0
//     add=""
//     M_no=0
//     constructor(n,r,a,m){
//         super()
//         this.name=n
//         this.roll_no=r
//         this.add=a
//         this.M_no=m
//     }
//     show=()=>{
//         console.log(this.name,this.roll_no,this.add,this.M_no)
//     }
// }
// let obj=new secA("Tanishque",59,"L-374 Sec-23",9310300737)
// obj.show()
// class tanishque{
//     static count=0
//     name=""
//     constructor(m){
//        tanishque.count=tanishque.count+1
//        this.name=this.name+(m)
//     }
//     show=()=>{
//         console.log(tanishque.count)
//         console.log(this.name)
//     }
// }
// let obj=new tanishque("Tanishque")
// let obj2=new tanishque("Sarthak")
// obj.show()
// class student{
//     static count=0
//     static func=()=>{
//         student.count+=1
//         console.log(student.count)
//     }
//     func2=()=>{
//         console.log("Hi")
//     }
// }
// let obj=new student()
// student.func()//static method call without object
// obj.func2()
class university{
    rol=0;na="";mark=0;
    static count=0
    constructor(roll,name,marks)
    {
        this.rol=roll
        this.na=name
        this.mark=marks
        university.count+=1
    }
    displayResult=()=>{
        console.log(`Student ${this.na}`)
        console.log(`Roll no ${this.rol}`)
        if(this.mark>60)
            console.log("Pass")
        else
            console.log("Fail")
    } 
    show=()=>{
        console.log(`Students are ${university.count}`)
    }
}
let obj=new university(25,"Tanishque",90)
obj.displayResult()
let obj2=new university(12,"Sarthak",30)
obj.show()

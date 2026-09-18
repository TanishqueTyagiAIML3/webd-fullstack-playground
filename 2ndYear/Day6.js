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
class student{
    static func=()=>{
        console.log("HellO")
    }
    func2=()=>{
        console.log("Hi")
    }
}
let obj=new student()
student.func()//static method call without object
obj.func2()
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
class secA{
    name=""
    roll_no=0
    add=""
    M_no=0
    constructor(n,r,a,m){
        this.name=n
        this.roll_no=r
        this.add=a
        this.M_no=m
    }
    show=()=>{
        console.log(this.name,this.roll_no,this.add,this.M_no)
    }
}
let obj=new secA("Tanishque",59,"L-374 Sec-23",9310300737)
obj.show()
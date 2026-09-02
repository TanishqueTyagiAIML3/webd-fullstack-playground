let obj={
    name:'Tanishque Tyagi',
    id:101,
    display:function(){
        console.log("My name",this.name)
    },
    frind:"Sarthak Srivastava",
    show:function(){
        console.log(this.frind);
    }
}
obj.display()
let emply={
    name:"Rahul",
    Salary:15000,
    update:function(amt){
        this.Salary=this.Salary+amt;
    },
    display:function(){
        console.log("Name",this.name)
        console.log("Update Salary",this.Salary)
    },
}
emply.display();

let student={
    name:"Tanishque",
    marks:70,
    add:function(m1,m2,m3,m4,m5){
        this.marks=this.marks+(m1+m2+m3+m4+m5)
    },
    display:function(){
        console.log("Name",this.name)
        console.log("Marks",this.marks)
    },
}
student.add(1,3,4,5,2)
student.display()

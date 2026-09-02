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
        console.log("Update Salary",this.Salary)
    },
}
emply.update(100)
emply.display();
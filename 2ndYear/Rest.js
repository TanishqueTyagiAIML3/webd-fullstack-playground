function number(...numbers)
{
    let total=0;
    console.log(typeof(numbers));
    for(let i of numbers)
        total=total+i;
    console.log(total);
}
number(1,23,4)
 console.log("Sum is ",name("Tanishque Tyagi",1,13,4))
function name(n,...num){
    console.log("Hello ",n.slice(0,9))
    let sum=0;
    for(let each_val of num){
        sum=sum+each_val;
    }
    return sum
}

function number(...numbers)
{
    let total=0;
    console.log(typeof(numbers));
    for(let i of numbers)
        total=total+i;
    console.log(total);
}
number(1,23,4)

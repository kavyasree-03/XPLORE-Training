//nested function
/*function outerFun(){
    console.log("Outer function");
    let a=10;
    function innerFun(){
        console.log("Inner function");
        console.log(a);
    }
    innerFun(); 
}
outerFun();
/*output :
    Outer function
    Inner function
    10*/

function outerFun(){
    console.log("Outer Executing.........");
    let a=10;
    function innerFun(){
        console.log("Inner Executing.........");
        return a++;
    }
    return innerFun(); 
}
let res=outerFun();
console.log(res);
console.log(res);
console.log(res);



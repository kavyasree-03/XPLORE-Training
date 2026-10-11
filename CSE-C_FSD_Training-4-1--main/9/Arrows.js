let obj={
    name:"Mohana",
    age:20,
    /*fun:()=>{
        console.log(this.age);
    }*///undefined value for arrows function cause
    //anonymous function
   fun:function(){
    console.log(this.age);
   }
}
obj.fun()
let arrowfun=()=>{
    let a=10;
    console.log("this is arrow");
    console.log(a);
}
arrowfun();
arrowfun();
//Arrow function with parameters
const loginDetails=(username,password)=>
{
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
}
loginDetails();//undefined
let res=loginDetails("admin@123","admin@124");
console.log(res);
//Nested Fun
function outerfun(){
    let a=10;
    function innerfun()
    {
        console.log("Inner fun");
        return a++;
        //console.log(a);
    }
    return innerfun;
    //innerfun();
}
let result=outerfun();
console.log(result());
console.log(result());

//IR Return function:Any functions accept another function as a parameter
function Homepage(){
    console.log("This is homepage");
}
function Loginpage(){
    console.log("Use login Successfully");
}
function Registerpage(){
    console.log("Use registered Successfully");
}
Homepage(Registerpage(),Loginpage())//homepage is irreturn function
//callback function
function hlo(setvalues,getvalues)
{
    setvalues();
    getvalues();
}
//call back fun
//any Functions that will be passed as a parameter to the irr function that we called as a callback functions
//generator function
function* generator()
{
    yield a=10;
    yield b=20;
    console.log("This is generator Function");
}
let result1=generator();
console.log(result1.next().value);
console.log(result1.next().value);
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());
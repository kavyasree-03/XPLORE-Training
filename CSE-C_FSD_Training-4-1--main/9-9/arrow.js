let arrFun=()=>console.log("This is the arrow fucntion"); //declaration of arrow function
arrFun();
arrFun();
arrFun();
arrFun(); //output: This is the arrow fucntion 4 times

let arr=()=>{
    let a=10;
    console.log("VAlue");
    console.log(a);
}
arr();

//arrow function in case of using the this keyword
let obj={
    name:"sai",
    age:20,
    fun:function(){ //anonymous function
        //console.log(this); //output: {}
        console.log(this.age);
    }
}
obj.fun(); //output: 20


//arrow fuction with parameters
const login=(username,password)=>{
    console.log(`Username is ${username}`);
    console.log(`password is ${password}`);
    return "login successfull"; //
}
login();//output: Username is undefined password is undefined
login("sai","1234"); //output: Username is sai password is 1234
let res=login("sai","1234"); //output: Username is sai password is 1234
console.log(res);
console.log(login("sai","1234")); //output: login successfull
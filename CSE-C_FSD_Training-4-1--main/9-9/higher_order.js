function HomePage(){
    console.log("This is HomePage");
}
function LoginPage(){
    console.log("User login successful");
}
function RegisterPage(){
    console.log("User register successful");
}
HomePage(RegisterPage(),LoginPage()); //callback function
/*output:
User register successful
User login successful
This is HomePage
*/


//next level
function display(setValues,getValues){
    setValues();
    getValues();
}
display(()=>{});
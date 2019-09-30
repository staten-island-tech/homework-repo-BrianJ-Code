//Global Scope vs Function Scope:
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope:',a, b, c);
    //Within the function scope a b and c are different variables than the ones defined in global
}

//Block Scope
if(true)(
    var a = 4;
    let b = 5;
    const c = 6; 
    console.log('If Scope:', a, b, c);
    // let and const can be modified within the global scope but not var and this causes issues
)
for(let a = 0; a < 10; a++){ //var and let differences var returns 10, let returns the original value
    console.log('Loop: ${a}');

}
console.log('Global Scope: ',a, b, c);


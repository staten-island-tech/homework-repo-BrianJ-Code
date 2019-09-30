//Function Template"
function something(){ //inside the paranthesis are parameters which specifies the variables used in the function
    if() 
    return //return halts the function and returns the value whether it be a string or number
}

console.log(something()); //so the function will run and hits return, here we are allowing the broswer to display its value

//Variable designated function:
const square = function(x = 3){
    return x*x;
}
console.log(square());

//IIFEs = A function you declare and run immediately:
(function(name){ 
    console.log('Hello' + name);
})(Brad); 

//Method = Function within a Object

const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(){}
        console.log('Edit todo ${id}'); 
}
todo.delete = function(){
    console.log('Delete todo...')
}
todo.add();
todo.edit();
todo.delete();
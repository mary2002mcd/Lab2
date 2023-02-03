//return the lenght of a given string
function string_length(value: string):number{
    return value.length;
}
//output to console 
console.log("The length of string is: "+string_length("Hi There!"));

//length with no space
function without_space(value:string):number{
    return value.replace(" ", "").length;
}

console.log("The length of string is: "+without_space("Hi There!"));

//combination of last 2 functions
function optional_space(value:string, spaces?:boolean):number{
    if(spaces){
        return value.length;
    }
    else{
        return value.replace(" ", "").length;
    }
}

console.log("The length of string is: "+optional_space("Hi There!",true));
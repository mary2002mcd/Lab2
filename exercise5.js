//return the lenght of a given string
function string_length(value) {
    return value.length;
}
//output to console 
console.log("The length of string is: " + string_length("Hi There!"));
//length with no space
function without_space(value) {
    return value.replace(" ", "").length;
}
console.log("The length of string is: " + without_space("Hi There!"));
//combination of last 2 functions
function optional_space(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("The length of string is: " + optional_space("Hi There!", true));

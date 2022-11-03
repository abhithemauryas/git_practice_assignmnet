let string= "naman"
function reverse (string){
    let bag=''
    for (let i= string.length-1; i>=0; i--){
        bag+=string[i];
    } 
    return bag;
}
let reversed=reverse (string);
if reversed ==reversed){
    console.log("palindrome");
}else{
console.log("NA");

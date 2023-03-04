function factorial(num){
    for(var i = 1; i <= num; i++){
        var fact=1;
         console.log(i);

        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}
function factorialRecursive(num){
    if (num==1){
        return 1;
    }else{
        console.log(num, num -1);
        return num *factorialRecursive(num - 1);
    }
}
var result= factorial(5);
console.log (`result`,result);
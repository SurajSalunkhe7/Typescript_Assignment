function main() {
    var No = 5; // local variable of main function named as No
    var Pi = 3.14; // local variable of main function named as Pi
    var Ans = 0; // local variable of main function named as Ans
    Ans = Area(No, Pi); // Function call with passing two arguments
    console.log("Area is : " + Ans); // console which is used to print data on scren 
    // + operater is used to concate the string
}
function Area(value1, value2) {
    var Ret = 0; // local variable of Area function
    Ret = value1 * value1 * value2;
    return Ret; // return value of function
}
main(); // Function Call

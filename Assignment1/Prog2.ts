function main():void    // main is a function which returns nothing 
{
    var No:number = 5;      // local variable of main function named as No
    var Pi:number = 3.14;   // local variable of main function named as Pi
    var Ans:number = 0;     // local variable of main function named as Ans

    Ans = Area(No , Pi);            // Function call with passing two arguments

    console.log("Area is : " + Ans); // console which is used to print data on scren 
                                    // + operater is used to concate the string
}

function Area(value1:number , value2:number):number // function defination 
//Area function containas two parameters as value1 , value2

{
    var Ret:number = 0;     // local variable of Area function

    Ret = value1 * value1 * value2;

    return Ret;     // return value of function
}

main();     // Function Call
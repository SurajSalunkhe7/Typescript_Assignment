function main():void
{
    var No1:number = 23;
    var No2:number = 89;
    var No3:number = 6;
    var Ans:number = 0;

    Ans = Maximum(No1 , No2, No3);
    console.log("Maximum number is : " + Ans);
}

function Maximum(value1:number , value2:number , value3:number):number
{
    if(value1 > value2 && (value1 > value3))
    {
        return value1;
    }
    else if(value2 > value1 && (value2 > value3))
    {
        return value2;
    }
    else
    {
        return value3;
    }
}

main();
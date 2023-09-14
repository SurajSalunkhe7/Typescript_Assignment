function Summation():number
{
    var Arr:number[] = [23 , 6 ,7, 4, 5, 7];

    var Ans:number = 0;
    var iCnt:number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        Ans = Arr[iCnt] + Ans;
    }
    return Ans;
}

function main():void
{
    var Ret:number = 0;

    Ret = Summation();
    console.log("Addition is : " + Ret);
}

main();
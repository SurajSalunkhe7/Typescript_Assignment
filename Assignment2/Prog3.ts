function SecondMAx():number
{
    var Arr:number[] = [23 , 89, 6, 29, 56, 45, 77, 32];
    var Max:number = 0;
    var SecdMax:number = 0;
    var iCnt:number = 0;

    if(Arr[0] > Arr[1])
    {
        Max = Arr[0];
        SecdMax = Arr[1];
    }
    else 
    {
        Max = Arr[1];
        SecdMax = Arr[0];
    }

    for(iCnt = 2; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > Max)
        {
            Max = Arr[iCnt];
            SecdMax = Max;
        }
        else if(Arr[iCnt] > SecdMax)
        {
            SecdMax = Arr[iCnt];
        }
    }
    return SecdMax;
}

function main():void
{
    var Ret:number = 0;

    Ret = SecondMAx();

    console.log("Second Max Number is : " + Ret);
}

main();

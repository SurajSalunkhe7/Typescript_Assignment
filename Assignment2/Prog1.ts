function Maximum():number
{
    var Arr:number[] = [23 , 89 ,6 , 29, 56, 45, 77, 32];
    var iCnt:number = 0;
    var Ans:number = 0;
    var temp:number = Arr[0];

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > temp)
        {
            temp = Arr[iCnt];
        }
    }

    return temp;
}

function main():void
{
    var Ret:number = 0;

    Ret = Maximum();

    console.log("Maximum Number Of Array is : " + Ret);
}

main();
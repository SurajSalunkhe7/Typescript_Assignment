function main():void
{
    var No:number = 5;
    var bRet:boolean = false;

    bRet = CheckPrime(No);

    if(bRet == true)
    {
        console.log(No + " is Prime Number");
    }
    else
    {
        console.log(No + " is Not Prime Number");
    }
}

function CheckPrime(value:number):boolean
{
    var iCnt:number = 0;
    var temp:number = 0;

    for(iCnt = 2; iCnt <= value; iCnt++)
    {
        if((value % iCnt)==0)
        {
            temp = iCnt;
            break;
        }
    }
    if(temp == value)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();
function main():void
{
    var No:number = 20;

    Displya(No);
}

function Displya(value:number):void
{
    var iCnt:number = 0;

    for(iCnt = 1; iCnt <= value/2; iCnt++)
    {
        if((value % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

main();
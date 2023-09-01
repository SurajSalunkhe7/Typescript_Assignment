function main():void
{
    var No:number = 21;

    DisplyaFibonacci(No);
}

function DisplyaFibonacci(value:number):void
{
    var iCnt:number = 0;
    var No1:number = 0;
    var No2:number = 1;
    var No3:number = 0;

    for(iCnt = 1; iCnt <= value; iCnt++)
    {
        No3 = No1 + No2;
        console.log(No3);

        No1 = No2; 
        No2 = No3;

        if(No3 == value)
        {
            break;
        }
    }
}

main();
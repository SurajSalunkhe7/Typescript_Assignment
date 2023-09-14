function main()
{
    var No:number = 153;
    var bRet:boolean = false;

    bRet = CheckArmstrong(No);

    if(bRet == true)
    {
        console.log(No + " Is Armstrong Number");
    }
    else
    {
        console.log(No + " Is Not Armstrong Number");
    }
}

var CheckArmstrong = (value:number):boolean=>
{
    var temp:number = value;
    var isum:number = 0;
    var r:number = 0;
    var x:number = 0;

    while(value != 0)
    {
        r = value % 10;
        x = (r * r * r);
        isum = isum + x;
        value = Math.floor(value /10);
    }
    console.log(isum)
    if(isum == temp)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();
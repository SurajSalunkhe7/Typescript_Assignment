var str1 : string = "Pune Kothrud Marvellous Infosystem";
var str2 : string = "Marvellous";
var res : number = 0;

res = Chkstr(str1,str2);

if(res == -1)
{
    console.log("String contains Marvellos in it.");
}
else
{
    console.log("String does not contains Marvellos in it.");
}
        
function Chkstr(cstr1 : string,cstr2 : string)
{
    var first : number = cstr1.length;
    var second : number = cstr2.length;
    var i : number  = 0;
    var j : number = 0;

    for(i = 0 ; i <= second-first ; i++)
    {
        for(j = 0 ; j < first ; j++)
        {
            if(cstr2[i + j] != cstr1[j])
            {
                break
            }

            if(j == second)
            {
                return i;
            }
        }
    }
    return -1;

}
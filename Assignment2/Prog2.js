function Summation() {
    var Arr = [23, 6, 7, 4, 5, 7];
    var Ans = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        Ans = Arr[iCnt] + Ans;
    }
    return Ans;
}
function main() {
    var Ret = 0;
    Ret = Summation();
    console.log("Addition is : " + Ret);
}
main();

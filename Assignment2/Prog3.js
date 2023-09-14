function SecondMAx() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var Max = 0;
    var SecdMax = 0;
    var iCnt = 0;
    if (Arr[0] > Arr[1]) {
        Max = Arr[0];
        SecdMax = Arr[1];
    }
    else {
        Max = Arr[1];
        SecdMax = Arr[0];
    }
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Max) {
            Max = Arr[iCnt];
            SecdMax = Max;
        }
        else if (Arr[iCnt] > SecdMax) {
            SecdMax = Arr[iCnt];
        }
    }
    return SecdMax;
}
function main() {
    var Ret = 0;
    Ret = SecondMAx();
    console.log("Second Max Number is : " + Ret);
}
main();

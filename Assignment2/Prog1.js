function Maximum() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var iCnt = 0;
    var Ans = 0;
    var temp = Arr[0];
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > temp) {
            temp = Arr[iCnt];
        }
    }
    return temp;
}
function main() {
    var Ret = 0;
    Ret = Maximum();
    console.log("Maximum Number Of Array is : " + Ret);
}
main();

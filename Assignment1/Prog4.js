function main() {
    var No = 5;
    var bRet = false;
    bRet = CheckPrime(No);
    if (bRet == true) {
        console.log(No + " is Prime Number");
    }
    else {
        console.log(No + " is Not Prime Number");
    }
}
function CheckPrime(value) {
    var iCnt = 0;
    var temp = 0;
    for (iCnt = 2; iCnt <= value; iCnt++) {
        if ((value % iCnt) == 0) {
            temp = iCnt;
            break;
        }
    }
    if (temp == value) {
        return true;
    }
    else {
        return false;
    }
}
main();

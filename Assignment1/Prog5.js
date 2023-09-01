function main() {
    var No = 21;
    DisplyaFibonacci(No);
}
function DisplyaFibonacci(value) {
    var iCnt = 0;
    var No1 = 0;
    var No2 = 1;
    var No3 = 0;
    for (iCnt = 1; iCnt <= value; iCnt++) {
        No3 = No1 + No2;
        console.log(No3);
        No1 = No2;
        No2 = No3;
        if (No3 == value) {
            break;
        }
    }
}
main();

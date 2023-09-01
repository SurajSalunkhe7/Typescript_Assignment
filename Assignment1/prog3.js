function main() {
    var No = 20;
    Displya(No);
}
function Displya(value) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= value / 2; iCnt++) {
        if ((value % iCnt) == 0) {
            console.log(iCnt);
        }
    }
}
main();

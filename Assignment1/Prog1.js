function main() {
    var No1 = 23;
    var No2 = 89;
    var No3 = 6;
    var Ans = 0;
    Ans = Maximum(No1, No2, No3);
    console.log("Maximum number is : " + Ans);
}
function Maximum(value1, value2, value3) {
    if (value1 > value2 && (value1 > value3)) {
        return value1;
    }
    else if (value2 > value1 && (value2 > value3)) {
        return value2;
    }
    else {
        return value3;
    }
}
main();

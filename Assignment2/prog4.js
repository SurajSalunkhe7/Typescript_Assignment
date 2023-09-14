function main() {
    var No = 5;
    var bRet = false;
    bRet = CheckArmstrong(No);
    if (bRet == true) {
        console.log(No + " Is Armstrong Number");
    }
    else {
        console.log(No + " Is Not Armstrong Number");
    }
}
var CheckArmstrong = function (value) {
    var temp = value;
    var isum = 0;
    var r = 0;
    var x = 0;
    while (value != 0) {
        r = value % 10;
        x = (r * r * r);
        isum = isum + x;
        value = Math.floor(value / 10);
    }
    console.log(isum);
    if (isum == temp) {
        return true;
    }
    else {
        return false;
    }
};
main();

var str1 = "Pune Kothrud Marvellous Infosystem";
var str2 = "Demo";
var res = 0;
res = Chkstr(str1, str2);
if (res == -1) {
    console.log("String contains Marvellos in it.");
}
else {
    console.log("String does not contains Marvellos in it.");
}
function Chkstr(cstr1, cstr2) {
    var first = cstr1.length;
    var second = cstr2.length;
    var i = 0;
    var j = 0;
    for (i = 0; i <= second - first; i++) {
        for (j = 0; j < first; j++) {
            if (cstr2[i + j] != cstr1[j]) {
                break;
            }
            if (j == second) {
                return i;
            }
        }
    }
    return -1;
}

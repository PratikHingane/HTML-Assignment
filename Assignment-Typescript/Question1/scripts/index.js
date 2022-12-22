var num1 = 2580;
var arrNum = Array<number> [];
var str = "";
function convertToArray(num) {
    while (num > 0) {
        var i = num % 10;
        num = Math.floor(num / 10);
        str += i;
    }
    for (var j = str.length - 1; j > -1; j--) {
        arrNum.push(parseInt(str[j]));
    }
}
convertToArray(num1);
console.log(arrNum);

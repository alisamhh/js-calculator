var entries = [];
var total = 0;
var temp = "";
$("button").click(function () {
    var val = $(this).text();
    if (!isNaN(val) || val === ".") {
        if ((temp == "" && val == "0") ||
            (temp.indexOf(".") > -1 && val === ".")) {
            return;
        }
        temp = temp + val;
        $("#display").val(temp);
    } else if (val === "=") {
        entries.push(temp);
        var entriesLength = entries.length;
        total = parseFloat(entries[0]);
        for (var i = 1; i < entriesLength;) {
            var nextEntry = parseFloat(entries[i + 1]);
            switch (entries[i]) {
                case "+":
                    total += nextEntry;
                    break;
                case "-":
                    total -= nextEntry;
                    break;
                case "*":
                    total *= nextEntry;
                    break;
                case "/":
                    total /= nextEntry;
                    break;
                }
            i = i + 2;
        }
        $("#display").val(total);
    } else {
        entries.push(temp);
        entries.push(val);
        temp = "";
        $("#display").val(temp);
    }
});
$("#clear").click(function () {
    entries = [];
    total = 0;
    temp = "";
});

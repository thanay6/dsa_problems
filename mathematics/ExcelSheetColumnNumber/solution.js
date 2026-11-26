

var titleToNumber = function (columnTitle) {

  
    const len = columnTitle.length;
    let num = 0;

    for (let i = len - 1; i >= 0; i--) {

        num += 26 ** (len - i - 1) * (columnTitle.charCodeAt(i) - 64);

    }

    return num;
};

console.log("6 | Expected: 702 | Actual:", titleToNumber("ZZ"));

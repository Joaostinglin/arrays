const emptyArray = [' '];

const numbers = {
    1() { return ' ' },
    2() { return 'ABC' },
    3() { return 'DEF' },
    4() { return 'GHI' },
    5() { return 'JKL' },
    6() { return 'MNO' },
    7() { return 'PQRS' },
    8() { return 'TUV' },
    9() { return 'WXYZ' },
}


getArrays = (input) => {
    let result = [];
    let [el1, el2, el3, el4] = splitString(input.toString());
    let el1Splited = el1 ? splitString(numbers[el1]()) : emptyArray;
    let el2Splited = el2 ? splitString(numbers[el2]()) : emptyArray;
    let el3Splited = el3 ? splitString(numbers[el3]()) : emptyArray;
    let el4Splited = el4 ? splitString(numbers[el4]()) : emptyArray;

    for (let i = 0; i < el1Splited.length; i++) {
        for (let u = 0; u < el2Splited.length; u++) {
            for (let z = 0; z < el3Splited.length; z++) {
                for (let k = 0; k < el4Splited.length; k++) {
                    result.push(validateEmpty(el1Splited[i], el2Splited[u], el3Splited[z], el4Splited[k]));
                }
            }
        }
    }

    return result;
}

splitString = (el) => {
    let arr = new Array();
    for (var i = 0; i < el.length; i++) {
        arr.push(el.charAt(i));
    }
    return arr;
}

validateEmpty = (a, b, c, d) => {
    var resultString = '';
    if (a != ' ') {
        resultString += a;
    }
    if (b != ' ') {
        resultString += b;
    }
    if (c != ' ') {
        resultString += c;
    }
    if (d != ' ') {
        resultString += d;
    }
    return resultString;
}

// console.log(getArrays(23))

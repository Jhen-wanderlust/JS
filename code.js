

function solution(S) {
    var stderr = 0,
        S_digits = [];
    while (S) {
        S_digits.push(S % 10);
        S = Math.floor(S / 10);
    }
    for (var index_S = 0; index_S < S_digits.length; index_S++) {
        var n = 0;
        for (var i = S_digits.length - 1; i >= 0; i--) {
            if (i !== index_S) {
                n = n * 10 + S_digits[i];
            }
        }
        stderr = Math.max(n, stderr);
        var newdata = stderr.toLocaleString()
       
    }
    return newdata;
}

console.log(solution(1452).toLocaleString());





function diffWaysToCompute(expression) {
    function solve(exp) {
        let result = [];

        for (let i = 0; i < exp.length; i++) {

            if (
                exp[i] === '+' ||
                exp[i] === '-' ||
                exp[i] === '*'
            ) {
                let left = solve(exp.substring(0, i));
                let right = solve(exp.substring(i + 1));

                for (let l of left) {
                    for (let r of right) {

                        if (exp[i] === '+') {
                            result.push(l + r);
                        }

                        else if (exp[i] === '-') {
                            result.push(l - r);
                        }

                        else {
                            result.push(l * r);
                        }
                    }
                }
            }
        }

        // No operator means it is just a number
        if (result.length === 0) {
            result.push(Number(exp));
        }

        return result;
    }

    return solve(expression);
}
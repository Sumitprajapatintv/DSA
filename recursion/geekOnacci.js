// Read input
let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
    input = input.trim().split('\n');

    let t = parseInt(input[0]); // number of test cases
    let index = 1;

    for (let i = 0; i < t; i++) {
        let [A, B, C, N] = input[index++].split(' ').map(Number);

        console.log(geekonacci(A, B, C, N));
    }
});

// Function to compute Geek-onacci
function geekonacci(A, B, C, N) {
    if (N === 1) return A;
    if (N === 2) return B;
    if (N === 3) return C;

    let x = A, y = B, z = C;

    for (let i = 4; i <= N; i++) {
        let next = x + y + z;
        x = y;
        y = z;
        z = next;
    }

    return z;
}
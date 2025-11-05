// function printstarts(n) {
//     for (let i = 0; i < n; i++) {
//         let str = ""

//         for (let j = 0; j < (n - i - 1); j++) {
//             str += " "
//         }
//          for (let j = 0; j < (2*i+1); j++) {
//             str += "*"
//         }
//         for (let j = 0; j < (n - i - 1); j++) {
//             str += " "
//         }
//         console.log(str)
//     }
// }

// printstarts(5);


function printstarts2(n) {
    for (let i = 0; i < n; i++) {
        let str = ""

        for (let j = 0; j < i; j++) {
            str += " "
        }
        for (let j = 0; j < (2*n - 2 * i - 1); j++) {
            str += "*"
        }
        for (let j = 0; j < i; j++) {
            str += " "
        }
        console.log(str)
    }
}

printstarts2(3);


// 0-0 9 0
// 1-1 7 1
// 2-2 5 2
// 3-3 3 3
// 4-4 1 4

// n-2i-1=9
// n-2-1=7
// n-4-1=5


// 2*5-0-1
// 2*5-1-1
// 2*5-2-1






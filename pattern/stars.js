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


// function printstarts2(n) {
//     for (let i = 0; i < n; i++) {
//         let str = ""

//         for (let j = 0; j < i; j++) {
//             str += " "
//         }
//         for (let j = 0; j < (2*n - 2 * i - 1); j++) {
//             str += "*"
//         }
//         for (let j = 0; j < i; j++) {
//             str += " "
//         }
//         console.log(str)
//     }
// }

// printstarts2(3);


// function printstarts2(n) {
//     for (let i = 0; i < n; i++) {
//         let str = ""

//         for (let j = 0; j < i; j++) {
//             str += " "
//         }
//         for (let j = 0; j < (2*n - 2 * i - 1); j++) {
//             str += "*"
//         }
//         for (let j = 0; j < i; j++) {
//             str += " "
//         }
//         console.log(str)
//     }
// }

// printstarts2(3);

// function printstarts2(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         let start;
//         if (i % 2 == 0) start = 0;
//         else start = 1
//         for (let j = 1; j <= i; j++) {
//            start+=
//         }

//         console.log(str)

//     }
// }

// printstarts2(5);


// function printstarts3(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for(let j=1;j<=i;j++)
//         {
//             str+=`${j}`
//         }
//          for(let j=1;j<=2*(n-i);j++)
//         {
//             str+=` `
//         }
//         for(let j=i;j>=1;j--)
//         {
//             str+=`${j}`
//         }
//         console.log(str)

//     }
// }

// printstarts3(5);






// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


// 1      1
// 12    21 
// 123  321
// 12344321


// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321


// 1
// 2
// 3
// 4
// 5
// 6


// 1-[1,6,1] 
// 2-[2,4,2]
// 3-[3,2,3]
// 4-[4,0,4]


// function printstarts4(n) {
//     let count=1;
//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for(let j=1;j<=i;j++)
//         {
//             str+=`${count++} `
//         }
//         console.log(str)

//     }
// }

// printstarts4(5);

// 1
// 23
// 456
// 78910
// 11 12 13 14

// function printstarts4(n) {
//     for (let i = n; i >= 1; i--) {
//         let str = "";

//         for(let j=1;j<=i;j++)
//         {
//             str+=String.fromCharCode(64+j)
//         }
//         console.log(str)

//     }
// }
// printstarts4(5);


// function printstarts4(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for(let j=1;j<=i;j++)
//         {
//             str+=String.fromCharCode(64+i)
//         }
//         console.log(str)

//     }
// }
// printstarts4(5);


function printstarts4(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        let char = 65;
        for (let j = 1; j <= (n - i); j++) {
            str += " "
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            if (j < (((2 * i - 1) / 2)+1)) {
                str += String.fromCharCode(char++);
            }
            else {
                str += String.fromCharCode(char--);
            }

        }
        for (let j = 1; j <= (n - i); j++) {
            str += " "
        }
        console.log(str)

    }
}
printstarts4(6);


// 1 - [3, 1, 3]
// 2 - [2, 3, 2]
// 3 - [1, 5, 1]
// 4 - [0, 7, 0]











// Problem Statement: Given two numbers N and M,
// find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M.
//  If the 'nth root is not an integer, return -1.

// Examples
// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// Input : N = 4, M = 69
// Output: -1
// Explanation : The 4th root of 69 does not exist. So, the answer is -1.

// function nthRoot(n,m)
// {   
//     for(let i=0;i<m;i++)
//     {
//         if(Math.pow(i,n)==m)
//         {
//             return i;
//         }
//     }
//     return -1;
// }   
// console.log(nthRoot(3,27))

function nthRoot(n,m)
{   
    let start=0;
    let end=Math.floor(m/2);

    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);

        if(Math.pow(mid,n)==m)
        {
            return mid
        }
        else if(Math.pow(mid,n)>m)
        {
            end=mid-1;
        }
        else{
            start=mid+1
        }
    }
    return -1;
}   
console.log(nthRoot(3,27))
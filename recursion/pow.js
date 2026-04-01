// function pow(x,n)
// {
//     if(n==0){
//         return 1;
//     }
//     return x*pow(x,n-1)
// }

// function pow(x, n) {
//     if ( n == 0) return 1
//     let ans = 1;
//     let temp=n
//     if(n<0)
//     {
//         x=1/x
//         temp=-n
//     }
//     console.log(x)
//     for(let i=0;i<temp;i++)
//     {
//         ans=ans*x
//     }
//     return ans
// }
function powX(x,n,res)
{
    if(n==0)return 1
    if(n<0){
        x=1/x
    }
}

function pow(x, n) {
   if(n==0)return 1
   let xxm=pow(x,n-1)
   let ans=x*xxm
   return ans
    
}
console.log(pow(2.00000, -2))
// function findGCD(n1,n2)
// {
//     let arr1=[]
//     let arr2=[]

//     for(let i=0;i<=n1;i++)
//     {
//         if(n1%i==0)
//         {
//             arr1.push(i)
//         }
//     }
//        for(let i=0;i<=n2;i++)
//     {
//         if(n2%i==0)
//         {
//             arr2.push(i)
//         }
//     }
//     console.log(arr1)
//     console.log(arr2)
//     if(arr1.length<arr2.length)
//     {
//         for(let i=arr1.length-1;i>=0;i--)
//         {
//             if(arr2.includes(arr1[i]))
//             {
//                 return arr1[i]
//             }
//         }
//     }
//     else{
        
    
//         for(let i=arr2.length-1;i>=0;i--)
//         {
//             if(arr1.includes(arr2[i]))
//             {
//                 return arr2[i]
//             }
//         }
    
//     }
// }

// console.log(findGCD(20,15))

function findGCD(a,b)
{
    while(a>0 && b>0)
    {
        if(a>b)
        {
            a=a%b;
        }
        else{
            b=b%a;
        }
        console.log(a,b)
    }
    if(a==0)
    {
        return b;
    }
    return a;
}

console.log(findGCD(9,12))
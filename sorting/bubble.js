function bubble(arr)
{   let n=arr.length;
    let isSwapped;
    for(i=0;i<n-1;i++)
    {   
        isSwapped=false
        for(let j=0;j<n-i-1;j++)
        {
            console.log("asadfasd")
            if(arr[j]>arr[j+1])
            {

                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwapped
            }
        }
        if(!isSwapped)break;
    }
    return arr;
}

console.log(bubble([1,2 ,3,4,5]))

// 1 5 4 2
// 1 4 5 2
// 1 4 2 5
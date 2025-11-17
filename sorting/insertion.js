function abc(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let key=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=key;
    }
    return arr
}

console.log(abc([10,8,7,6,65,4,3,2,1]))



